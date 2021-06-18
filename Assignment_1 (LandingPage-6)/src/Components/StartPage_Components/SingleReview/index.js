import React from "react";
import {
  SingleReviewContainer,
  SingleR,
  SingleReviewHeading,
  SingleReviewImage,
} from "./SingleReview";
import UserImage from "./Images/oval.png";
const SingleReview = () => {
  return (
    <SingleReviewContainer>
      <SingleReviewImage src={UserImage} alt="user profile" />
      <SingleR>
        <p>
          “OMG! I cannot believe that I have got a brand new landing page after
          getting Omega. It was super easy to edit and publish.”
        </p>
        <SingleReviewHeading>Jonathon Taylor</SingleReviewHeading>
      </SingleR>
    </SingleReviewContainer>
  );
};

export default SingleReview;
