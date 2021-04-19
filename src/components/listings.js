
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card/cardUI";
import realtors from './realtors/realtors';


export default function Realtors() {
    //returns the header (nav) and a grid container which has the data from realtors mapped to a grid item each
    return (
      <div style={{textAlign: "center"}}>
        <h1> Realtors </h1>
        <Grid container spacing={4} justify="center">
          {realtors.map(realtor => (
            <Grid key={realtor.id} item xs={12} sm={6} md={4}>
             <Card realtor={realtor} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
