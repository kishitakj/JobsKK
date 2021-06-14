import React, { Component } from "react";
import styled from "styled-components";
import Badge from "../components/Badge";
import { DesktopQuery } from "./../../../constants/queries";
import { DesktopView } from "../../../components/ResponsiveContainer";
import { NonDesktopView } from "./../../../components/ResponsiveContainer";
const UpperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  /* overflow:hidden; */
  @media only screen and (min-width: 768px) {
    /* display: flex; */
    /* height: 750px;
    height: 900px; */
    margin-top: 5rem;
    margin-bottom: 4rem;
    flex-direction: row;
    /* justify-content: space-between; */
  }
`;

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* overflow:hidden; */
//   @media only screen and (min-width: 768px) {
//     flex: 1;

//     object-fit: contain;
//   }
// `;
const BadgesContainer = styled.div`
  margin-top: 2rem;
  ${DesktopQuery} {
    margin-top: 0px;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin-left: 150px;
  }
`;

const Img = styled.img`
  /* width: 400px; */
  height: auto;
  /* margin-bottom: 40px; */
  position: relative;
  width: 90%;
  display: block;

  @media only screen and (min-width: 768px) {
    flex: 1;
    /* width: 750.5px; */
    /* margin-top: -180px; */
    margin-left: 150px;
    object-fit: cover;

    /* margin-left:100px; */
  }
`;

const Title = styled.div`
  display: inline;
  margin: 0px 0px 0px 0px;
  font-size: 34px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0;
  letter-spacing: normal;
  color: ${(props) => props.color || "black"};
  @media only screen and (min-width: 768px) {
    display: inline;
    margin: 87px 0px 0px 0px;
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: ${(props) => props.color || "black"};
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  ${DesktopQuery} {
    display: flex;
    align-self: flex-start;
    flex-wrap: wrap-reverse;
    /* margin-left: 40px; */
    padding: 20px;
  }
`;

const Sub2 = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.4;
  letter-spacing: 1px;
  text-align: center;
  color: #adadad;

  @media only screen and (min-width: 768px) {
    margin: 0px 13.1px 50px 150px;
    /* font-family: "proxima-nova"; */
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.5;
    letter-spacing: normal;
    text-align: left;
    color: #adadad;
    /* margin-left:150px; */
  }
`;

export default class Section1 extends Component {
  render() {
    return (
      <>
        <DesktopView>
          <UpperContainer>
            <MainContainer>
              <Sub2>
                <Title>
                  <Title color="#1a75e8">JobsKK</Title> is the only <br></br> professional app you need
                </Title>
                <p>Here's how we can help you to build your career</p>
              </Sub2>
              <BadgesContainer>
                <BadgeContainer>
                  <Badge name="Find matching nearby jobs" src="man-office-worker-light-skin-tone_1f468-1f3fb-200d-1f4bc.png" />
                  <Badge name="Apply to jobs easily via video" src="selfie_1f933.png" />
                </BadgeContainer>
                <BadgeContainer>
                  <Badge name="Call/WhatsApp HR Directly" src="telephone-receiver_1f4de.png" />
                  <Badge name="Build your Digital Identity" src="card-index_1f4c7.png" />
                </BadgeContainer>
                <BadgeContainer>
                  <Badge name="Learn new skills on the go" src="person-surfing_light-skin-tone_1f3c4-1f3fb_1f3fb.png" />
                  <Badge name="Showcase skills via skill badges" src="sports-medal_1f3c5.png" />
                </BadgeContainer>
              </BadgesContainer>
            </MainContainer>

            <MainContainer>
              <Img alt="sec1.png" src="sec2.png" />
            </MainContainer>
          </UpperContainer>
        </DesktopView>

        <NonDesktopView>
          <UpperContainer>
            <MainContainer>
              <Sub2>
                <Title>
                  <Title color="#1a75e8">JobsKK</Title> is the only <br></br> professional app you need
                </Title>
                <p>Here's how we can help you to build your career</p>
              </Sub2>
              <Img alt="sec1.png" src="sec2.png" />
              <BadgesContainer>
                <BadgeContainer>
                  <Badge name="Find matching nearby jobs" src="man-office-worker-light-skin-tone_1f468-1f3fb-200d-1f4bc.png" />
                  <Badge name="Apply to jobs easily via video" src="selfie_1f933.png" />
                </BadgeContainer>
                <BadgeContainer>
                  <Badge name="Call/WhatsApp HR Directly" src="telephone-receiver_1f4de.png" />
                  <Badge name="Build your Digital Identity" src="card-index_1f4c7.png" />
                </BadgeContainer>
                <BadgeContainer>
                  <Badge name="Learn new skills on the go" src="person-surfing_light-skin-tone_1f3c4-1f3fb_1f3fb.png" />
                  <Badge name="Showcase skills via skill badges" src="sports-medal_1f3c5.png" />
                </BadgeContainer>
              </BadgesContainer>
            </MainContainer>
          </UpperContainer>
        </NonDesktopView>
      </>
    );
  }
}
