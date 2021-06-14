import React, { Component } from 'react'
import styled from "styled-components";
import Sec5props from "../components/sec5props";
import Button from "@material-ui/core/Button";
import { DesktopQuery } from "./../../../constants/queries";
import { DesktopView } from "../../../components/ResponsiveContainer";
import { NonDesktopView } from "./../../../components/ResponsiveContainer";

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content:center;
  height:650px;
  flex-direction: column;
  background-image: url("sec5Bg.png");
  background-size: cover;

  @media only screen and (min-width : 768px) {
    display: flex;
  justify-content: center;
  align-content:center;
  height:500px;
  flex-direction: column;
  background-image: url("sec5Bg.png");
  background-size: cover;

  }`

const ContentContainer = styled.div`

  margin: 90px 0px 0px 0px;
  object-fit: contain;
  flex: 1;
  
  text-align: center;`

const BadgesContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin-top: 25px;
/* justify-content: center; */
padding: 0;
@media only screen and (min-width : 768px) {
  padding: 0 15%;
  display: flex;
flex-flow: nowrap;
justify-content: center;
margin-left: -75px;
flex-direction: column;


}
`;




const BadgeContainer = styled.div`
  display:flex;
  flex:1;
  /* flex-direction: column; */

@media only screen and (min-width : 768px) {
  display: flex;
justify-content:center;
flex-direction: row;

}
`

const Img = styled.img`
  flex: 1;
`

const Title= styled.div`


  font-family: 'proxima-nova';
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${(props) => props.color || "black"};

 

@media only screen and (min-width : 768px) {
  display: inline;
  /* margin: 120px 0px 5px 0px; */
  padding-top: 20px;
  font-family: 'proxima-nova';
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0;
  letter-spacing: normal;
  color: ${(props) => props.color || "black"};

}
`


export default class section5 extends Component {
    render() {
        return (
          <>
          <DesktopView>
          <UpperContainer>
            <ContentContainer>
              <div>
                <Title>Find Jobs by &nbsp;
                  <Title color="#1a75e8">Educational-Qualification</Title>
                </Title>
              </div>
              <BadgesContainer>
                <BadgeContainer>
                  <Sec5props name="Below 10th" src= "books.png"  />
                  <Sec5props  name="10th Pass" src= "backpack.png" />
                  <Sec5props  name="12th Pass" src= "school.png" />
                </BadgeContainer>
                <BadgeContainer>
                  <Sec5props  name="Diploma" src= "scroll.png"/>
                  <Sec5props  name="Graduate" src= "graduation.png"/>
                  <Sec5props  name="Post Graduate" src= "trophy.png" />
                </BadgeContainer>
              
              </BadgesContainer>
            </ContentContainer>
            </UpperContainer>
            </DesktopView>

          <NonDesktopView>
            <UpperContainer>
            <ContentContainer>
              <div>
                <Title>Find Jobs by &nbsp;
                  <Title color="#1a75e8">Educational-Qualification</Title>
                </Title>
              </div>
              <BadgesContainer>
                <BadgeContainer>
                  <Sec5props name="Below 10th" src= "books.png"  />
                  <Sec5props  name="10th Pass" src= "backpack.png" />
                
                </BadgeContainer>
                <BadgeContainer>
                  <Sec5props  name="12th Pass" src= "school.png" />
                  <Sec5props  name="Diploma" src= "scroll.png"/>
                </BadgeContainer>
                <BadgeContainer>
               
                  <Sec5props  name="Graduate" src= "graduation.png"/>
                  <Sec5props  name="Post Graduate" src= "trophy.png" />
                </BadgeContainer>
              
              </BadgesContainer>
            </ContentContainer>
           
             
          </UpperContainer>
          </NonDesktopView>
          </>
        )
    }
}
