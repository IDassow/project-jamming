import { useState } from "react";
import styles from "./GeneralContainer.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", term);
    props.onSearch(term);
  };

  return (
    <div style={{display:"inline-block", justifyContent: "center",padding: 10}}>
      <input className={styles.inputBox}
        placeholder="Search for a song..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={e => e.key === "Enter" && props.onSearch(term)}
      />
      <div style={{ justifyContent: "center",padding: 10}}></div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;