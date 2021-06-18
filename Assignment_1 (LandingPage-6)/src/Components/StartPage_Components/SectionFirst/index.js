import React from "react";
import {
  SectionWrapper,
  SectionInfoContainer,
  SectionImage,
  SectionParaFlex,
  SectionParagraph,
  SectionBtn,
  SectionSmall,
} from "./SectionInfo";
import {
  GlobalHeading,
  GlobalButtonLink,
  GlobalButton,
} from "../../GlobalReuseable/GlobalComponents";

import Bookimage from "./images/b-1.png";

const Section1 = ({ sectionData }) => {
  return (
    <SectionWrapper>
      <SectionImage src={Bookimage} alt="Book" />
      <SectionInfoContainer>
        <GlobalHeading style={{ textAlign: "left" }}>
          Solve your daily life problems in 1 minute.
        </GlobalHeading>
        {sectionData &&
          sectionData.map((element) => (
            <SectionParaFlex>
              <i className="fa fa-check" aria-hidden="true"></i>
              <SectionParagraph>{element.para}</SectionParagraph>
            </SectionParaFlex>
          ))}
        <SectionBtn>
          <GlobalButton>
            <GlobalButtonLink>Get this book - Starts from $29</GlobalButtonLink>
          </GlobalButton>
        </SectionBtn>
        <SectionSmall>
          Interested in a free chapter?
          <span style={{ color: "#5454b4", cursor: "pointer" }}>
            Get it now{" "}
          </span>
        </SectionSmall>
      </SectionInfoContainer>
    </SectionWrapper>
  );
};

export default Section1;
