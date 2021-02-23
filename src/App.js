import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Listings from './components/listings';
import Login from './components/login';
import "./App.css";

//Navigation bar that stays always for the mean time. Eventually will have login page that redirects to this
// so, the nav bar will then be just listings and home (and other pages that come later)

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <center>
            <h1>Real Estate Web Application</h1>
          </center>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/listings'} className="nav-link">Listings</Link></li>
              <li><Link to={'/login'} className="nav-link">Login</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/listings' component={Listings} />
              <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;