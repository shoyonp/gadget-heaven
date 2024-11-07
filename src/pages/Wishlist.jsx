import React, { useEffect, useState } from "react";
import { getAllWishlists, removeWishlist } from "../components/utility";
import WishListCard from "../components/WishListCard/WishListCard";

const Wishlist = () => {
  const [products, setProduts] = useState([]);
  useEffect(() => {
    const wishLists = getAllWishlists();
    setProduts(wishLists);
  }, []);
  console.log(products);

  const handleRemove = (id) => {
    removeWishlist(id);
    const wishLists = getAllWishlists();
    setProduts(wishLists);
  };
  return (
    <div className="w-11/12 md:w-4/6 mx-auto mt-7">
      <h1 className="font-bold text-2xl mb-5">Wishlist</h1>
      {products?.map((product, idx) => (
        <WishListCard
          handleRemove={handleRemove}
          key={idx}
          product={product}
        ></WishListCard>
      ))}
    </div>
  );
};

export default Wishlist;
