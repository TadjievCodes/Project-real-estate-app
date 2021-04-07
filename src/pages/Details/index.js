import * as React from 'react'
import Hero from '../../components/Hero'


import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../contexts/PropertyListingsProvider'

import PropertyDetails from '../../components/propertyDetails'

function Details({ propertyId }) {
  return (
  <React.Fragment>
      <Hero />

    <div className="container">
      <PropertyListingsProvider>
        <PropertyListingsConsumer>
          {({ getListingByPropertyId }) => (
            <PropertyDetails listing={getListingByPropertyId(propertyId)} />
          )}
        </PropertyListingsConsumer>
      </PropertyListingsProvider>
    </div>
 </React.Fragment>
   
  )
}

export default Details