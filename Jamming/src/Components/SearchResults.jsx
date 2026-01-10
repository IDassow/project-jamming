import Tracklist from "./TrackList";
import styles from "./GeneralContainer.module.css";

function SearchResults({ resultsTracks, onAdd, playlistTracks}) {
  return (
    <div className={styles.generalContentBox}>
      <h2 style={{textAlign: "left"}} >Search Results</h2>
      <Tracklist
        tracks={resultsTracks}
        onAdd={onAdd}
        isRemoval={false}
        playlistTracks={playlistTracks}
      />
    </div>
  );
}

export default SearchResults;
