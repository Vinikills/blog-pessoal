import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    let dispatch = useDispatch()
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  var footerComponent;

if(token != ""){
    footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid alignItems="center" item xs={12}>
        <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://www.facebook.com/vinicius.fernando.79/" target="_blank">
                    <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                </a>
                <a href="https://www.instagram.com/vinikills/" target="_blank">
                    <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                </a>
                <a href="https://www.linkedin.com/in/viniferan/" target="_blank">
                    <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                </a>
            </Box>
        </Box>
        <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
            <Box paddingTop={1}>
                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
            </Box>
            <Box>
                <a target="_blank" href="https://www.linkedin.com/in/viniferan/">
                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Vinicius Fernando</Typography>
                </a>
            </Box>
        </Box>
    </Grid>
</Grid>
}
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;