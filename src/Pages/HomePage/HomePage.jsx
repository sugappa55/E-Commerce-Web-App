import React from "react";
import AbouFlatHeads from "./Sections/AbouFlatHeads";
import BigCarousel from "./Sections/BigCarousel";
import Carousel from "./Sections/Carousel";
import Featured from "./Sections/Featured";
import Reviews from "./Sections/Reviews";
import SlideShow from "./Sections/SlideShow";

const HomePage = () => {
  return (
    <div>
      <SlideShow />
      <Carousel />
      <AbouFlatHeads />
      <BigCarousel/>
      <Reviews/>
      <Featured/>

    </div>
  );
};

export default HomePage;
