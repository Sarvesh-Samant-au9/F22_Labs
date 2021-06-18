import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background: #000000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: #fff;
  font-family: Varela Round;

  &:hover {
    color: #aeaefc;
    transition: ease-in-out 0.2s;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBtnRouteLink = styled(Link)`
  border-radius: 3px;
  background: #f0544c;
  padding: 16px 24px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: 2px solid #c31a12;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: white;
    color: #f0544c;
    transition: all ease-in-out 0.2s;
    border: 2px solid transparent;
  }
`;
