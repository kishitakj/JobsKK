import React, { Component } from "react";
import styled from "styled-components";
import { DesktopView, NonDesktopView } from "./../../../components/ResponsiveContainer";
const ImageContainer = styled.div`
  padding: 15px;
  border-radius: 100%;
  margin: 5px 20px 5px 20px;
  border: solid 1px #e7e7e7;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin: 20px 20px 16px 20px;
    padding: 44px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  width: 170px;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;
const Text1 = styled.div`
  background-color: #e1ecff;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  color: #1a75e8;
  border-radius: 100%;
  padding: 6px 9px;
  @media only screen and (min-width: 768px) {
    padding: 6px 14px 8px;
    margin-bottom: 16px;
    font-size: 18px;
  }
`;
const DottedLine = styled.hr`
  width: 0px;
  height: 26px;
  border: none;
  border-right: dashed 3px #e3e3e3;
  /* background-color: #e3e3e3; */
  margin-left: 12px;
  @media only screen and (min-width: 768px) {
    margin-top: 100px;
    border-top: dashed 2px #e3e3e3;
    width: 54px;
    height: 0;
  }
  /* margin: 153.5px 6.5px 0 17.5px; */
`;
const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Image = styled.img`
  width: 25px;
  @media only screen and (min-width: 768px) {
    width: 72px;
  }
`;
export default class section3props extends Component {
  render() {
    const { isLast } = this.props;
    return (
      <>
        <DesktopView>
          <UpperContainer>
            <Container>
              <ImageContainer>
                <Image src={this.props.src} />
              </ImageContainer>
              <Text1>{this.props.number}</Text1>
              <Text>{this.props.name}</Text>
            </Container>
            {!isLast && <DottedLine />}
          </UpperContainer>
        </DesktopView>
        <NonDesktopView>
          <UpperContainer>
            <Container>
              <Text1>{this.props.number}</Text1>
              <ImageContainer>
                <Image src={this.props.src} />
              </ImageContainer>
              <Text>{this.props.name}</Text>
            </Container>
            {!isLast && <DottedLine />}
          </UpperContainer>
        </NonDesktopView>
      </>
    );
  }
}
