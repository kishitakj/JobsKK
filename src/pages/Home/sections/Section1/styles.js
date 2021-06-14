import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ImgContainer } from "../../../../components/ResponsiveContainer";
// import ReactPhoneInput from "react-phone-input-2";
// import PhoneInput from 'react-phone-input-2';
// import ReactPhoneInput from 'react-phone-input-material-ui';
import { ImageFactory } from "./../../../../components/ImageFactory";

export const Container = styled.div`
  /* background-color: #ebeff6; */
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ImageFactory("home_banner")});
  /* background-position: -50% 0; */
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    background-image: url("sec1.png");
    display: block;
    background-size: cover;
  }
`;
export const Sub = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  padding: 2% 0% 11% 0%;
  width: 90%;
  height: 450px;
  @media only screen and (min-width: 768px) {
    /* display: block; */
    margin-left: 2.5%;
    width: 40%;
    padding: 2% 4% 11% 4%;
    height: 80vh;
  }
`;
export const Sub2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.size || "1rem"};
    margin-top: 80px;
  }
`;
export const Sub3 = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    justify-content: normal;
  }
`;

export const ModB = styled(Button)`
  && {
    width: max-content;
    /* height: 56px; */
    font-size: 17px;
    border-radius: 12px;
    background-color: ${(props) => props.bgcolor || "100%"};
    color: white;
    margin-right: 10px;
    text-transform: none;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      width: ${(props) => props.size || "100%"};
    }
  }
`;

export const T = styled.div`
  font-size: 18px;
  color: #333e49;
  margin-bottom: ${(props) => props.marginB || "15px"};
  font-weight: ${(props) => props.weight || "600"};
  font-family: "proxima-nova";
  text-align: center;
  /* letter-spacing: 1.43; */
  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.size || "1rem"};
    text-align: left;
  }
`;

export const T2 = styled(T)`
  font-size: 16px;
  margin-top: 7px;
  @media only screen and (min-width: 768px) {
    font-size: ${(props) => props.size || "1rem"};
  }
`;

export const H = styled(T)`
  font-size: 28px;
  @media only screen and (min-width: 768px) {
    font-size: 42px;
  }
`;
// export const Img = styled.img`
// width: 30%;
// `
// export const ImgSubContainer= styled.div`
// height: 450px;
// background-image: url("sec1.png");
// background-size:contain;
// background-repeat: no-repeat;
// `
