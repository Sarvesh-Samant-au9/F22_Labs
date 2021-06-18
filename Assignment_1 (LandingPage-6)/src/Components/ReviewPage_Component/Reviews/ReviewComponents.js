import styled from "styled-components";

export const CardParagraph = styled.p`
  font-family: Varela Round;
  font-size: 18.1px;
  font-style: italic;
  line-height: 1.86;
  letter-spacing: -0.59px;
  color: #19191b;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconImage = styled.img`
  width: 39px;
  height: 39px;
`;

export const IconHeading = styled.h5`
  font-size: 15px;
  color: #19191b;
  font-family: Valera Round;
  padding-left: 10px;
`;

export const IconPara = styled.p`
  font-size: 10px;
  color: #696871;
  padding-left: 10px;
`;

export const ReviewAmazon = styled.p`
  text-align: center;
  font-size: 16px;
  color: #010a0e;
  margin-bottom: 40px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: #5454d4;
    text-decoration: underline;
  }
`;
