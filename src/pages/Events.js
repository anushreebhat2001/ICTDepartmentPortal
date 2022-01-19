import React from "react";
import "./events.css";
import { EventCard } from "../components/eventscard/EventsCard.js";

const Events = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay1'>
                <div className = 'heading1'>
                    I&CT EVENTS
                </div>
                </div>
            </div>
            <div id="pannel1">
                <table id="ecard1">
                    <tr>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                    </tr>
                    <tr>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                        <td><EventCard></EventCard></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Events;
