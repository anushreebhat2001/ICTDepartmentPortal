import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: white;
    height: 75px;
    display: flex;
    justify-content: space-between ;
    align-items: center;
    padding: 0.5vw;
    margin:0;
    z-index: 12;
    position: -webkit-sticky;
    position: sticky;
    top: 2vw;
    @media screen and (max-width: 1200px) {
      position: relative;
      top: 2.6vw;
      height: 6vw;
      display: flex;
      position: -webkit-sticky;
      position: sticky;
    }
    @media screen and (max-width: 768px) {
      position: relative;
      top: 0vw;
      height: 6vw;
      display: flex;
      position: -webkit-sticky;
      position: sticky;
    }
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  margin-left: 0;
  padding:0;
`;
export const NavLogoText = styled(Link)`
  cursor: pointer;
  font-family: 'Times New Roman';
  font-weight: 400;
  font-size: 1.3vw;
  text-decoration: none;
  color: black;  
  margin-left: 0.55vw;
  @media screen and (max-width: 768px) {
    margin-right: 45vw;
  }
`;
export const Font1 = styled(Link)`
  font-size: 1.2vw;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
export const Font2 = styled(Link)`
  font-size: 1.1vw;
  text-decoration: none;
  color: black;
`;

export const NavLink = styled(Link)`
color: black;
font-weight: 500;
font-size: 1.2vw;
display: flex;
align-items: center;
text-align:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  color: rgb(223, 122, 0);
}

&:hover {
  color: rgb(160, 93, 12);
}
&:link {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    margin-left: 50vw;
    margin-bottom: 6vw;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;