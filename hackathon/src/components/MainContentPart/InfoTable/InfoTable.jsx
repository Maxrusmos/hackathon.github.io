import React from 'react';
import './infoTable.css';
import InfoTableItem from './InfoTableItem/InfoTableItem';

const InfoTable = (props) => {
  return(
    <>
      <div className="InfoTableContainer">
        <h2 className="InfoTableContainer__title">Info</h2>
        <hr/>
        <InfoTableItem></InfoTableItem>
      </div>
    </>
  );
}

export default InfoTable;