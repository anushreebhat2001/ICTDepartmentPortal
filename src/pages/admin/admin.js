import React from "react";
import "./admin.css";
const admin = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    I&CT ADMIN PORTAL
                </div>
                </div>
            </div>
            <div id="mainadmin">
                  <h3  id="mainhead">Select a form</h3>
                  <div id="buttonmainadmin">
                  <a id="buttonhref" href="/Adminevent">Events</a>
                 </div>
                 <div id="buttonmainadmin">
                  <a id="buttonhref" href="/Adminresearch">Research</a>
                 </div>
                 <div id="buttonmainadmin"> 
                  <a id="buttonhref" href="/Adminnews">Announcements</a>
                 </div>
                </div>
        </div>
    );
};

export default admin;