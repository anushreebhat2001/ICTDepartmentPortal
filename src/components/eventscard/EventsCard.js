import React from "react";
import "./eventscardstyle.css";

export function EventCard ({ day,month,eventname,venue,time,link })  {
    return (
        <div>
        <div id="card">
            <div id="calendar"><p id='date'><strong>{day}</strong><br></br>{month}</p></div>
            <div id="uppercard"></div>
            <div id="lowercard">
                <p id="details">
                    <strong>{eventname}<br></br></strong><strong><br></br>Venue: </strong> {venue}<br></br><strong>Time: </strong> {time}
                </p>
                <div id="read"><a className="readmore" href={link}>Read more</a></div>
            </div>
        </div>
        </div>
    );
};