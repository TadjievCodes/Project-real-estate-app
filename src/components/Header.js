import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
      <Nav className="justify-content-center align-items-center">
        <li>
          <img
          src={logo}
          width= "150"
          height ="auto"
          alt="logo"
          />
        </li>
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/listings'} className="nav-link">Realtors</Link></li>
        <li><Link to={'/login'} className="nav-link">Login</Link></li>
        <li><Link to={'/search'} className="nav-link">Property Finder</Link></li>
        <li><Link to={'/map'} className="nav-link">Map</Link></li>
       {/* <li><Link to={'/details'} className="nav-link">Details</Link></li>  */}
      </Nav>
    </Navbar>
    );
  }

import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    <div className={'nav-container'}>
      <AppBar position="static">
        <Toolbar className='nav-container'>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h4" className={classes.title}>
            <Button color="inherit" component={Link} to='/'>Home</Button>
            <Button color="inherit" component={Link} to='/listings'>Listings</Button>
            <Button color="inherit" component={Link} to='/search'>Search</Button>
            <Button color="inherit" component={Link} to='/map'>Map</Button>
            <Button color="inherit" component={Link} to='/login'>Login</Button>
            {/* <a href="tel:+1-555-555-1212">555-555-1212</a> */}
            <Button color="inherit" href="tel:+1-555-555-1212">Call us</Button>
            {/* <a class="button" href="tel:+1-555-555-1212">Call us</a> */}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );

}






// class Header extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <ul className="navbar-nav mr-auto">
//         <li><Link to={'/'} className="nav-link"> Home </Link></li>
//         <li><Link to={'/listings'} className="nav-link">Listings</Link></li>
//         <li><Link to={'/login'} className="nav-link">Login</Link></li>
//         <li><Link to={'/search'} className="nav-link">Property Finder</Link></li>
//         <li><Link to={'/map'} className="nav-link">Map</Link></li>
//        {/* <li><Link to={'/details'} className="nav-link">Details</Link></li>  */}
//       </ul>
//     </nav>
//     );
//   }
// }

// export default Header;