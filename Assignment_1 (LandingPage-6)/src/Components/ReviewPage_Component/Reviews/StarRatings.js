import React from "react";

const StarRatings = (props) => {
  const colors = {
    color: "#f04037",
  };
  console.log(props);
  const stars = [];
  for (let i = 1; i <= 5; i = i + 1) {
    if (i <= props.rating) {
      stars.push(<i key={i} className="fas fa-star" style={colors}></i>);
    } else if (
      i === Math.ceil(props.rating) &&
      !Number.isInteger(props.rating)
    ) {
      stars.push(
        <i key={i} className="fas fa-star-half-alt " style={colors}></i>
      );
    } else {
      stars.push(<i key={i} className="far fa-star" style={colors}></i>);
    }
  }
  return <>{stars}</>;
};

export default StarRatings;
