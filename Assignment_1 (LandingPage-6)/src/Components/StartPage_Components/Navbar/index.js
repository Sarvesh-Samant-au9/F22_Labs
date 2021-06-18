import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars as Bars } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Omega</NavLogo>
          <MobileIcon onClick={toggle}>
            <Bars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Demos </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Products </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Support </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Get Started</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
