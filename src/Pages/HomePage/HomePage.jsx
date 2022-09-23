import React from "react";
import AbouFlatHeads from "./Sections/AbouFlatHeads";
import Carousel from "./Sections/Carousel";
import Featured from "./Sections/Featured";
import SlideShow from "./Sections/SlideShow";

const HomePage = () => {
  return (
    <div>
      <SlideShow />
      <Carousel />
      <AbouFlatHeads />
      <Featured/>
    </div>
  );
};

export default HomePage;
