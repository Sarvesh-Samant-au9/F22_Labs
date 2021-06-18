import styled from "styled-components";
export const SectionWrapper = styled.section`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 24px 0px;
  margin: auto;
  margin-top: 40px;

  @media screen and (max-width: 990px) {
    display: block;
    img {
      width: 480px;
      margin: auto;
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 300px;
      margin: auto;
      display: block;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      width: 200px;
      margin: auto;
    }
  }
`;
export const SectionImage = styled.img`
  flex-basis: 1;
  width: 480px;
`;

export const SectionInfoContainer = styled.section`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 70vw;
    margin: auto;
    padding-left: 0;
  }
`;

export const SectionParaFlex = styled.section`
  display: flex;
  align-items: center;
  width: 70%;
  margin-right: auto;

  i {
    background-color: #cdcdff;
    border-radius: 50%;
    color: #5454d4;
    padding: 5px 5px;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin-top: 15px;
  }
  @media screen and (max-width: 768px) {
    i {
      background-color: #cdcdff;
      border-radius: 50%;
      color: #5454d4;
      padding: 4px 4px;
      font-size: 14px;
    }
  }
`;
//SectionParaFlex

export const SectionParagraph = styled.p`
  font-family: Varela Round;
  font-size: 18.9px;
  font-weight: 500;
  /* border: 2px solid black; */
  line-height: normal;
  letter-spacing: -0.59px;
  color: #19191b;
  padding-left: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding-top: 3px;
  }
`;

export const SectionBtn = styled.section`
  margin-top: 35px;
  align-self: stretch;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;
export const SectionSmall = styled.small`
  align-self: stretch;
  font-size: 12px;
`;
