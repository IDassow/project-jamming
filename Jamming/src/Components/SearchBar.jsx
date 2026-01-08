import { useState } from "react";

function SearchBar() {
  const [term, setTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", term);
  };

  return (
    <div>
      <input
        placeholder="Search for a song..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;