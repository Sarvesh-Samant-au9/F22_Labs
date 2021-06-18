import React from "react";
import Review from "../Components/ReviewPage_Component/Reviews";
import { reviewData } from "../Components/Data/data";

const Reviews_Page = () => {
  return (
    <>
      <Review reviewData={reviewData} />
    </>
  );
};

export default Reviews_Page;
