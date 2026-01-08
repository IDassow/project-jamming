import Tracklist from "./TrackList";
import styles from "./GeneralContainer.module.css";
function Playlist({ name, tracks, onRemove, onNameChange }) {
  return (
    <div className={styles.generalContentBox}>
      <input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <Tracklist
        tracks={tracks}
        onRemove={onRemove}
        isRemoval={true}
      />

      <button>Save To Spotify</button>
    </div>
  );
}

export default Playlist;