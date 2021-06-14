import React, { Component } from 'react'
import styled from "styled-components";

const UpperContainer = styled.div`

  display: flex;
    justify-content: space-around;
  align-items: center;
/* width: 160px; */
  height: 0px;
  border-radius: 8px;
  margin: 12px 0px 0px 12px;
  padding: 19px 21px;
  border: solid 1px #ffdcdc;
  background-color: #ffffff;
  @media only screen and (min-width : 768px) {
  font-size: 18px;
  margin: 25px 0px 0px 25px;
}
`;
const Text = styled.p`
font-size:14px;
text-align: center;
font-weight: 600;
color: #333e49;
@media only screen and (min-width : 768px) {
    font-size: 18px;
}
`;
export default class section4props extends Component {
  render() {
      return (

        <UpperContainer>
        
        <Text>{this.props.name}</Text>
        </UpperContainer>
        )
  }
}

