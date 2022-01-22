import React, { useState } from "react";
import "./eventscardstyle.css";
import Popup from "../popup/Popup";

export function EventCard ({ day,month,eventname,venue,time,link })  {
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
                <div id="read"><button className="readmore" onClick={togglePopup}>Read more</button></div>
                {isOpen && <Popup
                content={<>
                    <b>Design your Popup</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </>}
                handleClose={togglePopup}
                />}
            </div>
        </div>
        </div>
    );
};