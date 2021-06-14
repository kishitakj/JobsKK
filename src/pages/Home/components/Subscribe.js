import React from "react";
import styled from "styled-components";
import { ReactComponent as IndiaFlag } from "../../../assets/images/india.svg";
import { DesktopQuery } from "./../../../constants/queries";
const NumberInput = styled.input`
  border: 0px;
  font-size: 12px;
  /* flex: 1; */
  font-style: "proxima-nova";
  margin-left: 1rem;
  :focus-visible {
    border: 0px;
    outline: 0;
  }
  ${DesktopQuery} {
    margin-left: 2rem;
    font-size: 21px;
    height: 21px;
  }
`;
const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 6px;
  padding: 9px;
  width: max-content;
  min-width: 12rem;
  align-items: center;
  ${DesktopQuery} {
    padding-left: 2rem;
    width: 50rem;
    height: 56px;
  }
`;
const Button = styled.div`
  background-color: #4dc288;
  width: 65px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: "proxima-nova";
  :hover {
    cursor: pointer;
  }
  ${DesktopQuery} {
    width: 105px;
  }
`;
const Flag = styled(IndiaFlag)`
  ${DesktopQuery} {
    transform: scale(2.5);
    /* margin-left: 2rem; */
  }
`;
export default function Subscribe() {
  return (
    <>
      <Container>
        <Flag />
        <NumberInput placeholder="Enter your mobile number" />
      </Container>
      <Button>Send</Button>
    </>
  );
}
