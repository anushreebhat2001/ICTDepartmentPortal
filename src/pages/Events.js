import React from "react";
import "./events.css";
import { EventCard } from "../components/eventscard/EventsCard.js";

const Events = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT EVENTS
                </div>
                </div>
            </div>
            <div id="bg">
            <div id="pannel1">
        <table id="ecard1">
        <tr>
          <td><EventCard day='10' month='Jan' eventname='Event 1' venue='Venue 1' time='Time1' link='/Events'/></td>
          <td><EventCard day='11' month='Jan' eventname='Event 2' venue='Venue 2' time='Time2' link='/'/></td>
          <td><EventCard day='12' month='Jan' eventname='Event 3' venue='Venue 3' time='Time3' link='/Events'/></td>
          <td><EventCard day='13' month='Jan' eventname='Event 4' venue='Venue 4' time='Time4' link='/Events'/></td>
          </tr>
        </table>
        </div>
        <div id="pannel1">
        <table id="ecard1">
        <tr id="tb">
        <td><EventCard day='10' month='Jan' eventname='Event 11' venue='Venue 11' time='Time11' link='/Events'/></td>
          <td><EventCard day='11' month='Jan' eventname='Event 12' venue='Venue 12' time='Time12' link='/Events'/></td>
          <td><EventCard day='12' month='Jan' eventname='Event 13' venue='Venue 13' time='Time13' link='/Events'/></td>
          <td><EventCard day='13' month='Jan' eventname='Event 14' venue='Venue 14' time='Time14' link='/Events'/></td>
          </tr>
        </table>
        </div>
        <div id="pannel1">
        <table id="ecard1">
        <tr id="tb">
        <td><EventCard day='10' month='Jan' eventname='Event 21' venue='Venue 21' time='Time21' link='/Events'/></td>
          <td><EventCard day='11' month='Jan' eventname='Event 22' venue='Venue 22' time='Time22' link='/Events'/></td>
          <td><EventCard day='12' month='Jan' eventname='Event 23' venue='Venue 23' time='Time23' link='/Events'/></td>
          <td><EventCard day='13' month='Jan' eventname='Event 24' venue='Venue 24' time='Time24' link='/Events'/></td>
          </tr>
        </table>
        </div>
        </div>
        </div>
    );
};

export default Events;
