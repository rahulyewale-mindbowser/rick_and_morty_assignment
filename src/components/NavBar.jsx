import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
const NavBar = () => {
const favList =useSelector((state)=>state.favoriteList)
const favCount =favList.favorites.length
// console.log(favCount);
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed" >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 30, display: { xs: "flex", md: "flex" } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              textShadow:"1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
            }}
          >
            <li>Rick And Morty Characters Tracker</li>
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
                Favorites {favCount>0 && <span style={{marginLeft:"4px"}}>({favCount})</span>}
                </NavLink>
              
            </li>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
