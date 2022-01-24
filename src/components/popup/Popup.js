import React from "react";
import "./popupstyle.css";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}><h1 className="close-icon-content">x</h1></span>
        {props.content}
        <button className="close-button" onClick={props.handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;