import * as React from 'react'

import Hero from '../components/Hero'
import Header from './Header'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../contexts/PropertyListingsProvider'

//import { Router } from '@reach/router'
import Listing from '../components/listing'



//<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
//import { BrowserRouter, Route, Link } from "react-router-dom";




function Search() {
    
  return (
  
    <React.Fragment>
      <Hero />
      <div className="container">
        <PropertyListingsProvider>
         <PropertyListingsConsumer>
  {function(value) {
    const { propertyListings } = value
    return (
 
      <div className="columns">
  {propertyListings.map(listing => (
    <Listing listing={listing} key={listing.address} />
  ))}
</div>


    )
  }}
  
 </PropertyListingsConsumer>
</PropertyListingsProvider>

    
      </div>
    </React.Fragment>
  )
}




export default Search


