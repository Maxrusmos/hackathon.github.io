import React from 'react';
import './header.css';
import logo from './../../res/logo.png';
import Search from './Search/Search';

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerContainer__logo">
          <h1>RiversLevel</h1>  
          <img src={logo} alt="logo"/>
        </div>
        <Search></Search>
      </div>
    </>
  );
}

export default Header;