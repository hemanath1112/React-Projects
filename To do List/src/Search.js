import React from "react";
import "./Search.css";

const Search = ({ search, setSearch }) => {
  return (
    <form action="" className="search" onSubmit={(e) => e.preventDefault}>
      <input
        type="text"
        name="search"
        id="search"
        autoFocus
        placeholder="Search Item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
