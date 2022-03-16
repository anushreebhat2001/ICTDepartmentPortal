import React from "react";
import "./events.css";
import { EventCard } from "../components/eventscard/EventsCard.js";
import EventsData from "../components/events/events-info.json";

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
              {
                  EventsData.map((post, index) => (
                  <div id="pannel1">
                  <table id='ecard1' key={index}>
                  <tr>
                  <td>
                  <EventCard 
                    day={post.d1} 
                    month={post.m1} 
                    eventname={post.n1}
                    venue={post.v1} 
                    time={post.t1} 
                    description={post.desc1}
                    link='/Events'/>
                    </td>
                    <td>
                  <EventCard 
                    day={post.d2} 
                    month={post.m2} 
                    eventname={post.n2}
                    venue={post.v2} 
                    time={post.t2} 
                    description={post.desc2}
                    link='/Events'/>
                    </td>
                    <td>
                  <EventCard 
                    day={post.d3} 
                    month={post.m3} 
                    eventname={post.n3}
                    venue={post.v3} 
                    time={post.t3} 
                    description={post.desc3}
                    link='/Events'/>
                    </td>
                    <td>
                  <EventCard 
                    day={post.d4} 
                    month={post.m4} 
                    eventname={post.n4}
                    venue={post.v4} 
                    time={post.t4} 
                    description={post.desc4}
                    link='/Events'/>
                    </td>
                    </tr>
                  </table>
                  </div>
                  ))
              }
        </div>
        </div>
    );
};

export default Events;
