
const clientId = import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID
const redirectUri = "http://localhost:3000/";
let accessToken;

const Spotify = {
  async getAccessToken() {
    if (accessToken) return accessToken;

    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresMatch[1]) * 1000;

      window.setTimeout(() => (accessToken = ""), expiresIn);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    }

    const authUrl = `https://accounts.spotify.com/authorize` +
      `?client_id=${clientId}` +
      `&response_type=token` +
      `&scope=playlist-modify-public` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location = authUrl;
  },

  async search(term) {
    if (!term) return [];

    const token = await this.getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const json = await response.json();

    if (!json.tracks) return [];

    return json.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) return;

    const token = await this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const userResponse = await fetch(
      "https://api.spotify.com/v1/me",
      { headers }
    );
    const user = await userResponse.json();

    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/users/${user.id}/playlists`,
      {
        headers,
        method: "POST",
        body: JSON.stringify({ name }),
      }
    );
    const playlist = await playlistResponse.json();

    await fetch(
      `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
      {
        headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      }
    );
  },
};

export default Spotify;