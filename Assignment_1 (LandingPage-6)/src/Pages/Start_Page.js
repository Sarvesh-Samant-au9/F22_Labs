// This Page Includes Navbar, Main Section, 1 review
import React, { useState } from "react";
import Navbar from "../Components/StartPage_Components/Navbar";
import Sidebar from "../Components/StartPage_Components/Sidebar";
import Section1 from "../Components/StartPage_Components/SectionFirst";
import SingleReview from "../Components/StartPage_Components/SingleReview";

// Data for Section1
import { sectionData } from "../Components/Data/data";

const StartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Section1 sectionData={sectionData} />
      <SingleReview />
    </>
  );
};

export default StartPage;
