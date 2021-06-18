import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBtnRouteLink,
} from "./Sidebar";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Demo</SidebarLink>
          <SidebarLink to="/">Products</SidebarLink>
          <SidebarLink to="/">Support</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnRouteLink to="/">Get Started</SideBtnRouteLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
