import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return(
    <div>
      <div className='bottom1'>
      <table className='footerTable'>
          <tr>
            <th><h1 className='footerInfo1'><FontAwesomeIcon icon = {faEnvelope} /></h1></th>
            <th><h1 className='footerInfo1'><FontAwesomeIcon icon = {faMapMarkerAlt} /></h1></th> 
            <th><h1 className='footerInfo1'><FontAwesomeIcon icon = {faPhoneAlt} /></h1></th>
          </tr>
          <tr>
            <td><h1 className='footerInfo'>Deptmailid@xyz.com</h1></td>
            <td><h1 className='footerInfo'>Manipal Institute of Technology</h1></td>
            <td><h1 className='footerInfo'>Department phone no.</h1></td>
          </tr>
          <tr>
            <td><h1 className='footerInfo'>hod@mail.com</h1></td>
            <td><h1 className='footerInfo'>Manipal, Karnataka</h1></td>
            <td><h1 className='footerInfo'>Academic phone no.</h1></td>
          </tr>
          </table>
      </div>
      <div className='bottom2'>© 2021 - Dept of I&CT, MIT, Manipal - All Rights Reserved</div>
    </div>
  );
};

export default Footer;
