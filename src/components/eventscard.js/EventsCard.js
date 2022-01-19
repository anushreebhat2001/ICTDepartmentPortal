import React from "react";
import "./eventscardstyle.css";

export function EventCard ()  {
    return (
        <div>
        <div id="card">
            <div id="calendar"><p id='date'><strong>12</strong><br></br>Jan</p></div>
            <div id="uppercard"></div>
            <div id="lowercard">
                <p id="details">
                    <strong>EVENT NAME<br></br></strong><strong><br></br>Venue: </strong> Teams<br></br><strong>Time: </strong> 5:00PM
                </p>
                <div id="read"><a className="readmore" href="#">Read more</a></div>
            </div>
        </div>
        </div>
    );
};