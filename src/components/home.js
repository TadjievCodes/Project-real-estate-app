
import React from "react";
import SliderData from "../components/Slider/slider";
import HeroSlider, {Slide, OverlayContainer} from "hero-slider";
import Typography from '@material-ui/core/Typography';



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

      <OverlayContainer>
        <center style={{paddingTop: "10vh"}}>
        <Typography variant="h3" style={{color: "#ffffff", width: "90vw"}}>
            Welcome to Real Estate Inc.
        </Typography>
        </center>
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
  );
}