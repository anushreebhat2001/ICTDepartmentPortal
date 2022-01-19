import React from "react";
import "./events.css";
import { EventCard } from "../components/eventscard/EventsCard";

const Events = () => {
    return (
        <div>
            <div className = 'section1'>
                <div className = 'overlay'>
                <div className = 'heading'>
                    I&CT EVENTS
                </div>
                </div>
            </div>
            <div id="pannel">
                <table id="ecard">
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
