import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ImageFactory } from "./ImageFactory";
import { DesktopView, NonDesktopView } from "./ResponsiveContainer";
import { DesktopQuery } from "./../constants/queries";

const Container = styled.div`
  display: flex;
  padding-bottom: 100px;
  padding: 40px 0px;
  ${DesktopQuery} {
    padding: 40px 33px;
    height: 400px;
    /* margin-bottom: 4rem; */
  }
  /* background-color: skyblue; */
`;

const Sub = styled.div`
  flex: ${(props) => props.flex || "1"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => props.width || (props.direction ? "100%" : null)};
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
  padding: ${(props) => props.padding || "0px"};
`;
const DesktopContentContainer = styled(Sub)`
  margin-bottom: 5rem;
`;
const Title = styled.span`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "38px"};
  font-weight: ${(props) => props.weight || "700"};
  display: inline;
  text-align: left;
  font-family: "proxima-nova";
  line-height: 1.5;
  ${DesktopQuery} {
    text-align: center;
  }
`;

const ModB = styled(Button)`
  && {
    width: ${(props) => props.size || "100%"};
    font-size: 14px;
    border-radius: 6px;
    background-color: ${(props) => props.bgcolor || "blue"};
    color: white;
    text-transform: none;
    font-family: "proxima-nova";
    margin-top: 35px;
    padding: 5px;
    ${DesktopQuery} {
      border-radius: 12px;
      font-size: 20px;
      margin-left: 27%;
    }
  }
`;

const Bg = styled.img`
  width: 100%;
  /* background-color: #ebfcff; */
  /* z-index: -10; */
  align-self: flex-start;
  margin-top: -16px;
`;
const BannerBackground = styled.div`
  flex: 1;
  display: flex;
  background: #ebfcff;
  /* background-image: url(${ImageFactory("ad_banner")}); */
  background-size: cover;
  background-repeat: no-repeat;
  ${DesktopQuery} {
    padding: 3rem 1rem;
    background-size: contain;
    background: none;
    background-repeat: no-repeat;
    background-image: url(${ImageFactory("ad")});
  }
`;
export default class Advertisment extends Component {
  render() {
    return (
      <Container>
        <DesktopView>
          {/* <Bg src={ImageFactory("ad")} /> <Upper> */}
          <BannerBackground>
            <DesktopContentContainer flex="unset" justify="center" direction="column" width="70%">
              <Title color="#333e49">
                Start building your career with <Title color="#2f9db0">JobsKK</Title>
              </Title>
              <Title size="16px" weight="400">
                Find relevant jobs, learn new skills, earn skill badges and much more on our app for free
              </Title>
              <ModB variant="contained" size="260px" bgcolor="#2f9db0">
                Download the App
              </ModB>
            </DesktopContentContainer>
          </BannerBackground>
          {/* <Sub flex="1"><img src="ad.png"/></Sub> */}
        </DesktopView>
        <NonDesktopView>
          <BannerBackground>
            <Sub flex="2" padding="1rem" justify="flex-start" direction="column" align="flex-start">
              <Title size="16px" color="#333e49">
                Start building your career with{" "}
                <Title size="16px" color="#2f9db0">
                  mauka
                </Title>
              </Title>
              <Title size="12px" weight="normal">
                Find relevant jobs, learn new skills, earn skill badges and much more on our app for free
              </Title>
              <ModB variant="contained" bgcolor="#2f9db0">
                Download the App
              </ModB>
            </Sub>
            <Sub flex="2">
              <Bg src={ImageFactory("ad_mobile")} />
            </Sub>
          </BannerBackground>
        </NonDesktopView>
        {/* </Upper> */}
      </Container>
    );
  }
}
