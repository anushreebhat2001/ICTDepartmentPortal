import React from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import useState from 'react-hook-use-state';

const Nav = styled.div `
    height: 230%;
    justify-contents: right;
    padding-right: 2vw;
`;

const NavLink = styled.li `
    width: 100%;
    padding: 1vw 1.1em;
    color: black;
    font-size: 1.2vw;
    align-items: left;
    justify-content: left;
    list-style-type: none;
`;

const NavMenu = styled.ul `
    margin: 0;
    padding: 0;
    height: 100%;
    display: block;
    background-color: white;
    width: 100%;
    list-style-type: none;
    flex-direction: column;
    position: fixed;
    top: 5vw;
    left: 80vw;
`;

const Link = styled.a `
    text-decoration: none;
    color: black;
    font-size: 1.5vw;
    &.active {
        color: #A9A9A9;
    }
    &:hover {
        color: #FFEBD8;
    }
`;

export function SmallNavbar () {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Nav>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && <NavMenu>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link> 
                </NavLink>
                <NavLink>
                    <Link href="#">Home </Link>
                </NavLink>
                <NavLink>
                    <Link href="#">Home</Link>
                </NavLink>
            </NavMenu> }
           </Nav>
        </>
    );
};