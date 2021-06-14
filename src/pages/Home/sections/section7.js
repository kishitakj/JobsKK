import React, { useState } from "react";
import { Data } from "../components/sec7data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DesktopQuery } from "../../../constants/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {},
}));

const Title = styled.div`
  display: flex;
  flex: 1;
  margin: 0px 43px 37px;
  padding-top: 38px;
  font-family: "proxima-nova";
  font-size: 28px;
  ${DesktopQuery} {
  margin: 20px 0px 61px 0px;
    font-size: 40px;
  }
  font-weight: bold;
  font-stretch: normal;
  text-align: center;
  color: #333e49;
  
`;

const UpperContainer = styled.div`
  /* min-height: 970px; */
  display: flex;
  border: none;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
`;

const Typo = styled(Typography)`
  && {
    font-size: 14px;
    font-family: "proxima-nova";
    border: solid 0px white;
    font-weight: ${(props) => props.fontWeight || "400"};
    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
const Answer = styled(Typo)`
  font-size: 12px;
  font-weight: normal;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Acc = styled(Accordion)`
  && {
    /* border-radius: 30px; */
    border: none;
    box-shadow: none !important;
    @media only screen and (min-width: 768px) {
      padding: 20px;
    }
  }
`
const InnerContainer = styled.div`
  border: solid 0.5px #dadada;

  padding: 30px;
  border-radius: 6px;
  width: 75%;
`;
const OuterContainer = styled.div``;
export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <UpperContainer>
      <OuterContainer>
        <Title>Frequently asked questions</Title>
      </OuterContainer>
      <InnerContainer>
        <div className={classes.root}>
          {Data.map((item, index) => {
            return (
              <>
                <Acc>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ backgroundColor: "#e1ecff", color: "#1a75e8", borderRadius: "8px" }} />}
                    style={{ padding: "0px" }}
                  >
                    <Typo fontWeight="bold">{item.question}</Typo>
                  </AccordionSummary>
                  <AccordionDetails style={{ padding: "0px" }}>
                    <Answer>{item.answer}</Answer>
                  </AccordionDetails>
                </Acc>
              </>
            );
          })}
        </div>
      </InnerContainer>
    </UpperContainer>
  );
}
