import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
import { Avatar } from "@material-ui/core";
const NavBar = () => {
const favList =useSelector((state)=>state.favoriteList)
const favCount =favList.favorites.length
// console.log(favCount);
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 30, display: { xs: "flex", md: "flex" } }}
            style={{
              marginLeft:"1rem"
            }}
          >
           <Avatar alt="Remy Sharp" src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" />
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "flex", md: "flex"  } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              
            }}
          >
            <li>
              <NavLink to="/"  className={({ isActive }) => (isActive ? "link-active" : "link")}> Characters </NavLink>
            </li>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "flex", md: "flex" } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
            }}
          >
            <li>
              <NavLink to="/favorite" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                Favorites {favCount>0 && <span style={{marginLeft:"6px"}}> <Badge badgeContent={favCount} color="success"></Badge></span>}
                </NavLink>
              
            </li>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
