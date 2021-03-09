import * as React from 'react'

const DefaultState = {
  propertyListings: []
}

const PropertyListingsContext = React.createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer



export class PropertyListingsProvider extends React.Component {
  state = DefaultState

  componentDidMount() {
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ propertyListings: res })
      })
  }

  render() {
    const { children } = this.props
    const { propertyListings } = this.state

    return (
      <PropertyListingsContext.Provider
        value={{
          propertyListings
        }}
      >
        {children}
      </PropertyListingsContext.Provider>
    )
  }
}