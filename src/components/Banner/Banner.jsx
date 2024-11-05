import React from "react";
import "./Banner.css";
import vr from "../../assets/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="banner bg-[#9538E2] px-10 text-white text-center relative mb-32 lg:mb-96">
      <div className="w-3/4 mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="font-normal text-base mb-6 lg:w-3/5 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          className="text-xl text-[#9538E2] font-bold bg-white p-4 rounded-3xl
       mb-[150px] md:mb-[300px]"
        >
          Shop Now
        </button>
      </div>
      <div className="backdrop-blur border border-white rounded-3xl p-4 absolute top-[480px] left-9 w-4/5 lg:left-[400px] lg:top-[280px] lg:w-fit">
        <img
          className="lg:w-[1000px] lg:h-[560px] rounded-3xl"
          src={vr}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
