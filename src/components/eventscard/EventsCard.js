import React, { useState } from "react";
import "./eventscardstyle.css";
import Popup from "../popup/Popup";

export function EventCard ({ day,month,eventname,venue,time,description })  {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <div id="card">
            <div id="calendar"><p id='date'><strong>{day}</strong><br></br>{month}</p></div>
            <div id="uppercard"></div>
            <div id="lowercard">
                <p id="details">
                    <strong>{eventname}<br></br></strong><strong><br></br>Venue: </strong> {venue}<br></br><strong>Time: </strong> {time}
                </p>
                <div id="read"><button className="readmore" onClick={togglePopup} >Read more</button></div>
                {isOpen && <Popup
                content={<>
                    <b id="eventname">{eventname}</b>
                    <p id="popupcard"><strong>Day:</strong> {day}<br></br><strong>Month:</strong> {day}<strong><br></br>Venue: </strong> {venue}<br></br><strong>Time: </strong> {time}<br></br></p>
                    <p id="popupdesc">{description}</p>
                </>}
                handleClose={togglePopup}
                />}
            </div>
        </div>
        </div>
    );
};