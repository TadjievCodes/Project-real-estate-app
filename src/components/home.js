import React, { Component } from 'react';
import Header from './Header';


import styles from "../components/style.css";


class Home extends Component {
  
  render() {
  
    return [
      <div>
        <Header/>
      </div>,
      <div className="App2">
      <h1 className="header">Hello Property Details</h1>
      <h2>Start editing to see some magic happen!</h2>
      
    </div>
    ];
  }
}

export default Home;
