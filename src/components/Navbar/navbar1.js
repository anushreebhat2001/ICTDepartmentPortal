import React from "react";
//import "./Navbar.css";
import {
    Nav,
    NavLink,
    NavMenu
} from "./NavbarElements1";
const Navbar1 = () => {
    return (
        <>
            <Nav>
            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/forum">
                    Forum
                </NavLink>
                <NavLink to="/academics">
                    Academics
                </NavLink>
                <NavLink to="/faculty">
                    Faculty
                </NavLink>
                <NavLink to="/news">
                    News
                </NavLink>
                <NavLink to="/events">
                    Events
                </NavLink>
                <NavLink to="/Facilities">
                    Facilities
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar1;