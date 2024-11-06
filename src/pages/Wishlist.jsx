import React, { useEffect, useState } from "react";
import { getAllWishlists } from "../components/utility";
import WishListCard from "../components/WishListCard/WishListCard";

const Wishlist = () => {
  const [products, setProduts] = useState([]);
  useEffect(() => {
    const wishLists = getAllWishlists();
    setProduts(wishLists);
  }, []);
  console.log(products);

  return (
    <div className="w-11/12 md:w-4/6 mx-auto mt-7">
      <h1 className="font-bold text-2xl mb-5">Wishlist</h1>
      {products.map((product, idx) => (
        <WishListCard key={idx} product={product}></WishListCard>
      ))}
    </div>
  );
};

export default Wishlist;
