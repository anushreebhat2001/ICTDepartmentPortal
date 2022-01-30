import React from "react";
import "./admin.css";
const adminnews = () => {
    return (
        <div>
            <div className = 'section'>
                <div className = 'overlay2'>
                <div className = 'heading2'>
                    ANNOUNCEMENTS ADMIN
                </div>
                </div>
            </div>
            <div id="admindiv">
                  <h3 id="adminhead">Fill Announcement Details:</h3>
                  <form id="adminform">
                  <div class="rowadmin">
      <div class="formcol">
        <label for="admineventname">Announcement Title</label>
      </div>
      <div class="formcol">
        <input type="text" id="eventlabel" placeholder="Title.." required/>
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
        <label for="adminmonth">Month</label>
      </div>
      <div class="formcol">
      <input type="text" id="eventlabel" placeholder="Month(in letters, eg:Jan)" required/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="adminmonth">Files(in JPG, PNG, PDF, DOC(X), XLS(X), PPT(X),TXT format only) </label>
      </div>
      <div class="formcol">
      <input id="eventlabel" type="file" accept="image/jpeg,.xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,image/png,application/pdf"/>
      </div>
    </div>
    <div class="rowadmin">
      <div class="formcol">
        <label for="Description">Description</label>
      </div>
      <div class="formcol">
        <textarea id="admindescription" placeholder="Announcement Description..."></textarea>
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

export default adminnews;