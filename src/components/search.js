import * as React from 'react'
import { Component } from 'react'
import Hero from '../components/Hero'
import { PropertyListingsProvider, PropertyListingsConsumer } from '../contexts/PropertyListingsProvider'

import Listing from '../components/listing'
import Filter from '../components/filter'
class Search extends Component {
  render(){
    return (
      
    <div>
      <React.Fragment>
        <Hero />
        <div className="container">
          <PropertyListingsProvider>
        <PropertyListingsConsumer>
    {function(value) {
      const { propertyListings, allListings, updateFilter } = value
      return (
        <React.Fragment>
          <Filter
            updateFilter={updateFilter}
            postcodes={allListings
              .map(listing => listing.postcode.split(' ')[0])
              .filter((item, i, arr) => arr.indexOf(item) === i)}
          />
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
  </div>
    )
  }
}




// export default withStyles(styles)(Search)
export default Search


