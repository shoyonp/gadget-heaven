import React, { useState } from "react";
import { TbXboxX } from "react-icons/tb";

const CartListCard = ({ cart, handleRemove }) => {
  const { price, product_title, description, product_image, product_id } = cart;
  return (
    <div className="flex flex-col md:flex-row  text-center md:text-left items-center gap-5 bg-gray-200 p-4 rounded-2xl mb-3 relative">
      <div>
        <img
          className="md:w-52 md:h-48 object-cover rounded-xl"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-3">{product_title}</h1>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="font-semibold text-lg mb-3">Description:</span>
          <p className="text-black/60 mb-3">{description}</p>
        </div>
        <p className="font-semibold text-xl mb-3">Price:$ {price}</p>
      </div>
      <button
        onClick={() => handleRemove(product_id)}
        className="text-4xl text-red-500 absolute left-[320px] lg:left-[1100px]"
      >
        <TbXboxX></TbXboxX>
      </button>
    </div>
  );
};

export default CartListCard;
