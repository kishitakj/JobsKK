import React, { Component } from 'react'
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";

const Container = styled.div`
  height: auto;
  padding: 70px 12% 0px 12%;
  font-family: 'proxima-nova';
`;

const H = styled.div`
display: inline;
  font-size: 36px;
  font-weight: bold;
  color: #333e49;
`;
const ModFormControl = styled(FormControl)`
  && {
    /* padding: 10px; */
    width: 10vw;
    margin-left: 15px;
    font-weight: 400;
  }
  .MuiOutlinedInput-input {
    padding: 10px;
  }
  .MuiInputBase-input {
    font: caption;
    color: #333e49;
  }
`;

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin: 35px 0px 20px -10px;
`;

const Tiles = styled.div`
  border: solid 1px #f0f0f0;
  border-radius: 8px;
  color: ${(props)=>props.color || "#333e49"};
  background-color: ${(props)=>props.bg || "inherit"};;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  margin-left: 10px;
`;
export default class Heading extends Component {
    state = {
        qualification: 10,
        city: "all",
      };
    
      handleChange1 = (event) => {
        this.setState({
          qualification: event.target.value,
        });
      };

      handleChange1 = (event) => {
        this.setState({
          city: event.target.value,
        });
      };
    render() {
        return (
            <Container>
                <Upper>
                    <H>2372 10th Pass Jobs</H>
                    <div>
                        <ModFormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">Educational Qualification</InputLabel>
                            <Select
                            native
                            value={this.state.qualification}
                            onChange={this.handleChange1}
                            label="Educational Qualification"
                            inputProps={{
                                name: 'qualification',
                                id: 'outlined-age-native-simple',
                            }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>10th Pass</option>
                                <option value={12}>12th Pass</option>
                            </Select>
                        </ModFormControl>
                        <ModFormControl variant="outlined" >
                            <InputLabel htmlFor="outlined-age-native-simple">City</InputLabel>
                            <Select
                            native
                            value={this.state.city}
                            onChange={this.handleChange2}
                            label="City"
                            inputProps={{
                                name: 'city',
                            }}
                            >
                                <option aria-label="None" value="" />
                                <option value={"all"}>All</option>
                            </Select>
                        </ModFormControl>
                    </div>
                </Upper>
                <Lower>
                    <Tiles bg="#4dc288" color="white">All</Tiles>
                    <Tiles>Work From Home</Tiles>
                    <Tiles>In Office</Tiles>
                    <Tiles>Field Job</Tiles>
                    <Tiles>Part Time</Tiles>
                    <Tiles>Females Only</Tiles>
                    <Tiles>Males Only</Tiles>
                    <Tiles>For Freshers</Tiles>
                    <Tiles>Night Shift</Tiles>
                    <Tiles>Day Shift</Tiles>
                </Lower>
            </Container>
        )
    }
}
