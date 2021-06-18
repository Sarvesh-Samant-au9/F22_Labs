import styled from "styled-components";
export const ChapterCardContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: auto;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 40vw;
  }

  @media screen and (max-width: 500px) {
    width: 80vw;
  }
`;

export const ChapterCardElement = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ChapterCardImage = styled.img`
  display: block;
  margin: auto;
  padding: 5px;
`;

export const ChapterCardHeading = styled.h5`
  font-size: 21.6px;
  color: #19191b;
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ChapterCardPara = styled.p`
  font-size: 14.4px;
  color: #696871;
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
