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
  
</PropertyListingsProvider>

    
      </div>
    </React.Fragment>
  )
}




export default Search


