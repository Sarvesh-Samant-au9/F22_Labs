import React from "react";
import {
  ChapterContainer,
  ChapterBox1,
  ChapterBox2,
  ChapterSpan,
} from "./Chapter";
import {
  GlobalHeading,
  GlobalParaBelowHeading,
} from "../../GlobalReuseable/GlobalComponents";
import "./Chapter.css";

const Chapter = () => {
  return (
    <>
      <GlobalHeading>Chapters we've covered</GlobalHeading>
      <GlobalParaBelowHeading>
        Create Customer landing Pages with Omega that Converts more visitors
        than any website
      </GlobalParaBelowHeading>
      <div className="relative">
        <ChapterContainer>
          <i className="fa fa-arrow-left absolute"></i>
          <i className="fa fa-arrow-right absolute_2"></i>
          <ChapterBox1>
            <ChapterSpan>1</ChapterSpan>
          </ChapterBox1>
          <ChapterBox2>
            <p>Chapter 01</p>
            <h4>What is Problem Solving ?</h4>
            <p>
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page without coding.
            </p>
          </ChapterBox2>
        </ChapterContainer>
      </div>
    </>
  );
};
export default Chapter;
