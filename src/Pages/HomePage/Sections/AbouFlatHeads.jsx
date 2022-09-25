import React from "react";

import BgImage1 from "../../../Assests/ShowImages/Innovative_materials-01.webp";
import BgImage2 from "../../../Assests/ShowImages/Smart_design-02.webp";
import BgImage3 from "../../../Assests/ShowImages/Supreme_comfort-03.webp";
import BgImage4 from "../../../Assests/ShowImages/Ultra_Lightweight_5.webp";
import BgImage5 from "../../../Assests/ShowImages/Environment_friendly-04.webp";
import { Link } from "react-router-dom";

let bgImages = [
  { img: BgImage1, name: "Innovative Materials" },
  { img: BgImage2, name: "Smart Design" },
  { img: BgImage3, name: "Supreme Comfort" },
  { img: BgImage4, name: "Ultra LightWeight" },
  { img: BgImage5, name: "Environment Friendly" },
];
const AbouFlatHeads = () => {
  return (
    <div id="AboutSection">
      <h2 className="font-semibold text-3xl text-center p-4">WHY FLATHEADS?</h2>
      <div className="md:flex w-full p-4">
        <div className="bg-[#fafafa] flex-1">
          <h2 className="text-2xl text-center font-semibold p-8 pb-12">
            What's Special About Flatheads?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
            {bgImages.map(({ img, name }) => (
              <div
                key={img}
                className="p-2 flex justify-center flex-col items-center"
              >
                <img src={img} alt={img} className="w-20 h-20" />
                <p className="py-2">{name}</p>
              </div>
            ))}
            <div className="flex justify-center items-center ">
              <Link to="/collections/all">
                <button className="btn">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex-1 bg-[url('/src/Assests/ShowImages/bgImage.webp')] md:p-8 md:pb-12 p-4 ">
          <h2 className="text-2xl text-center font-semibold">Brand Story</h2>
          <p className="text-lg md:p-4 p-1">
            Flatheads make shoes for the new generation. We are revolutionizing
            casual footwear through innovative materials and thoughtful design
            that is relevant to your lifestyle. Our shoes are made with natural
            materials like bamboo and banana fibre, optimized to offer you
            comfort that lasts all through the day., and more! From meetings to
            meet-ups, our shoes are crafted to fit every aesthetic.
          </p>
          <div className="flex items-center justify-end">
            <Link to="/collections/all">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AbouFlatHeads);
