import React from 'react';
import './search.css';

const Search = (props) => {
  return (
    <>
      <div className="headerContainer__search">
        <input placeholder="Type here..." type="text"/>
        <button type="submit" className="headerContainer__search__button">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;