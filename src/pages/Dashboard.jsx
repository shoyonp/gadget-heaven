import React from "react";
import "./Dashboard.css";
import Heading from "../components/Heading/Heading";
const Dashboard = () => {
  return (
    <>
      <div className="bg-[#9538E2] p-9 text-center">
        <Heading
          title={"Dashboard"}
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
        <div className="flex justify-center gap-4">
          <button>Cart</button>
          <button>WishList</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
