import React, { Component } from "react";
import styled from "styled-components";
import FooterProps from "./FooterProps";
import { DesktopView, NonDesktopView } from "./ResponsiveContainer";

const Container = styled.div`
  height: 450px;
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  @media only screen and (min-width: 768px) {
    /* border-top: 2px solid #dddddd; */
    padding: 90px 150px 30px 150px;
  }
`;
const Sub = styled.div`
  flex: ${(props) => props.flex || "1"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  width: ${(props) => (props.direction ? "100%" : null)};
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
`;
const Colm = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.div`
  margin-bottom: ${(props) => props.marginB || "10px"};
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "black"};
  font-size: 12px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: normal;
  }
`;
const Rows = styled.div`
  /* text-align: center; */
  flex: 1;
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.vertical || "none"}; ;
`;

const Sub2 = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
`;
const MadeInIndia = styled.div`
  font-size: 14px;
  font-weight: 600;
  font-family: "proxima-nova";
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
const LineBreak = styled.hr`
  width: 100%;
  border: solid 1px #f0f0f0;
`;
const GooglePlayLogo = styled.img`
  aspect-ratio: auto;
  width: 40%;
  align-self: flex-end;
  @media only screen and (min-width: 768px) {
    width: 64%;
  }
`;
export default class Footer extends Component {
  render() {
    return (
      <>
        <DesktopView>
          <LineBreak />
          <Container>
            <Sub direction="column">
              <Rows>
                {/* <MaukaLogo /> */}
                <MadeInIndia>
                  Built in India for Bharat <img src="india.png" alt="india" />
                </MadeInIndia>
              </Rows>
              <Rows>
                <P weight="700" color="#333e49">
                  Follow Us on Social Media
                </P>
                <Sub2>
                  <FooterProps src="facebook.png" />
                  <FooterProps src="whatsapp.png" />
                  <FooterProps src="youtube.png" />
                  <FooterProps src="NoPath.png" />
                </Sub2>
                <Sub2>
                  <FooterProps src="linkedin.png" />
                  <FooterProps src="instagram.png" />
                  <FooterProps src="twitter.png" />
                  <FooterProps src="NoPath2.png" />
                </Sub2>
              </Rows>
              <Rows display="flex" vertical="center">
                <img src="gPlay.png" alt="gpay" />
              </Rows>
            </Sub>
            <Sub flex="5" direction="row" justify="space-around">
              <Colm>
                <h2 style={{ color: "#333e49" }}>Company</h2>
                <P>About Us</P>
                <P>Employer Login</P>
                <P>Blog</P>
                <P>Contact Us</P>
              </Colm>
              <Colm>
                <h2 style={{ color: "#333e49" }}>Top Jobs</h2>
                <P>Digital Marketing</P>
                <P>Business Development</P>
                <P>Creative Content</P>
                <P>Pharmacy</P>
                <P>Delivery Personnel</P>
                <P>Fresher Jobs</P>
                <P>Jobs for 12th pass</P>
                <P>Jobs for Women</P>
                <P>Work from Home Jobs</P>
              </Colm>
              <Colm>
                <h2 style={{ color: "#333e49" }}>Legal</h2>
                <P>Terms and Conditions</P>
                <P>Privacy Policy</P>
              </Colm>
            </Sub>
          </Container>
        </DesktopView>

        <NonDesktopView>
          <Container>
            <Sub direction="column" align="center">
              <Sub align="center" justify="space-between" style={{ width: "100%" }}>
                <Rows>
                  <MadeInIndia>
                    Built in India for Bharat <img src="india.png" alt="india" />
                  </MadeInIndia>
                </Rows>
                <GooglePlayLogo src="gPlay.png" />
              </Sub>
              <Sub flex="5" justify="space-between" style={{ width: "100%" }}>
                <Colm>
                  <h4 style={{ color: "#333e49" }}>Top Jobs</h4>
                  <P>Digital Marketing</P>
                  <P>Business Development</P>
                  <P>Creative Content</P>
                  <P>Pharmacy</P>
                  <P>Delivery Personnel</P>
                  <P>Fresher Jobs</P>
                  <P>Jobs for 12th pass</P>
                  <P>Jobs for Women</P>
                  <P>Work from Home Jobs</P>
                </Colm>
                <Colm>
                  <Colm>
                    <h4 style={{ color: "#333e49" }}>Company</h4>
                    <P>About Us</P>
                    <P>Employer Login</P>
                    <P>Blog</P>
                    <P>Contact Us</P>
                  </Colm>
                  <Colm>
                    <h4 style={{ color: "#333e49" }}>Legal</h4>
                    <P>Terms and Conditions</P>
                    <P>Privacy Policy</P>
                  </Colm>
                </Colm>
              </Sub>
              <LineBreak />
              <Sub direction="column">
                <P weight="700" color="#333e49">
                  Follow Us on Social Media
                </P>
                <Sub2>
                  <FooterProps src="facebook.png" />
                  <FooterProps src="whatsapp.png" />
                  <FooterProps src="youtube.png" />
                  <FooterProps src="NoPath.png" />
                  <FooterProps src="linkedin.png" />
                  <FooterProps src="instagram.png" />
                  <FooterProps src="twitter.png" />
                  <FooterProps src="NoPath2.png" />
                </Sub2>
              </Sub>
            </Sub>
          </Container>
        </NonDesktopView>
      </>
    );
  }
}
