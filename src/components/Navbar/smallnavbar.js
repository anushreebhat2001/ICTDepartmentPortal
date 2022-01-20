import React from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import useState from 'react-hook-use-state';

const Nav = styled.div `
    justify-contents: right;
    margin-top: 2vw;
`;

const NavLink = styled.li `
    width: 100%;
    margin:1.5vw;
    color: black;
    font-size: 3vw;
    align-items: left;
    justify-content: left;
    list-style-type: none;
`;

const NavMenu = styled.ul `
    margin: 0;
    padding: 0;
    position:relative
    height: 100%;
    display: block;
    background-color: #FFEBD8;
    width: 100%;
    padding:1vw;
    font-weight: 700;
    flex-direction: column;
    position: fixed;
    color: #2C1800;
    top: 6.4vw;
    left: 70vw;
`;

const Link = styled.a `
    text-decoration: none;
    color: black;
    font-size: 2.4vw;
    border-bottom: 0.1vw solid #771E00;
    font-weight:600;
    &:active {
        color: #F06E20 ;
    }
    &:visited {
        color: #2C1800;
    }
    &:hover {
        color: #F06E20;
        opacity: 0.7;
    }
`;

export function SmallNavbar () {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Nav>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && <NavMenu> Menu
                <NavLink>
                    <Link href="/">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="/#white">About </Link>
                </NavLink>
                <NavLink>
                    <Link href="/Forum">Forum </Link>
                </NavLink>
                <NavLink>
                    <Link href="/Academics">Academic </Link>
                </NavLink>
                <NavLink>
                    <Link href="/Faculty">Faculty </Link>
                </NavLink>
                <NavLink>
                    <Link href="/News">News </Link>
                </NavLink>
                <NavLink>
                    <Link href="/Events">Events </Link>
                </NavLink>
                <NavLink>
                    <Link href="/research">Research </Link>
                </NavLink>
                <NavLink>
                    <Link href="/qp">Question Papers </Link> 
                </NavLink>
                <NavLink>
                    <Link href="/placements">Placements </Link>
                </NavLink>
                <NavLink>
                    <Link href="/contact">Contacts</Link>
                </NavLink>
                <NavLink>
                    <Link href="/Facilities">Facilities</Link>
                </NavLink>
            </NavMenu> }
           </Nav>
        </>
    );
};