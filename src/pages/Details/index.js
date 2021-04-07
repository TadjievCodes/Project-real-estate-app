import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../contexts/PropertyListingsProvider'

import PropertyDetails from '../../components/propertyDetails'

function Details({ propertyId }) {
  return (
    <div className="container">
      <PropertyListingsProvider>
        <PropertyListingsConsumer>
          {({ getListingByPropertyId }) => (
            <PropertyDetails listing={getListingByPropertyId(propertyId)} />
          )}
        </PropertyListingsConsumer>
      </PropertyListingsProvider>
    </div>
  )
}

export default Details