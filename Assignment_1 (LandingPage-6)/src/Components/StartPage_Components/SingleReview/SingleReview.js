import styled from "styled-components";

export const SingleReviewContainer = styled.section`
  width: 60vw;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 80vw;
    display: block;
    height: auto;
  }
`;
export const SingleReviewImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px 10px;
  @media screen and (max-width: 768px) {
    display: block;
    margin: auto;
  }
`;

export const SingleR = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    align-self: stretch;
    font-style: italic;
    font-size: 16.9px;
    font-family: Varela Round;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
`;

export const SingleReviewHeading = styled.h1`
  align-self: stretch;
  font-size: 24px;
  font-family: Varela Round;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
