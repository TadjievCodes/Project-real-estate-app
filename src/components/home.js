
import React, { Component } from "react";
import SliderData from "../components/Slider/slider";
import HeroSlider, {Slide} from "hero-slider";
import { makeStyles } from '@material-ui/core/styles';


export default function Home() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        backgroundColor: "rbga(0, 0, 0, 0.33)",
        paddingRight: 10,
        left: 0,
        position: "absolute",
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
      {SliderData.map((house) => (
        <Slide
          background={{
            backgroundImage: house.image,
            backgroundAttachment: "fixed",
          }}
        />
      ))}
    </HeroSlider>

  );
}
