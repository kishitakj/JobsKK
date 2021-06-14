import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin: 10px 10px 10px 0px;
  padding: 5px;
  border: solid 1px #e7e7e7;
  background-color: #ffffff;
`;
const Image = styled.img`
  width: 20px;
  object-fit: scale-down;
`;
export default class section5props extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.src}  />
      </Container>
    );
  }
}
