import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minWidth: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu:{
    minHeight: "50vh",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleMenu = event => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  const theme = useTheme();
  const smWindow = useMediaQuery(theme.breakpoints.down("sm"));

  if (smWindow) {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={logo} width="100vw" height="auto" alt="logo" />
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            className={classes.menu}
            anchorEl={anchorEl}
           
            keepMounted
            open={open}
            onClose={handleClose}
            >
            <Link to="/"><li onClick={handleClose}>Home</li></Link>
            <br/>
            <Link to="/listings"><li onClick={handleClose}>Realtors</li></Link>
            <br/>
            <Link to="/search"><li onClick={handleClose}>Search</li></Link>
            <br/>
            <Link to="/map"><li onClick={handleClose}>Contact Us</li></Link>
            <br/>
            <Link to="/login"><li onClick={handleClose}>Login</li></Link>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Toolbar varient="dense">
          <img src={logo} width="150" height="auto" alt="logo" />
          <div variant="h4" className={classes.title}>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2%",
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2%",
              }}
              component={Link}
              to="/listings"
            >
              Realtors
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2%",
              }}
              component={Link}
              to="/search"
            >
              Search
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2%",
              }}
              component={Link}
              to="/map"
            >
              Contact us
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2%",
              }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button color="inherit" href="tel:+1-555-555-1212">
              Call us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
