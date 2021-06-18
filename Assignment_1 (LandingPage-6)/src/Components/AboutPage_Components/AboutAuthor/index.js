import React from "react";
import {
  AuthorWrapper,
  AuthorCard,
  AuthorInfo,
  AuthorName,
  AuthorPara,
  AuthorSpan,
  AuthorImage,
  AuthorParaInfo,
} from "./AboutAuthor";
import { GlobalHeading } from "../../GlobalReuseable/GlobalComponents";
import AImage from "./AuthorImages/oval.png";
const AboutAuthor = () => {
  return (
    <AuthorWrapper>
      <GlobalHeading style={{ marginBottom: "40px" }}>
        About the Author
      </GlobalHeading>
      <AuthorCard>
        <AuthorImage src={AImage} alt="Author" />
        <AuthorInfo>
          <AuthorName>Joseph Williams</AuthorName>
          <AuthorParaInfo>
            <AuthorPara>
              Hey! My name is Joseph Williams, I'm a product designer based in
              Berlin. Most recently I led design of multiple products at WeWork
              and prior to that I worked with start ups building their products
              and design culture
            </AuthorPara>
            <AuthorPara>
              Previous Products I built for the design community are used by
              tens of thousands of designers working at companied like Google,
              AirBnb, Netflix and Boeing. Products I built or designed are
              featured in Wired, TechCrunch, Forbesm Quartz, Smashing, Awwwards
              and more.
            </AuthorPara>
            <AuthorPara>
              Reach me on <AuthorSpan> Twitter</AuthorSpan> or
              <AuthorSpan> Email</AuthorSpan>
            </AuthorPara>
          </AuthorParaInfo>
        </AuthorInfo>
      </AuthorCard>
    </AuthorWrapper>
  );
};

export default AboutAuthor;
