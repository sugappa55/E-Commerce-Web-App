import React from "react";
import { useSelector } from "react-redux";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const data = useSelector((store) => store.products);
  const slideLeft = () => {
    let elem = document.getElementById("slider");
    elem.scrollLeft = elem.scrollLeft - window.innerWidth;
  };
  const slideRight = () => {
    let elem = document.getElementById("slider");
    elem.scrollLeft = elem.scrollLeft + window.innerWidth;
  };
  return (
    <div className="p-2 md:p-12 ">
      <div className="text-center md:p-16 py-4">
        <p className="text-3xl uppercase font-semibold tracking-tight">
          BestSelllers
        </p>
        <p>Choose your style</p>
      </div>
      <div className="relative flex items-center ">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="left-0 rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10"
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap overflow-y-hidden scroll-smooth scrollbar-hide "
        >
          {data?.slice(0, 5).map((e) => (
            <div
              key={e.id}
              className=" w-[75vw] md:w-[35vw] lg:w-[22vw] md:h-64 inline-block cursor-pointer shadow-inner-md"
              onClick={() => navigate(`/single/${e.id}`)}
            >
              <img
                src={e.images[0]}
                alt=""
                className="w-full md:h-[70%] h-60 object-cover"
              />
              <div className=" p-6 md:p-4 text-center md:my-3">
                <p className="md:text-sm text-xl  text-ellipsis overflow-hidden">
                  {e.name}
                  {" | "}
                  {e.color}
                  {" | "}
                  {e.gender}
                </p>
                <p className="text-red-500 md:text-sm text-lg">
                  Rs.{e.final_price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10"
        />
      </div>
    </div>
  );
};

export default Carousel;
