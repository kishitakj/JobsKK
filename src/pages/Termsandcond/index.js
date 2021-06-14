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
color: #333e49;`


const UpperContainer = styled.div`
 border: solid 0.5px #dadada;
 padding: 60px;
border-radius: 14px;
margin:40px 100px 40px 100px;
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
  width:90%;
  padding-top: 10px;
  letter-spacing: 0.48px;
  text-align: left;
  color: #333e49;
}

`

export default class index extends Component {
    render() {
        return (
            <div>
                <UpperContainer>
             <ContentContainer>
                 
                 <Title fontSize="28px">Terms and Condition</Title>
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
             <Title>Personal Identification Information</Title>
            
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
            </div>
        )
    }
}
