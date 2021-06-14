import React, { Component } from "react";
import styled from "styled-components";
import Sec4props from "../components/section4props";

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  flex-direction: column;
  background-color: #fff5f5;
  @media only screen and (min-width : 768px) {
    height: 300px;
}
`;

const ContentContainer = styled.div`
  text-align: center;    display: flex;
    flex-direction: column;
`;
const BadgesContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
padding: 0;
@media only screen and (min-width : 768px) {
    padding: 0 15%;
}
`;
const BadgeContainer = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-family: "proxima-nova";
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  margin: 0px 0px 10px 0px;
  line-height: 1;
  letter-spacing: normal;
  color: ${(props) => props.color || "#333e49"};
  @media only screen and (min-width : 768px) {
  font-size: 38px;
  display: inline;
  margin: 0px 0px 40px 0px;
}
`;

export default class section5 extends Component {
  render() {
    return (
      <UpperContainer>
        <ContentContainer>
          <Title>
            Find your type of Job <Title color="#ff6565">easy & fast</Title>
          </Title>
          <BadgesContainer>
            <Sec4props name="Work From Home" />
            <Sec4props name="Part Time Jobs" />
            <Sec4props name="Jobs for Women" />
            <Sec4props name="Fresher Jobs" />
            <Sec4props name="Full Time Jobs" />
            <Sec4props name="Day Shift Jobs" />
            <Sec4props name="Night Shift Jobs" />
          </BadgesContainer>
        </ContentContainer>
      </UpperContainer>
    );
  }
}
