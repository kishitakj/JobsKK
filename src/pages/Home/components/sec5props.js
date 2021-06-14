import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 70px;
  border-radius: 12px;
  margin: 10px 5px 5px 5px;
  /* padding: 4px; */

  border: solid 1px #e7e7e7;
  background-color: #ffffff;

  @media only screen and (min-width: 768px) {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 50px;
    border-radius: 12px;
    margin: 50px 5px 5px 75px;
    border: solid 1px #e7e7e7;
    background-color: #ffffff;
  }
`;

const Text = styled.p`
  size: 14px;
  font-weight: 400;
  margin-left: 10px;
  @media only screen and (min-width: 768px) {
    size: 18px;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const sub = styled.div`
  margin-left: 10px;
`;
export default class section5props extends Component {
  render() {
    return (
      <Container>
        <img style={{ marginLeft: "10px" }} src={this.props.src} />
        <Text>{this.props.name} </Text>
      </Container>
    );
  }
}
