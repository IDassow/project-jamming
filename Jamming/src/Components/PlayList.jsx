import Tracklist from "./TrackList";
import styles from "./GeneralContainer.module.css";
function Playlist({ name, playlistTracks, onRemove, onNameChange }) {
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

      <button style={{backgroundColor:"green"}}>Save To Spotify</button>
    </div>
  );
}

export default Playlist;