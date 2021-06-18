import styled from "styled-components";
export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
`;

export const AuthorHeading = styled.h2`
  text-align: center;
  color: #19191b;
  flex-basis: 100%;
  margin-top: 30px;
  letter-spacing: -0.9px;
  font-size: 54px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 10px;
  }
`;
export const AuthorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
  }
`;

export const AuthorImage = styled.img`
  width: 244px;
  @media screen and (max-width: 768px) {
    width: 144px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const AuthorName = styled.h4`
  font-size: 21.6px;
  letter-spacing: -0.69px;
  color: #19191b;
  padding-left: 40px;
  font-family: Varela Round;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 10px;
  }
`;
export const AuthorParaInfo = styled.div`
  align-self: stretch;
  padding-left: 40px;
  width: 70%;
  font-family: Varela Round;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: auto;
    padding-left: 0;
  }
`;
export const AuthorPara = styled.p`
  font-size: 14.4px;
  color: #696871;
  letter-spacing: -0.45px;
  /* padding-bottom: 15px; */
  font-weight: 300;
  padding: 15.3px 0;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const AuthorSpan = styled.span`
  color: #19191b;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  transition: 0.2s ease-in all;
  &:hover {
    border-radius: 2px;
    color: #5454d4;
    border-bottom: 2px solid #5454d4;
  }
`;
