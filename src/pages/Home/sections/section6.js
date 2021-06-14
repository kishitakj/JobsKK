


import React, { Component } from 'react'
import styled from "styled-components";
import Sec6props from "../components/section6props";
import Button from "@material-ui/core/Button";

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height:650px;
  flex-direction: column;
  background-color: #faf7ff;
  @media only screen and (min-width : 768px) {
  height:500px;
}
  `

const ContentContainer = styled.div`

  /* margin: 20px 0px 0px -75px; */
  

  text-align: center;

`
const BadgesContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
margin-top: 30px;
padding: 0 1%;
@media only screen and (min-width : 768px) {
  padding: 0 15%;
}
`

// const Sub3 = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 13px 13px 13px 13px;
//   margin-top: 19px;

// `;

const ModB = styled(Button)`
&&{
    /* width: 70px; */
    height: 30px;
    font-size:14px;
    border-radius: 8px;
    background-color: ${(props)=>props.bgcolor || "100%"};
    color: white;
    text-transform: none;
    display:flex;
    align-content: center;
    justify-content: center;
    margin-top:12px;
    margin-left:12px;
    padding: 17px;
    @media only screen and (min-width : 768px) {
      margin-top:20px;
    margin-left:20px;
    font-size:16px;
}
}
`

// const BadgeContainer = styled.div`
// display: flex;`


const Title= styled.div`
  margin: 0px 0px 10px 0px;
  font-family: 'proxima-nova';
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${(props) => props.color || "#333e49"};
  @media only screen and (min-width : 768px) {
    font-size: 38px;
    display: inline;
    margin: 0px 0px 60px 0px;
}
  `


export default class section5 extends Component {
    render() {
        return (
            <UpperContainer>
            <ContentContainer>
              <div>
              <Title >Jobs available in <Title color="#a670ff">50+ Categories</Title></Title>
              </div>
              <BadgesContainer>
                  {/* <BadgeContainer> */}
                        <Sec6props  name="Digital-Marketing"   />
                      <Sec6props  name="Tele Caller"  />
                      <Sec6props   name="Delivery Personnel"  />
                      <Sec6props  name="Human Resource"  />
                  {/* </BadgeContainer> */}
                  {/* <BadgeContainer> */}
                      <Sec6props  name="Business Development"   />
                      <Sec6props  name="Field Sales"  />
                      <Sec6props   name="Retail / Counter Sales"  />
                      <Sec6props   name="Assistant Cook"  />
                  {/* </BadgeContainer> */}
                  {/* <BadgeContainer> */}
                      <Sec6props  name="Creative Content"   />
                      <Sec6props  name="Photo / Video Editor"  />
                      <Sec6props   name="Animation"  />
                      <Sec6props  name="Labourer"  />
                  {/* </BadgeContainer> */}
                  {/* <BadgeContainer> */}
                      <Sec6props  name="Pharmacy / Clinic / Nursing / Medical"   />
                      <Sec6props  name="IT Support / Development"  />
                      <Sec6props   name="Teacher"  />
                      <ModB variant="contained" bgcolor="#a670ff">View All</ModB>

                  {/* // </BadgeContainer> */}
              </BadgesContainer>
            </ContentContainer>
          </UpperContainer>
        )
    }
}
