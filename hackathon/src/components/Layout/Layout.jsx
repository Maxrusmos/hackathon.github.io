import React from 'react';
import Header from '../Header/Header';
import MainContentPart from '../MainContentPart/MainContentPart';
import './layout.css';

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <MainContentPart rivers={props.rivers}></MainContentPart>
    </>
  );
}

export default Layout;