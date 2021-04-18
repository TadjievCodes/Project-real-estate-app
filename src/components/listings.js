import React, { Component } from "react";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Card from "./Card/cardUI";
import { makeStyles } from "@material-ui/core";
import realtors from './realtors/realtors';

class Realtors extends Component {
  render() {
    //returns the header (nav) and a grid container which has the data from realtors mapped to a grid item each
    return (
      <div style={{textAlign: "center"}}>
        <Header />
        <h1> Realtors </h1>
        <Grid container spacing={4} justify="center">
          {realtors.map(realtor => (
            <Grid item xs={12} sm={6} md={4}>
              <Card realtor={realtor} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Realtors;
