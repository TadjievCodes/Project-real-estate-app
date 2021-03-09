import * as React from 'react'

import Hero from '../components/Hero'
import Header from './Header'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../contexts/PropertyListingsProvider'



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
      <ul>
        {propertyListings.map(listing => (
          <li>{listing.title}</li>
        ))}
      </ul>
      
    )
  }}
  
 </PropertyListingsConsumer>
</PropertyListingsProvider>

    
      </div>
    </React.Fragment>
  )
}




export default Search


