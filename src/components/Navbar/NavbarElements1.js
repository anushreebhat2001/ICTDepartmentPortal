import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5vw;
    z-index: 12;
    overflow:hidden;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
color: white;
font-size: 12px;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:white;
}
&:hover {
  color: grey;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: right;
  margin-left: 0.2vw

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

