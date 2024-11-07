import React, { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../components/utility";
import { PiSliders } from "react-icons/pi";
import CartListCard from "../components/CartListCard/CartListCard";
import UseTitle from "../components/UseTitle/UseTitle";

const Cart = () => {
  UseTitle("Cart");
  
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const carts = getAllCarts();
    setCartList(carts);
  }, []);

 
    const handleSort = () => {
      const sorted = [...cartList]?.sort((a, b) => b.price - a.price);
      setCartList(sorted);
    };

  const handleRemove = (id) => {
    removeCart(id);
    const carts = getAllCarts();
    setCartList(carts);
  };

  return (
    <div className="w-11/12 md:w-4/6 mx-auto mt-7">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p className="font-bold text-2xl">Total cost:</p>
          <div className="flex gap-5 items-center">
            <button
                onClick={() => handleSort()}
              className="p-3 flex items-center gap-2 hover:bg-gray-300 border border-[#9538E2] text-[#8332C5] rounded-3xl font-semibold text-lg"
            >
              Sort by Price <PiSliders></PiSliders>
            </button>
            <button className="p-3 border-none hover:bg-gray-300 bg-[#9538E2] text-white rounded-3xl font-semibold text-lg">
              Purchase
            </button>
          </div>
        </div>
      </div>
      {cartList?.map((cart, idx) => (
        <CartListCard
          handleRemove={handleRemove}
          key={idx}
          cart={cart}
        ></CartListCard>
      ))}
    </div>
  );
};

export default Cart;
