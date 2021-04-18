import React from 'react'
import SignUp from './components/auth/SignUp';
import { AuthProvider } from './contexts/AuthContext.js';
import './App.css';
import Dashboard from './components/auth/Dashboard';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import ForgotPassword from './components/auth/ForgotPassword';
import UpdateProfile from './components/auth/UpdateProfile';
import Home from './components/home';
import Listings from './components/listings';
import Search from './components/search';
import {Container} from 'react-bootstrap'
import 'spectre.css/dist/spectre.css'
import Map from './components/map'
import themeFile from './util/theme'
import {ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Header from './components/Header';

import HomeTwo from './pages/HomeTwo'
import Details from './pages/Details'
// import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header/>
        <div className="container">
          <Container>
              <AuthProvider>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <PrivateRoute path='/user' component={Dashboard} />
                  <PrivateRoute path='/update-profile' component={UpdateProfile} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/listings' component={Listings} />
                  <Route path='/login' component={Login} />
                  <Route path='/forgot-password' component={ForgotPassword} />
                  <Route path='/search' component={Search} />
                  <Route path='/map' component={Map} />
                  <Route path='/HomeTwo' component={HomeTwo} />
                {/*   <Route path='/details/:propertyId' component={Details} />   */}

                </Switch>
              </AuthProvider>
          </Container>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}



export default App;
