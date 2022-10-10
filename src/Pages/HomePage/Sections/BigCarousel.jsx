import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../Assests/CarouselImages/image_1.jpeg";
import Image2 from "../../../Assests/CarouselImages/image_2.jpeg";
import Image3 from "../../../Assests/CarouselImages/image_3.jpeg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const products = [
  {
    img: Image1,
    name: "Banana Clicks",
    description:
      "Spark conversations with the worlds 1st banana fabric sneakers",
  },
  {
    img: Image2,
    name: "Linen Sneakers",
    description: "All weather, dual toned linen shoes to make heads turn",
  },
  {
    img: Image3,
    name: "SoftKnit Loafers",
    description: "Super soft,super stylish. Comfort never looked this chic!",
  },
];

const slideLeft = () => {
  let elem = document.getElementById("slider-big");
  elem.scrollLeft = elem.scrollLeft - window.innerWidth;
};
const slideRight = () => {
  let elem = document.getElementById("slider-big");
  elem.scrollLeft = elem.scrollLeft + window.innerWidth;
};

const BigCarousel = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-semibold uppercase p-6 ">
        Worlds First
      </h2>
   <div className="flex relative items-center group ">
   <MdChevronLeft
        onClick={slideLeft}
        size={40}
        className="left-0 rounded-full  cursor-pointer z-10 hidden group-hover:block"
      />
      <div
        className="whitespace-nowrap overflow-x-scroll scrollbar-hide  my-4 scroll-smooth"
        id="slider-big"
      >
        {products.map((product) => (
          <div
            className="inline-block relative ml-4 truncate h-[70vh] ] md:w-[50vw] lg:w-[40vw] sm:w-[60vw] bg-[#f9f9f9]"
            key={product.name}
          >
            <div>
              <img
                loading="lazy"
                src={product.img}
                alt="carousel-img"
                className="object-cover h-[50%]  w-full"
              />
            </div>
            <div className="px-4 absolute bottom-0 truncate w-full z-10">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-ellipsis overflow-hidden">
                {product.description}
              </p>
              <Link to="/collections/all">
                <div className="text-xl ml-[-1rem]">
                  <button className="btn">Shop Now</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="right-0 rounded-full cursor-pointer z-10 hidden group-hover:block text-black"
        />
   </div>
    </>
  );
};

export default memo(BigCarousel);
