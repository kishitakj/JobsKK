import React, { Component } from "react";
import * as S from "./styles";
import Subscribe from './../../components/Subscribe';
export default class Section1 extends Component {
  state = { phone: "" };

  handleOnChange = (value) => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };
  render() {
    return (
      <S.Container>
        <S.Sub>
          <S.Sub2>
            <S.H  marginB="0" weight="750">
              India ka Professional App
            </S.H>
            <S.T2 size="22px" weight="400">
              Enabling the Future of Work for Bharat
            </S.T2>
          </S.Sub2>
          <S.Sub2>
            <S.T size="24px">Find Jobs. Build your Career. For FREE.</S.T>
            <S.Sub3 >
              <S.ModB variant="contained" size="277px" bgcolor="#4dc288">
                Download the App
              </S.ModB>
              <img src="gPlay.png" width="33%" alt="gplay"/>
            </S.Sub3>
          </S.Sub2>
          <S.Sub2>
            <S.T size="24px">Send install link to mobile device</S.T>
            <S.Sub3 >
              <Subscribe />
            </S.Sub3>
          </S.Sub2>
        </S.Sub>
        {/* <ImgContainer><S.ImgSubContainer></S.ImgSubContainer></ImgContainer> */}
      </S.Container>
    );
  }
}
