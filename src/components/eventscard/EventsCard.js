import React, { useState } from "react";
import "./eventscardstyle.css";
import Popup from "../popup/Popup";

export function EventCard ({ poster,day,month,eventname,venue,time,description, link })  {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <div id="card">
            <div id="calendar"><p id='date'><strong>{day}</strong><br></br>{month}</p></div>
            <div id="uppercard"><img id="pic" src={poster}/></div>
            <div id="lowercard">
                <p id="details">
                    <strong>{eventname}<br></br></strong><strong><br></br>Venue: </strong> {venue}<br></br><strong>Time: </strong> {time}
                </p>
                <div id="read"><button className="readmore" onClick={togglePopup} >Read more</button></div>
                {isOpen && <Popup
                content={<>
                    <b id="eventname">{eventname}</b>
                    <p id="popupcard"><strong>Day:</strong> {day}<br></br><strong>Month:</strong> {month}<strong><br></br>Venue: </strong> {venue}<br></br><strong>Time: </strong> {time}<br></br></p>
                    <p id="popupdesc">{description}</p>
                    <p id="popupdesc"><a id="linkpopup" href={link} target="_blank">{link}</a></p>
                </>}
                handleClose={togglePopup}
                />}
            </div>
        </div>
        </div>
    );
};