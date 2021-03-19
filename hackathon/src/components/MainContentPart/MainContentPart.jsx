import React from 'react';
import InfoTable from './InfoTable/InfoTable';
import RiversTitlesTable from './RiversTitlesTable/RiversTitlesTable';
import './mainContentPart.css';

const MainContentPart = (props) => {
  return (
    <>
      <div className="MainContentPartContainer">
        <RiversTitlesTable></RiversTitlesTable>
        <InfoTable></InfoTable>
      </div>
    </>
  );
}

export default MainContentPart;