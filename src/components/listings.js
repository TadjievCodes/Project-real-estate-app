import React, { Component } from "react";
import Header from "./Header";
import listingsArray from "./images";
import Grid from "@material-ui/core/Grid";
import Card from "./Card/cardUI";
import { makeStyles } from "@material-ui/core";
import realtors from './realtors/realtors';

// takes the array of images imported and will dynamically create the listings
/*function showListings(realtors) {
  var returnStmt = [];
  for (var i = 0; i < realtors.length; i++) {
    // pushes each image to the array
    returnStmt.push(
      <center>
        <img src={realtors[i]} />
        <p>Listings Information Here</p>
        <br></br>
      </center>
    );
  }
  return returnStmt;
}*/

class Realtors extends Component {
  render() {
    return (
      <div>
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
      //<div>
      //
      //{showListings(listingsArray)}
      // </div>
    );
  }
}

export default Realtors;
