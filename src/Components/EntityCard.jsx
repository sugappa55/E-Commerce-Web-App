import { Rating } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EntityCard = ({ product }) => {
  const navigate = useNavigate();
  let [image, setImage] = useState(product.images[0]);
  const onHover = () => {
    setImage(product.images[1]);
  };
  const onHoverOut = () => {
    setImage(product.images[0]);
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      onClick={() => navigate(`/single/${product.id}`)}
      className="cursor-pointer"
    >
      <img src={image} alt="data" className="w-full md:h-56 h-64 object-cover" />
      <div className="mt-4">
        {" "}
        <p className="text-ellipsis overflow-hidden text-center md:text-xs py-4">
          {product.name} | {product.color} | {product.gender}
        </p>
        <div className="flex flex-wrap justify-center">
          {" "}
          <Rating
            style={{ color: "#ffc107" }}
            value={product.rating > 0 ? product.rating : 4}
            readOnly
          />
          <p>
            {product.reviews ?? 2} {"  "}reviews
          </p>
        </div>
        <p className="text-gray-600 py-2 text-center">
          RS {product.final_price}
        </p>
      </div>
    </div>
  );
};

export default React.memo(EntityCard);
