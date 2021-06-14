import React, { Component } from 'react'
import styled from "styled-components";

const Title = styled.div`
font-family: "proxima-nova";
font-size: ${(props) => props.fontSize|| "22px"};
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.29;
letter-spacing: 0.84px;
float:left;
color: #333e49;

`
const MainContainer= styled.div`
display:flex;
justify-content:center;


`

const UpperContainer = styled.div`
 border: solid 0.5px #dadada;
 padding: 60px;
border-radius: 14px;
width:50vw;
margin-top: 20px;

@media only screen and (min-width: 768px) {
    /* margin:40px 100px 40px 100px; */
    margin-top: 50px;
    width:80vw;
}


`;
const ContentContainer= styled.div`
padding-bottom: 40px;
`;

const Sub2= styled.p`
&&{
font-family: "proxima-nova";
  font-size: 16px;
  margin-top: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  width:100%;
  padding-top: 10px;
  letter-spacing: 0.48px;
  text-align: left;
  color: #333e49;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width:50%;
  }
}

`

export default class index extends Component {
    render() {
        return (
            <div>
                <MainContainer>
                <UpperContainer>
             <ContentContainer>
                 
                 <Title fontSize="28px">Privacy Policy</Title>
                 <br></br>
                     <Sub2>
                 App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited
                     </Sub2>
              </ContentContainer>
             <ContentContainer>
             <Title>Privacy Policy</Title>
            
             <br></br>
              <Sub2>
                 App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private LimitedApp is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited
                     </Sub2>

                    
                     <Sub2>
                     App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited.App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited
                     </Sub2>
               </ContentContainer>
             <ContentContainer>
             <Title>Personal Identification Information</Title>
             
             <br></br>
             <Sub2>
                 App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited.App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited
                     
      </Sub2>
                      <Sub2>
                     App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited.App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited.
                     </Sub2>

                     
         <Sub2>
                     App is a commercial app by Apnatime Tech Private 
                     Limited App is a commercial app by Apnatime Tech Private
                      Limited App is a commercial app 
                     by Apnatime Tech Private Limited App is a commercial app by 
                     Apnatime Tech Private Limited.

                     </Sub2>

              </ContentContainer>
            </UpperContainer>
            </MainContainer>
            </div>
        )
    }
}
