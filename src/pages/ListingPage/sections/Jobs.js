import React, { Component } from 'react'
import styled from "styled-components";
import Card from "../components/Card";
import Pagination from '@material-ui/lab/Pagination';

const Container = styled.div`
  height: auto;
  padding: 0px 12% 0px 12%;
  font-family: 'proxima-nova';
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

const ModPagination = styled(Pagination)`
  .MuiPaginationItem-page.Mui-selected{
    background-color: #333e49;
    color: white;
  }
  .MuiPaginationItem-root {
      color: #333e49;
  }
  /* @media (hover: none) */
.MuiPaginationItem-page.Mui-selected:hover, .MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
    background-color: #333e49;
}
`;
export default class Jobs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
                <Row>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
                <Row>
                    <Card/>
                    <Card/>
                    <Card/>
                </Row>
                <Bottom>
                    <ModPagination count={23} variant="outlined" shape="rounded" />
                </Bottom>
            </Container>
        )
    }
}
