import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

import Navbar from "../Navbar";

function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Welcome To </HeroH1>
          <HeroP>The Secret Shop</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
