import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css"

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
     <div className="search-container">
    <input
      type="text"
      className="search-bar"
      placeholder="Search your Recent Transactions..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
    </div>
  );
}

export default SearchBar;