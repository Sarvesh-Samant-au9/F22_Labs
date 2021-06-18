import styled from "styled-components";
export const ChapterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65vw;
  align-items: stretch;
  padding: 0 30px;
  height: 350px;
  position: relative;
  background-color: #f2f7f8;
  margin: auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const ChapterBox1 = styled.div`
  flex-basis: 60%;
  padding: 0px 80px;
  align-self: center;
  align-items: center;
  width: 194px;
  height: 192px;
  background-color: #eae9f2;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 40%;
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    flex-basis: 100%;
    width: 90%;
    margin-top: 30px;
    padding: 0px;
  }
`;
export const ChapterBox2 = styled.div`
  flex-basis: 200%;
  font-family: Varela Round;
  padding: 2px 10px;
  margin-left: 30px;
  align-self: stretch;
  margin-top: 50px;
  p:nth-of-type(1) {
    color: #5454d4;
    margin-bottom: 8px;
    line-height: 1.75;
    letter-spacing: -0.45px;
    font-size: 18px;
  }
  h4 {
    line-height: normal;
    letter-spacing: -0.68px;
    color: #19191b;
    font-weight: 700;
  }
  p {
    margin-top: 30px;
    line-height: 1.86;
    letter-spacing: -0.59px;
    color: #19191b;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 16px;
    padding: 2px 5px;
    flex-basis: 100%;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0px;
    flex-basis: 100%;
    p:nth-of-type(1) {
      margin-bottom: 8px;
      line-height: normal;
      letter-spacing: -0.45px;
      font-size: 12px;
    }
    h4 {
      line-height: normal;
      letter-spacing: -0.68px;
      color: #19191b;
      font-weight: 700;
    }
    p {
      margin-top: 0px;
      line-height: 1.86;
      letter-spacing: -0.59px;
      color: #19191b;
    }
  }
`;

export const ChapterSpan = styled.span`
  display: block;
  text-align: center;
  color: #413e65;
  font-weight: 600;
  /* width: 49px; */
  height: 160px;
  font-size: 126px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    height: auto;
    font-size: 100px;
    margin-top: 10px;
  }
`;
