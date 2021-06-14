import React from "react";
import styled from "styled-components";
import { CHARCOAL } from "../constants/colors";
const Logo = styled.div`
  font-size: 41px;
  font-weight: bold;
  font-family: "proxima-nova";
  color: ${CHARCOAL};
  @media only screen and (min-width: 768px) {
    font-size: 65px;
  }
`;
export default function MaukaLogo() {
  return <Logo>mauka</Logo>;
}
