import React from "react";
import "./admin.css";
const adminresearch = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    RESEARCH ADMIN
                </div>
                </div>
            </div>
            <div id="admindiv">
                  <h3 id="adminhead">Fill Research Details:</h3>
                  <form id="adminform">
                  <div class="rowadmin">
      <div class="formcol">
        <label for="admineventname">Research Domain Name</label>
      </div>
      <div class="formcol">
        <input type="text" id="eventlabel" placeholder="Domain name.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="lname">Faculty Name</label>
      </div>
      <div class="formcol">
        <input type="text" id="eventlabel" placeholder="Faculty.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="adminmonth">Faculty Email</label>
      </div>
      <div class="formcol">
      <input type="text" id="eventlabel" placeholder="Email id.." required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="Description">Prerequisites</label>
      </div>
      <div class="formcol">
        <textarea id="admindescription" placeholder="Prerequisites required.." required></textarea>
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

export default adminresearch;