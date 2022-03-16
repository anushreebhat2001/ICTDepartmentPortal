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
                <NavLink to="/Forum">
                    Forum
                </NavLink>
                <NavLink to="Academics">
                    Academics
                </NavLink>
                <NavLink to="/Faculty">
                    Faculty
                </NavLink>
                <NavLink to="/News">
                    News
                </NavLink>
                <NavLink to="/Events">
                    Events
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar1;