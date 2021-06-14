import React, { Component } from 'react'
import styled from "styled-components";

const UpperContainer = styled.div`

  display: flex;
    justify-content: space-around;
  align-items: center;
width: auto;
  height: 0px;
  border-radius: 8px;
  margin: 12px 0px 0px 12px;
  padding: 17px 17px;
  border: solid 1px #e4d4ff;
  background-color: #ffffff;
  @media only screen and (min-width : 768px) {
    font-size: 16px;
    margin: 20px 0px 0px 20px;
    padding: 19px 21px;
}
`;
const Text = styled.p`
color: #333e49;
font-size:14px;
text-align: center;
font-weight: 600;
@media only screen and (min-width : 768px) {
    font-size: 16px;
}
`;

export default class section6props extends Component {
  render() {
      return (
        <UpperContainer>
        <Text>{this.props.name}</Text>
        </UpperContainer>
      )
  }
}