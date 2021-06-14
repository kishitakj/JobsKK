import React, { Component } from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as IndiaFlag } from "../../assets/images/india.svg";
// import Container from '@material-ui/core/Container';



const UpperContainer = styled.div`
 
margin:20px 30px 10px 30px;
align-items: center;
justify-content: center;
display: flex;
width:70%;
flex-direction: column;
@media only screen and (min-width: 768px) {
    
  width:90%;
    flex-direction: row;
    flex:1; 
   
}`

const Submain= styled.div`
border: solid 0.5px #dadada;
padding: 30px;
display:flex;
align-content: center;
justify-content: center;
border-radius: 14px;
margin-right:5%;
width:100%;

@media only screen and (min-width: 768px) {
  border: solid 0.5px #dadada;
 padding: 60px;
border-radius: 14px;
margin:40px 0px 40px 100px;
width:90%;
}
`

const MainContainer= styled.div`
display:flex;
/* border: solid 0.5px #dadada;
 padding: 60px;
border-radius: 14px;
margin:40px 0px 40px 200px; */
@media only screen and (min-width: 768px) {
 flex:1;
    }`


const Img= styled.img`
display:none;
@media only screen and (min-width: 768px) {
    display:block;
    width:50vw;

}`
 const ModB = styled(Button)`
  && {
    width: 100%;
    font-size: 17px;
    border-radius: 12px;
    background-color:#1a75e8;
    color: white;
    text-transform: none;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      width: ${(props) => props.size || "100%"};
    }
  }
`;
const Flag = styled(IndiaFlag)`
`;
const sub= styled(TextField)`
height:90px;
`
const Typo = styled(Typography)`
  && {
  text-align: left;
  float:left;
  font-size: 28px;
  color:#333e49;
  font-weight: 600;
  }`

  const sub1= styled.div`
  height:15vh;
  `


const useStyles = makeStyles((theme) => ({
  paper: {
     display: 'flex',
    flexDirection: 'column',
   },

  form: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (

    <UpperContainer>
   
    <MainContainer component="main" maxWidth="xs">
        <Submain>
    <CssBaseline />
      <div className={classes.paper}>
        <Typo component="h1" variant="h5">
          Contact Us
        </Typo>
        <sub1>
        <form className={classes.form} noValidate>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth

            label="FullName"
            name="fullname"
            autoComplete="Full name"
            autoFocus
          />
         
           <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
        
            label="Mobile no"
            name="mobile no"
            autoComplete="mobile no"
            autoFocus
            />
           
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
         
          <sub>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Enter text"
            label="Enter text"
            type="Text" />
            </sub>
           
         
          <ModB
            type="submit"
            className={classes.submit}
          >
            SUBMIT
          </ModB>
          </form>
          </sub1>
      </div>
      </Submain>
     
    </MainContainer>
    <MainContainer>
        
    <Img alt="sec1" src="sec12.png" />
    </MainContainer>
  
   
    </UpperContainer>
  );
}