import React from "react";
import { useMediaQuery } from "react-responsive";
import {
    Nav,
    NavLink,
    NavLogo,
    NavLogoText,
    Font1,
    Font2,
    NavMenu,
} from "./NavbarElements";
import "./navbar.css";
import { SmallNavbar } from "./smallnavbar";
import logo from '../../images/220px-Manipal_University_logo.png';


const Navbar = () => {
    const issmallscreen = useMediaQuery ({ query: '(max-width: 768px)' });
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img id='logo' src = {logo} alt="Logo"/>
            </NavLogo>
            <NavLogoText to="/">
                <Font1 to="/">DEPARTMENT OF INFORMATION AND COMMUNICATION TECHNOLOGY</Font1><br></br>
                <Font2 to="/">MANIPAL INSTITUTE OF TECHNOLOGY, MANIPAL, INDIA</Font2>
            </NavLogoText>
             {issmallscreen && <SmallNavbar />}

            {!issmallscreen && <NavMenu>
                <NavLink to="/research">
                    Research
                </NavLink>
                <NavLink to="/qp">
                    Question Papers
                </NavLink>
                {/* <NavLink to="/placements">
                    Placements
                </NavLink> */}
                <NavLink to="/contact">
                    Contacts
                </NavLink>
                {/* <NavLink to="/Admin">
                    Admin
                </NavLink> */}
            </NavMenu> }
           </Nav> 
        </>
    );
};
export default Navbar;