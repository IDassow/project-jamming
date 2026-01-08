import { useState } from 'react'
import './App.css'
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from './Components/PlayList';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.find(saved => saved.id === track.id)) return;
    setPlaylistTracks([...playlistTracks, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter(saved => saved.id !== track.id)
    );
  };

  return (
    <>
       <h1>Jammming</h1>

      <SearchBar />

      <div style={{ display: "flex", justifyContent: "space-around", padding:10, width:"100%"}}>
        
          <SearchResults 
          searchResults={searchResults}
          onAdd={addTrack}
        />

          <Playlist
          name={playlistName}
          tracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={setPlaylistName}
        />
           
      </div>
    </>
  )
}

export default App
