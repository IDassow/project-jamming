import { useState } from 'react'
import './App.css'
import mockTrackList from './mockDataset';
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from './Components/PlayList';

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
  const search = (term) => {
    const results = mockTrackList.filter(track =>
      track.name.toLowerCase().includes(term.toLowerCase()) ||
      track.artist.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
       <h1>Jammming</h1>

      <SearchBar onSearch={search}/>

      <div style={{ display: "flex", justifyContent: "space-around", padding:10, width:"100%"}}>
        <SearchResults 
          resultsTracks={searchResults}
          onAdd={addTrack}
          playlistTracks={playlistTracks}
        />
        <Playlist
          name={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={setPlaylistName}
        />
           
      </div>
    </>
  )
}

export default App
