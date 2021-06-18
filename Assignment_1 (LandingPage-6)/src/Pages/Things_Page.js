// The Page Includes Things Book Advertise and Ratings
import React from "react";
import Book from "../Components/Things_Component/BookAdvertise/Book";
import Things from "../Components/Things_Component/Things_Display/Things";
import Ratings from "../Components/Things_Component/Ratings/Ratings";

import { thingsData, ratingsData } from "../Components/Data/data";

const Things_Page = () => {
  return (
    <>
      <Things thingsData={thingsData} />
      <Book />
      <Ratings ratingsData={ratingsData} />
    </>
  );
};

export default Things_Page;
