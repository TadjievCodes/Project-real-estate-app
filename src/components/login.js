import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

// using material-ui as a nice ui library
//https://material-ui.com/api/

function loginRedirect(){
  
}

// form creation
class Login extends Component {
    render() {
      return (
        <Container component="main" maxWidth="xs">
        <div>
          <form noValidate>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              onClick={loginRedirect}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      );
    }
  }

export default Login;

