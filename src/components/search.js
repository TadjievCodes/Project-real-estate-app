import * as React from 'react'

import Hero from '../components/Hero'
import Header from './Header'
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../contexts/PropertyListingsProvider'

import Listing from '../components/listing'

import Filter from '../components/filter'






function Search() {
    
  return (
  
    <React.Fragment>
      <Hero />
      <div className="container">
        <PropertyListingsProvider>
  <PropertyListingsConsumer>
  {function(value) {
    const { propertyListings, updateFilter } = value
    return (
      <React.Fragment>
        <Filter updateFilter={updateFilter} />
        <div className="columns">
          {propertyListings.map(listing => (
            <Listing listing={listing} key={listing.address} />
          ))}
        </div>
      </React.Fragment>
    )
  }}
</PropertyListingsConsumer>
</PropertyListingsProvider>

    
      </div>
    </React.Fragment>
  )
}




export default Search


