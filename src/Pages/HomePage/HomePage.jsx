import React from "react";
import AbouFlatHeads from "./Sections/AbouFlatHeads";
import Carousel from "./Sections/Carousel";
import SlideShow from "./Sections/SlideShow";

const HomePage = () => {
  return (
    <div>
      <SlideShow />
      <Carousel />
      <AbouFlatHeads />
    </div>
  );
};

export default HomePage;
