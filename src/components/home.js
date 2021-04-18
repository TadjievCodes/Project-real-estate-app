
import React, { Component } from "react";
import Header from "./Header";
import SliderData from "../components/Slider/slider";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import styles from "../components/style.css";



class Home extends Component {
  render() {

    return (
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        style={{
          backgroundColor: "rbga(0, 0, 0, 0.33)",
          marginLeft: -10,
          paddingRight: 10,
        }}
        settings={{
          slidingDuration: 1000,
          slidingDelay: 0,
          shouldAutoplay: true,
          autoplayDuration: 4000,
          height: "100vh",
          width: "100vw",
        }}
      >
        <OverlayContainer>
          <Header />
        </OverlayContainer>
        {SliderData.map((house) => (
          <Slide
            background={{
              backgroundImage: house.image,
              backgroundAttachment: "fixed",
            }}
          />
        ))}
      </HeroSlider>

  
    // return (
    //   <div className="container">      
    //   <div className="App2">
    //   <h1 className="header">Hello Property Details</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    //   </div>
    // </div>

    );
  }
}

export default Home;
