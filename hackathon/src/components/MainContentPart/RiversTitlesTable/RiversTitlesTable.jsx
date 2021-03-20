import React from 'react';
import RiversTableItem from './RiversTableItem/RiversTableItem';
import './riversTitlesTable.css';

const RiversTitlesTable = (props) => {
  let riversArray = props.rivers.map((r) => (
    <RiversTableItem riverName={r.name}></RiversTableItem>
  ));
  console.log(props.rivers);
  return (
    <>
      <div className="riversTitlesTableContainer">
        <h2 className="riversTitlesTableContainer__title">Rivers</h2>
        <hr/>
        {riversArray}
      </div>
    </>
  );
}

export default RiversTitlesTable;