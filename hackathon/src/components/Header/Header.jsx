import React from 'react';
import './header.css';
import logo from './../../res/logo.png';

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerContainer__logo">
          <h1>RiversLevel</h1>  
          <img src={logo} alt="logo"/>
        </div>
        <div className="headerContainer__search">
          <input placeholder="Type here..." type="text"/>
          <button type="submit" className="headerContainer__search__button">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;