import { useState } from 'react'
import './App.css'
import mockTrackList from './mockDataset';
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from './Components/PlayList';
import Spotify from "./util/SpotifyAPI";

function App() {
  const [searchResults, setSearchResults] = useState(mockTrackList);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);


  const addTrack = (track) => {
    if (playlistTracks.find(saved => saved.id === track.id)){
      setPlaylistTracks(
        playlistTracks.filter(saved => saved.id !== track.id)
      );
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter(saved => saved.id !== track.id)
    );
  };

  const search = async (term) => {
    try {
      const results = await Spotify.search(term);
      setSearchResults(results);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  const savePlaylist = () => {
    const uris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, uris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  // function handleSubmit(e) {
  //   const enteredPassword = e.target.querySelector(
  //     'input[type="password"]').value;
  //   const auth = enteredPassword == password;
  //   setAuthorized(auth)
  // }

  // const login = (
  //   <>
  //   <h1>Must Login</h1>
  //     <form action="#" onSubmit={handleSubmit}>
  //       <input type="password" placeholder="Password"/>
  //       <input type="submit"/>
  //     </form>
  //   </>
  // );
  // const mainDisplay = (
  //   <div >
  //   <SearchBar onSearch={search} />
  //     <div style={{ display: "flex", justifyContent: "space-around", padding: 10, width: "100%" }}>
  //       <SearchResults
  //         resultsTracks={searchResults}
  //         onAdd={addTrack}
  //         playlistTracks={playlistTracks} />
  //       <Playlist
  //         name={playlistName}
  //         playlistTracks={playlistTracks}
  //         onRemove={removeTrack}
  //         onNameChange={setPlaylistName}
  //         onSave={savePlaylist} />
  //     </div>
  //   </div>
  // )

  return (
    <>
       <h1>Jammming</h1>
       <div style={{ margin:"auto", width: "100%" }}>
        <SearchBar onSearch={search} />
          <div style={{ display: "flex", justifyContent: "space-around", padding: 10, width: "100%" }}>
            <SearchResults
              resultsTracks={searchResults}
              onAdd={addTrack}
              playlistTracks={playlistTracks} />
            <Playlist
              name={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onNameChange={setPlaylistName}
              onSave={savePlaylist} />
          </div>
       </div>

    </>
  )
}

export default App
