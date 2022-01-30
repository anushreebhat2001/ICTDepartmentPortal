import React from "react";
import "./admin.css";
const eventadmin = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    EVENTS ADMIN
                </div>
                </div>
            </div>
            <div id="admindiv">
                  <h3 id="adminhead">Fill Event Details:</h3>
                  <form id="adminform">
                  <div class="rowadmin">
      <div class="formcol">
        <label for="admineventname">Event Name</label>
      </div>
      <div class="formcol">
        <input type="text" id="eventlabel" placeholder="Event name.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="lname">Day</label>
      </div>
      <div class="formcol">
        <input type="text" id="eventlabel" placeholder="Day.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="adminmonth">Month(in number)</label>
      </div>
      <div class="formcol">
      <input type="text" id="eventlabel" placeholder="Month.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="Description">Event Description</label>
      </div>
      <div class="formcol">
        <textarea id="admindescription" placeholder="Write event Description.." required></textarea>
      </div>
    </div>
    <div>
      <input type="submit" class="rowadminbuttons" value="Submit"/>
    </div>

    <div>
      <input type="submit" class="rowadminbuttons" value="Delete"/>
    </div>

    <div>
      <input type="submit" class="rowadminbuttons" value="Update"/>
    </div>
                  </form>
               </div>
        </div>
        
    );
};

export default eventadmin;