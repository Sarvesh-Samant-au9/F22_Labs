import React from "react";

import {
  ChapterCardContainer,
  ChapterCardElement,
  ChapterCardHeading,
  ChapterCardPara,
  ChapterCardImage,
} from "./ChapterCard";
const ChapterCard = ({ chapterCardData }) => {
  return (
    <ChapterCardContainer>
      {chapterCardData &&
        chapterCardData.map(({ id, img, heading, content }) => {
          return (
            <ChapterCardElement key={id}>
              <ChapterCardImage src={img} alt={heading} />
              <ChapterCardHeading>{heading}</ChapterCardHeading>
              <ChapterCardPara>{content}</ChapterCardPara>
            </ChapterCardElement>
          );
        })}
    </ChapterCardContainer>
  );
};

export default ChapterCard;
