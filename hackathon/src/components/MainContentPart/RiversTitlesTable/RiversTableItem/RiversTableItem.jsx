import React from "react";
import "./riversTableItem.css";
import { NavLink } from "react-router-dom";

const RiversTableItem = (props) => {
  return (
    <>
      <NavLink to={props.riverName}>
        <div className="riversTableItemContainer">
          <h3>{props.riverName}</h3>
        </div>
      </NavLink>
    </>
  );
};

export default RiversTableItem;
