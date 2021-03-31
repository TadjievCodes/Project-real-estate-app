import React, { Component } from 'react';
import Header from './Header';

import Map from './map/'
import KeyFeatures from '../keyFeatures'
import styles from "../components/style.css";


class Home extends Component {
  
  render() {
  const features = [
  'Help to Buy available, ideal for first time buyers',
  'Within walking distance of the Northern Quarter, Ancoats & NOMA',
  'Exposed brickwork retaining the charm of the existing building',
  'Cycle storage',
  'Victorian Mill conversion',
  '13 unique 1,2 and 3 bed apartments available'
]
    return [
      <div>
        <Header/>
      </div>,
      <div className="App2">
      <h1 className="header">Hello Property Details</h1>
      <h2>Start editing to see some magic happen!</h2>
      <KeyFeatures features={features} />
      <Map />
    </div>
    ];
  }
}

export default Home;
