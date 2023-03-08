import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  function fazLogout(){
    setToken ('')
    alert ('Deslogou com sucesso!!!')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
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
                  <Link to="./home">
                    <MenuItem onClick={popupState.close}>Home</MenuItem>
                  </Link>

                  <MenuItem onClick={popupState.close}>Postagens</MenuItem>
                  <MenuItem onClick={popupState.close}>Temas</MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Cadastrar Temas
                  </MenuItem>
                  <Link to="./login">
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog Pessoal
          </Typography>

          <Link to="./login" className="text-decorator-none">
            {token ? (
              <Button color="inherit" onClick={fazLogout}>Logout</Button>
                         ) : (
              <Button color="inherit">Login</Button>
            )}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
