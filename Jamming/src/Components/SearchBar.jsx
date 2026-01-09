import { useState } from "react";
import styles from "./GeneralContainer.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", term);
    props.onSearch(term);
  };

  return (
    <div >
      <input className={styles.inputBox}
        placeholder="Search for a song..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;