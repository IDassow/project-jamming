import Tracklist from "./TrackList";
import styles from "./GeneralContainer.module.css";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.generalContentBox}>
      <h2>Search Results</h2>
      <Tracklist
        tracks={searchResults}
        onAdd={onAdd}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
