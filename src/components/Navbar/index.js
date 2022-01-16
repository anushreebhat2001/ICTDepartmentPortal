import React from "react";
import {
    Nav,
    NavLink,
    NavLogo,
    NavLogoText,
    Font1,
    Font2,
    Bars,
    NavMenu,
} from "./NavbarElements";
import logo from '../../images/220px-Manipal_University_logo.png';
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src = {logo} alt="Logo" height="65" left="10%"/>
            </NavLogo>
            <NavLogoText to="/">
                <Font1 to="/">DEPARTMENT OF INFORMATION AND COMMUNICATION TECHNOLOGY</Font1><br></br>
                <Font2 to="/">MANIPAL INSTITUTE OF TECHNOLOGY, MANIPAL, INDIA</Font2>
            </NavLogoText>
            <Bars/>

            <NavMenu>
                <NavLink to="/research">
                    Research
                </NavLink>
                <NavLink to="/qp">
                    Question Papers
                </NavLink>
                <NavLink to="/placements">
                    Placements
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;