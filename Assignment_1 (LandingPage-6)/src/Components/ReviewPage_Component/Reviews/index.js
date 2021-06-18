import React from "react";
import {
  GlobalHeading,
  GlobalParaBelowHeading,
  CardContainer,
  CardDetails,
  CardWrapper,
} from "../../GlobalReuseable/GlobalComponents";
import {
  CardParagraph,
  IconHeading,
  IconImage,
  IconWrapper,
  IconPara,
  ReviewAmazon,
} from "./ReviewComponents";
import StarRatings from "./StarRatings";
const Review = ({ reviewData }) => {
  return (
    <>
      <GlobalHeading>Reviews from readers</GlobalHeading>
      <GlobalParaBelowHeading>
        Create Custom landing pages with Omega that converts more vistors than
        any website
      </GlobalParaBelowHeading>

      <CardContainer>
        <CardWrapper>
          {reviewData &&
            reviewData.map(({ id, ratings, content, image, name, shop }) => {
              return (
                <CardDetails key={id}>
                  <StarRatings rating={ratings} />
                  <CardParagraph>{content}</CardParagraph>
                  <IconWrapper>
                    <IconImage src={image} alt="user" />
                    <div>
                      <IconHeading> {name} </IconHeading>
                      <IconPara> {shop} </IconPara>
                    </div>
                  </IconWrapper>
                </CardDetails>
              );
            })}
        </CardWrapper>
      </CardContainer>
      <ReviewAmazon>See All the Amazon Reviews </ReviewAmazon>
    </>
  );
};

export default Review;
