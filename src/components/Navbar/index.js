import React from "react";
import {
    Nav,
    NavLink,
    NavLogo,
    Bars,
    NavMenu,
} from "./NavbarElements";
import logo from '../../images/220px-Manipal_University_logo.png';
const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src = {logo} alt="Logo" height="80" width="80" left="10%"/>
            </NavLogo>
            <Bars />

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