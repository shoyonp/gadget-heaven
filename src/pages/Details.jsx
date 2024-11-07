import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar, FaOpencart } from "react-icons/fa";
import {
  addToCart,
  addToWishlist,
  getAllWishlists,
} from "../components/utility";

const Details = ({ singleData }) => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  const [isInWishlist, setIsInWishlist] = useState(false);
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
    const wishLists = getAllWishlists();
    const isExist = wishLists.find(
      (item) => item.product_id == singleData.product_id
    );
    if (isExist) {
      setIsInWishlist(true);
    }
  }, [product_id, data]);

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setIsInWishlist(true);
  };

  return (
    <>
      <div className="bg-[#9538E2] px-10 h-80 text-white text-center mb-[780px] lg:mb-96">
        <div className="w-3/4 mx-auto">
          <Heading
            title={"Product Details"}
            subtitle={`Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!`}
          ></Heading>
        </div>
        <div className="bg-gray-100 flex flex-col md:flex-row gap-7 items-center border-none rounded-3xl p-5 md:w-4/6 mx-auto">
          <div>
            <img
              className=" rounded-2xl md:h-[500px] w-[550px] object-cover"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black text-left">
            <h1 className="font-semibold text-2xl mb-2">{product_title}</h1>
            <p className="font-semibold text-lg opacity-60 mb-2">
              Price:$ {price}
            </p>
            <p className="p-2 w-36 text-center rounded-3xl mb-2 border border-[#309C08] bg-[#309C08]/10 text-[#309C08]">{`${
              availability == true ? "In Stock" : " Out of Stock"
            }`}</p>
            <p className="font-normal text-lg text-black/60">{description}</p>
            <div>
              <p className="font-bold text-lg mb-2">Specification:</p>
              {specification &&
                specification?.map((specs, idx) => (
                  <li className="text-black/60" key={idx}>
                    {specs}
                  </li>
                ))}
            </div>
            <span className="font-bold text-lg flex gap-3 items-center mt-2">
              Rating <FaStar></FaStar>
            </span>
            <div className="flex items-center gap-3 ">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <p className="p-2 bg-gray-200 font-medium rounded-2xl text-sm text-black/80">
                {rating}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#9538E2] p-3 flex gap-2 items-center font-bold hover:bg-slate-300 hover:text-black text-white rounded-3xl"
              >
                Add to cart<FaOpencart></FaOpencart>
              </button>
              <button
                disabled={isInWishlist}
                onClick={() => handleAddToWishlist(product)}
                className="p-3 border bg-[#9538E2] hover:bg-slate-300 rounded-full"
              >
                <IoMdHeartEmpty></IoMdHeartEmpty>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
