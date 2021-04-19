import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar position="static" style={{opacity: "0.7"}}>
        <Toolbar varient="dense">
        <img
          src={logo}
          width= "150"
          height ="auto"
          alt="logo"
          />
        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>*/}
          <div variant="h4" className={classes.title}>
            <Button variant="contained" color="primary" style={{color: "white", textDecoration: "none", marginRight: "2%"}} component={Link} to='/'>Home</Button>
            <Button variant="contained" color="primary" style={{color: "white", textDecoration: "none", marginRight: "2%"}}  component={Link} to='/listings'>Realtors</Button>
            <Button variant="contained" color="primary" style={{color: "white", textDecoration: "none", marginRight: "2%"}}  component={Link} to='/search'>Search</Button>
            <Button variant="contained" color="primary" style={{color: "white", textDecoration: "none", marginRight: "2%"}}  component={Link} to='/map'>Contact us</Button>
            <Button variant="contained" color="primary" style={{color: "white", textDecoration: "none", marginRight: "2%"}}  component={Link} to='/login'>Login</Button>
            {/* <a href="tel:+1-555-555-1212">555-555-1212</a> */}
            <Button color="inherit" href="tel:+1-555-555-1212">Call us</Button>
            {/* <a class="button" href="tel:+1-555-555-1212">Call us</a> */}
          </div>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  );
}