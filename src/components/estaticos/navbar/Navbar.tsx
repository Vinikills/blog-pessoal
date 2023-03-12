import React from "react";
import AppBar from "@mui/material/AppBar";
import './Navbar.css'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
  let dispatch = useDispatch()
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado',{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    navigate('/login');
  }

  var navbarComponent;

  if(token != ""){
    navbarComponent = <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                {...bindTrigger(popupState)}
              >
                <MenuIcon />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <Link to ='./home'>
                <MenuItem onClick={popupState.close}>Home</MenuItem>
                </Link>
                
                <MenuItem onClick={popupState.close}>Postagens</MenuItem>
                <MenuItem onClick={popupState.close}>Temas</MenuItem>
                <MenuItem onClick={popupState.close}>Cadastrar Temas</MenuItem>
                
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog Pessoal
        </Typography>
        
        <Link to='./login' onClick={goLogout} className='text-decorator-none'>
          <Button color="inherit">Logout</Button>
        </Link>
        
      </Toolbar>
    </AppBar>
  </Box>
  }
  return (
    <>
    {navbarComponent}
    </>
  );
}
export default Navbar;
