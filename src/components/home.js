import React, { Component } from 'react';
import Header from './Header';

import Map from './map/'


class Home extends Component {
  render() {
    return [
      <div>
        <Header/>
      </div>,
      <div className="App2">
      <h1>Hello Property Details</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Map />
    </div>
    ];
  }
}

export default Home;
