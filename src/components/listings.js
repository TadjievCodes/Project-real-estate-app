import React, { Component } from 'react';
import Header from './Header';
import listingsArray from './images';


// takes the array of images imported and will dynamically create the listings
function showListings(listings){
  var returnStmt = [];
    for(var i = 0; i < listings.length; i++){

      // pushes each image to the array
      returnStmt.push(
      <center>
        <img src={listings[i]}/>
        <p>Listings Information Here</p>
        <br></br>
      </center>
      );   
    }
    return(
      returnStmt
    );
}

class Listings extends Component {
  render() {
    return (
      <div>
      <Header/>
      {showListings(listingsArray)}
      </div>
    );
  }
}

export default Listings;