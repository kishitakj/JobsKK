import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { DesktopView } from "./ResponsiveContainer";
import { DesktopQuery } from "../constants/queries";
const Root = styled.div`
  flex-grow: 1;
`;

const ModTypo = styled.div`
  && {
    font-family: "proxima-nova";
    font-size: 28px;
    font-weight: bold;
    color: #333e49;
  }
  @media only screen and (min-width: 768px) {
    font-size: 35px !important;
    font-weight: bold;
    margin-left: 10%;
  }
`;

const ModAppBar = styled(AppBar)`
  && {
    background-color: white;
  }
  .MuiTypography-body1 {
    font-size: 35px;
  }
`;

const Subtitle = styled.span`
  && {
    font-family: "proxima-nova";
    font-size: 10px;
    font-weight: normal;
    color: #333e49;
  }
  @media only screen and (min-width: 768px) {
    /* Styles */
    font-family: "proxima-nova" !important;
    font-size: ${(props) => props.size || "24px"} !important;
    font-weight: normal !important;
  }

`;
const TextSeparator = styled(Subtitle)`
  font-size: 27.6px;
  color: #f0f0f0;
  margin: 0px 8px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
const ModButton = styled(Button)`
  && {
    background-color: ${(props) => props.bgcolor || "white"};
    color: ${(props) => props.color || "black"};
    border-radius: 6px;
    border: solid 1px #1a75e8;
    ${DesktopQuery} {
      margin-right: ${(props) => props.marginR || "15px"};
    }
    box-shadow: 0 0 0 0;
    text-transform: none;
    font-size: 14px;
    font-family: "proxima-nova";
    height: 32px;
    width: max-content;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 6px 6px 6px;
  }
`;
const ModFormControl = styled(FormControl)`
  && {
    margin: theme.spacing(1);
    min-width: 100px;
    margin-right: 15px;
    font-weight: 400;
  }

  .MuiOutlinedInput-input {
    padding: 10px 14px;
  }

  .MuiInputBase-input {
    font: caption;
  }
`;

export default class Header extends Component {
  state = {
    lang: "Eng",
  };

  handleChange = (event) => {
    this.setState({
      lang: event.target.value,
    });
  };

  render() {
    // const classes = useStyles();
    return (
      <Root>
        <ModAppBar position="static">
          <Toolbar>
            <TitleContainer>
              <ModTypo
              // className={classes.title}
              >
                JobsKK{" "}
              </ModTypo>
              <DesktopView>
                <TextSeparator>|</TextSeparator>
              </DesktopView>
              <Subtitle>Where Kabiliyat meets Kaamyabi</Subtitle>
            </TitleContainer>
            <ButtonContainer>
              <ModFormControl variant="outlined">
                <Select value={this.state.lang} onChange={this.handleChange}>
                  <MenuItem value={"Eng"}>English</MenuItem>
                  <MenuItem value={"Hindi"}>Hindi</MenuItem>
                </Select>
              </ModFormControl>
              <ModButton variant="contained" bgcolor="#1a75e8" color="white">
                Hire Staff
              </ModButton>
              <DesktopView>
                <ModButton variant="outlined" color="#1a75e8">
                  Download App
                </ModButton>
              </DesktopView>
            </ButtonContainer>
          </Toolbar>
        </ModAppBar>
      </Root>
    );
  }
}
