import React from "react";
import "../styles/provider.css";

function SearchBar({ setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchbar-ctnr">
      {/* <input
        type="text"
        placeholder="Search providers..."
        onChange={handleSearchChange}
        className="search-bar"
      /> */}
    </div>
  );
}

export default SearchBar;
