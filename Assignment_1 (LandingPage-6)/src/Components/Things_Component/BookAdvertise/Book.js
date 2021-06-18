import React from "react";
import "./Book.css";
import {
  GlobalButton,
  GlobalButtonLink,
} from "../../GlobalReuseable/GlobalComponents";
import Image from "./Images/book.png";
const Book = () => {
  return (
    <div className="advertise">
      <img className="advertiseimage" src={Image} alt="book" />
      <div className="advertiseInfo">
        <div className="advertiseFlex">
          <h5>Get a free chapter of this book</h5>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </p>
        </div>
      </div>
      <GlobalButton>
        <GlobalButtonLink>Get a Free Chapter</GlobalButtonLink>
      </GlobalButton>
    </div>
  );
};

export default Book;
