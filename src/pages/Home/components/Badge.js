import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
 width: 35%;
  margin: 0px 10px 10px 0px;
  border-radius: 6px;
  border: solid 1px #e7e7e7;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media only screen and (min-width: 768px) {
  width: 240px;
  margin: 0px 10px 10px 0px;
  border-radius: 12px;
  }

`;
const Img = styled.img`
  width: 10px;
  height: 10px;
  @media only screen and (min-width: 768px) {
    width: 20px;
  height: 20px;
  }
`;
const Text = styled.p`
  font-size: 12px;
  flex: 1;
  font-family: "proxima-nova";
  color:#333e49;
  margin-left:15px;
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export default class Badge extends Component {
  render() {
    return (
      <Container>
        <img flex="1" width="30px" height="30px" src={this.props.src} /> &nbsp;
        <Text>{this.props.name} </Text>
      </Container>
    );
  }
}
