import Tracklist from "./TrackList";
import styles from "./GeneralContainer.module.css";
function Playlist({ name, playlistTracks, onRemove, onNameChange, onSave }) {

  function handleClick(){
    onSave();
  }

  return (
    <div className={styles.generalContentBox}>
      <input className={styles.inputBox}
        placeholder="My Playlist"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <Tracklist
        tracks={playlistTracks}
        onRemove={onRemove}
        isRemoval={true}
      />

      <button onClick={handleClick} style={{color:"white",backgroundColor:"green"}}>Save To Spotify</button>
    </div>
  );
}

export default Playlist;