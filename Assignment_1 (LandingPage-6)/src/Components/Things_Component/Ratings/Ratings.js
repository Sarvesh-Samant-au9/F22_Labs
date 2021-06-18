import React from "react";
import "./Ratings.css";
const Ratings = ({ ratingsData }) => {
  return (
    <div className="rating_container">
      {ratingsData &&
        ratingsData.map(({ id, heading, content }) => {
          return (
            <div className="rating_heading" key={id}>
              <h3>{heading}</h3>
              <p>{content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Ratings;
