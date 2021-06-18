import styled from "styled-components";
export const HeightPrice = styled.div`
  min-height: 90vh;
  background-color: #413e65;
  width: auto;
`;

export const PriceCardHeading = styled.p`
  font-size: 14.4px;
  color: #5454d4;
  text-align: center;
`;

export const PriceDescription = styled.h3`
  text-align: center;
  color: #1d293f;
  font-size: 44px;
  font-family: Varela Round;
  margin-bottom: -15px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const PricePara = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

export const PriceSmall = styled.p`
  color: #696871;
  text-align: center;
  font-size: 10px;
  margin-bottom: 20px;
`;

export const PricingInput = styled.input`
  display: block;
  margin: auto;
  width: 90%;
  padding: calc((100%) - 98%);
  margin-bottom: 10px;
  outline: none;
  border: 2px solid black;
  border-radius: 4px;
`;
