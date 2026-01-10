import Track from "./Track";
import styles from "./GeneralContainer.module.css";
function Tracklist({ tracks, onAdd, onRemove, isRemoval, playlistTracks }) {
  return (
    <div className={styles.trackList}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
          currentList = {playlistTracks}
          isAdded={playlistTracks?.some(t => t.id === track.id)}
        />
      ))}
    </div>
  );
}

export default Tracklist;
