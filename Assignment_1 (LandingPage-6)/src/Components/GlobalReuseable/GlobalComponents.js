import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalHeading = styled.h2`
  text-align: center;
  margin-top: 40px;
  color: #19191b;
  margin-top: 30px;
  letter-spacing: -0.9px;
  font-size: 54px;
  line-height: 63px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 8px;
    line-height: normal;
  }
  @media screen and (max-width: 350px) {
    font-size: 20px;
    margin-top: 2px;
  }
`;

export const GlobalParaBelowHeading = styled.p`
  margin-top: 8px;
  margin-bottom: 20px;
  color: #696871;
  text-align: center;
  letter-spacing: -0.59px;
  font-family: Varela Round;
  font-size: 18.9px;
  padding: 0rem calc((100vw - 400px) / 2);
  @media screen and (max-width: 768px) {
    font-size: 12px;
    letter-spacing: -0.1px;
    padding: 0rem calc((100vw - 200px) / 2);
  }
`;

export const GlobalButton = styled.div`
  display: flex;
`;

export const GlobalButtonLink = styled(Link)`
  white-space: nowrap;
  border-radius: 3px;
  background: #f0544c;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  padding: 10px 22px;

  &:hover {
    transition: all ease-in 0.2s;
    background: #000;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
    letter-spacing: -0.1px;
    padding: 10px 8px;
    margin-bottom: 6px;
  }
`;

export const CardContainer = styled.div`
  width: 85vw;
  margin: auto;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: auto;
  height: 340px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: auto;
  }
`;

export const CardDetails = styled.div`
  margin-bottom: 2rem;
  margin: auto;
  padding: 10px;
  align-self: stretch;
  line-height: 2;
  border-radius: 9px;
  background-color: #f8f8f8ff;
  width: 30%;
  height: 100%;

  &:hover {
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    width: 60vw;
  }
  @media screen and (max-width: 500px) {
    width: 70vw;
  }
`;
