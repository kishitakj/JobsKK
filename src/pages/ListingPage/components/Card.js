import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  padding: 25px;
  font-family: 'proxima-nova';
  border: solid 1px #d8d8d8;
  border-radius: 12px;
  width: 28%;
  display: flex;
  flex-direction: column;
`;

const Upper = styled.div`
  display:flex;
  justify-content: space-between;
`;

const Lower = styled.div`
  
`;

const Details = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: ${(props)=>props.justify || "normal"};
`;

const Details2 = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const T = styled.div`
  font-size: ${(props)=>props.size || "1rem"};
  font-weight: ${(props)=>props.weight || "normal"};
  color: ${(props)=>props.color || "#333e49"};
`;

const Shift = styled.div`
  background-color: ${(props)=>props.bg || "inherit"};
  color: ${(props)=>props.color || "#333e49"};
  border-radius: 5px;
  padding: 2px;
  font-size: 13px;
  text-align: center;
`;

const ModButton = styled.div`
  &&{background-color: ${(props)=>props.bg || "blue"};
  color: ${(props)=>props.color || "#333e49"};
  width: 31%;
  font-size: 14px;
  padding: 0px 30px;
  height: 40px;
  display:inline;
  border-radius: 4px;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  border: solid 1px #4caf50;
  justify-content: center;
  cursor: pointer;
  }
`;

const ModButton2 = styled(ModButton)`
&&{border: solid 1px #1a75e8;
}
`

export default class Card extends Component {
    render() {
        return (
            <Container>
                <Upper>
                    <Details>
                        <T size="24px" weight="600">Rs 25000</T>
                        <T size="16px" color="#a4a4a4">Marketing Comunication</T>
                        <T size="16px" color="#a4a4a4">Upxar Pvt. Ltd.</T>
                    </Details>
                    <Details justify="space-between">
                        <Shift bg="#072244" color="white">Night Shift</Shift>
                        <div>
                        <T size="9px" color="#a4a4a4">Education</T>
                        <T size="12px">Post Graduate</T>
                        </div>
                        
                    </Details>
                    
                </Upper>
                <hr/>
                <Lower>
                    <Details2>
                        <T size="16px">Pitampura, Delhi</T>
                        <T size="16px">4 Openings</T>
                    </Details2>
                    <Details2>
                        <ModButton color="#46ba65" bg="white">Share Job</ModButton>
                        <ModButton2 bg="#1a75e8" color="white">Apply Now</ModButton2>
                    </Details2>
                    
                </Lower>
            </Container>
        )
    }
}
