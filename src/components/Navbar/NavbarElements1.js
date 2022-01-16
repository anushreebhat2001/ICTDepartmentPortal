import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: black;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
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
  margin-left: 582px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

