import React, { Component } from "react";
import styled from "styled-components";
import Sec3props from "../components/Sec3props";
import Button from "@material-ui/core/Button";
import { IconContext } from "react-icons";
import { BiRightArrowAlt } from "react-icons/bi";
import { BLUE_SHADE } from "./../../../constants/colors";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { DesktopView, NonDesktopView } from "./../../../components/ResponsiveContainer";
import { DesktopQuery } from "./../../../constants/queries";
const UpperContainer = styled.div`
  /* height: 350px; */
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 2rem 0rem;
  ${DesktopQuery} {
    margin: 0;
  }
`;

const Title = styled.div`
  display: inline;
  width: auto;
  font-family: "proxima-nova";
  font-size: 28px;
  ${DesktopQuery} {
    font-size: 38px;
  }
  font-weight: bold;
  /* font-stretch: normal;
  font-style: normal; */
  /* line-height: 0; */
  /* letter-spacing: normal; */
  margin-bottom: 100px;
  color: ${(props) => props.color || "black"};
`;
const ContentContainer = styled.div`
  object-fit: contain;
  text-align: center;
  flex: 1;
  margin: 0px 0px 0px 0px;
`;
const HeadingContainer = styled(ContentContainer)`
  margin: 0px 16px 37px 16px;
  @media only screen and (min-width: 768px) {
    margin: 0px 0px 75px 0px;
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4rem;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const BadgeContainer = styled.div``;

const Sub3 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 90px;
`;

const ModB = styled(Button)`
  && {
    width: 356px;
    height: 56px;
    font-size: 26px;
    font-weight: bold;
    border-radius: 10px;
    background-color: ${(props) => props.bgcolor || "100%"};
    color: white;
    text-transform: none;
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  flex: 1;
`;
const Text = styled.span`
  font-family: "proxima-nova";
  font-size: 18px;
  font-weight: normal;
`;
const BlueText = styled(Text)`
  color: ${BLUE_SHADE};
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;
export default class section3 extends Component {
  render() {
    return (
      <UpperContainer>
        <HeadingContainer>
          <Title>
            How to get a job on <Title color="#1a75e8">JobsKK</Title> in 5 easy steps
          </Title>
        </HeadingContainer>
        <DesktopView>
          <ContentContainer>
            <BadgesContainer>
              <Sec3props
                number="1"
                name={
                  <Text>
                    <BlueText>Download</BlueText> the <BoldText>mauka</BoldText> mobile app
                  </Text>
                }
                src="mobile-phone.png"
              />

              <Sec3props
                number="2"
                name={
                  <Text>
                    <BlueText>Create your profile</BlueText> in less than 3 minutes
                  </Text>
                }
                src="man-office-worker-light-skin-tone_1f468-1f3fb-200d-1f4bc.png"
              />

              <Sec3props
                number="3"
                name={
                  <Text>
                    <BlueText>Apply</BlueText> to your favourite <BlueText>jobs</BlueText> using video
                  </Text>
                }
                src="selfie_1f933.png"
              />

              <Sec3props
                number="4"
                name={
                  <Text>
                    <BlueText>Call</BlueText> the employer directly
                  </Text>
                }
                src="telephone-receiver_1f4de.png"
              />

              <Sec3props
                number="5"
                name={
                  <Text>
                    Fix interview and<BlueText> get the job</BlueText>
                  </Text>
                }
                src="party-popper_1f389.png"
                isLast
              />
            </BadgesContainer>
          </ContentContainer>
          <Sub3>
            <ModB variant="contained" size="20%" bgcolor="#4dc288">
              Get your next job now <ArrowRightAltIcon fontSize="2rem" />
            </ModB>
          </Sub3>
        </DesktopView>
        <NonDesktopView>
          <ContentContainer>
            <BadgesContainer>
              <Sec3props
                number="1"
                name={
                  <Text>
                    <BlueText>Download</BlueText> the <BoldText>mauka</BoldText> mobile app
                  </Text>
                }
                src="mobile-phone.png"
              />

              <Sec3props
                number="2"
                name={
                  <Text>
                    <BlueText>Create your profile</BlueText> in less than 3 minutes
                  </Text>
                }
                src="man-office-worker-light-skin-tone_1f468-1f3fb-200d-1f4bc.png"
              />

              <Sec3props
                number="3"
                name={
                  <Text>
                    <BlueText>Apply</BlueText> to your favourite <BlueText>jobs</BlueText> using video
                  </Text>
                }
                src="selfie_1f933.png"
              />

              <Sec3props
                number="4"
                name={
                  <Text>
                    <BlueText>Call</BlueText> the employer directly
                  </Text>
                }
                src="telephone-receiver_1f4de.png"
              />

              <Sec3props
                number="5"
                name={
                  <Text>
                    Fix interview and<BlueText> get the job</BlueText>
                  </Text>
                }
                src="party-popper_1f389.png"
                isLast
              />
            </BadgesContainer>
          </ContentContainer>
        </NonDesktopView>
      </UpperContainer>
    );
  }
}
