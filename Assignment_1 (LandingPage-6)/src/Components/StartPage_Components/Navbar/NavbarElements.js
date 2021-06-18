import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.nav`
  background: #f6f6f8;
  height: 10vh;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0 24px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  letter-spacing: -0.68px;
  color: #19191b;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 900;
  margin-left: 24px;
  font-family: Varela Round;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 10vh;
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid #112;
  }
  &:hover {
    color: #5454d4;
    border-bottom: 3px solid #5454d4;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  white-space: nowrap;
  border-radius: 3px;
  background: #f0544c;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 10px 22px;

  &:hover {
    transition: all ease-in 0.2s;
    background: #000;
  }
`;
