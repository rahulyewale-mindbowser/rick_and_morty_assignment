import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 30, display: { xs: "flex", md: "flex" } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
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
              <Link to="/"> Characters </Link>
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
              <Link to="/favorite">Favorites</Link>
            </li>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
