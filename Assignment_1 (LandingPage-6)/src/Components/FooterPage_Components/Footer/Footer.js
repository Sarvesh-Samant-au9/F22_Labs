import React from "react";
import "./footer.css";
import {
  GlobalButton,
  GlobalButtonLink,
} from "../../GlobalReuseable/GlobalComponents";
const Footer = () => {
  return (
    <div className="footer_Container">
      <div className="footer_1">
        <h2 className="styleText heading_style">Learn Problem Solving</h2>
        <p className="styleText para_heading">
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </p>
      </div>
      <div className="footer_2">
        <GlobalButton>
          <GlobalButtonLink>Get This Book</GlobalButtonLink>
        </GlobalButton>
      </div>
    </div>
  );
};

export default Footer;
