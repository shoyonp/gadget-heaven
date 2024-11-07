import React from "react";
import "./Banner.css";
import vr from "../../assets/assets/banner.jpg";
import Heading from "../Heading/Heading";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner bg-[#9538E2] px-10 text-white text-center relative mb-32 lg:mb-96">
      <div className="w-3/4 mx-auto">
        <Heading
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={`Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
        <button
          onClick={() => navigate("/dashboard")}
          className="text-xl text-[#9538E2] hover:bg-gray-200 font-bold bg-white p-4 rounded-3xl
       mb-[150px] md:mb-[300px]"
        >
          Shop Now
        </button>
      </div>
      <div className="backdrop-blur border border-white rounded-3xl p-4 absolute top-[480px] left-9 w-4/5 lg:left-[240px] lg:top-[280px] lg:w-fit">
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
