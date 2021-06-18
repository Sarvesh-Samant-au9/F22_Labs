import React from "react";
import "./Pricing.css";
import {
  GlobalHeading,
  GlobalButton,
  GlobalButtonLink,
  GlobalParaBelowHeading,
  CardContainer,
  CardWrapper,
  CardDetails,
} from "../../GlobalReuseable/GlobalComponents";
import {
  HeightPrice,
  PriceCardHeading,
  PriceDescription,
  PricePara,
  PriceSmall,
  PricingInput,
} from "./PricingComponent";
const Pricing = ({ pricingData, gridData }) => {
  const colorStyle = {
    color: "#ffffff",
    paddingTop: "40px",
  };
  const color2Style = {
    color: "#f1f2f3",
  };
  const buttonWidth = {
    width: "90%",
    margin: "auto",
    textAlign: "center",
  };
  const CardHeight = {
    height: "auto",
  };
  return (
    <HeightPrice>
      <GlobalHeading style={colorStyle}>Pricing {"&"} Plans</GlobalHeading>
      <GlobalParaBelowHeading style={color2Style}>
        Create custom landing pages with Omega that converts more visitors than
        any website.
      </GlobalParaBelowHeading>
      <CardContainer>
        <CardWrapper>
          {pricingData &&
            pricingData.map(
              ({
                id,
                heading,
                description,
                buttonText,
                smallPara,
                pricingInfo,
              }) => {
                return (
                  <CardDetails style={CardHeight} key={id}>
                    <PriceCardHeading>{heading}</PriceCardHeading>
                    <PricePara>{pricingInfo}</PricePara>
                    <PriceDescription>{description}</PriceDescription>
                    {smallPara !== " " ? (
                      <PriceSmall>{smallPara}</PriceSmall>
                    ) : (
                      <PricingInput
                        type="email"
                        placeholder="Enter Email"
                        className="place"
                      />
                    )}
                    <GlobalButton>
                      <GlobalButtonLink style={buttonWidth}>
                        {buttonText}
                      </GlobalButtonLink>
                    </GlobalButton>
                  </CardDetails>
                );
              }
            )}
        </CardWrapper>
      </CardContainer>

      <div className="container">
        {gridData &&
          gridData.map(({ id, heading, content }) => {
            return (
              <div className={`grid_${id}`} key={id}>
                <i className="fa fa-arrow-right absolute_arrow"></i>
                <h4 className="grid_h4">{heading}</h4>
                <p className="grid_p">{content}</p>
              </div>
            );
          })}
      </div>
    </HeightPrice>
  );
};

export default Pricing;
