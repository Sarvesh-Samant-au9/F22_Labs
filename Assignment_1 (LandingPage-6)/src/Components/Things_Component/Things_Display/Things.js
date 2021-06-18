import React from "react";
import "./Things.css";
import {
  GlobalHeading,
  GlobalParaBelowHeading,
} from "../../GlobalReuseable/GlobalComponents";
const Things = ({ thingsData }) => {
  return (
    <>
      <div className="things_height">
        <GlobalHeading>Things You'll Learn</GlobalHeading>
        <GlobalParaBelowHeading>
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </GlobalParaBelowHeading>
        <div className="container_things">
          {thingsData &&
            thingsData.map(({ id, text }) => {
              return (
                <div className={`grid_${id} grid_common`} key={id}>
                  <i className="fa fa-check arrow_absolute_things "></i>
                  <span className = "span_text_things">{text}</span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Things;
