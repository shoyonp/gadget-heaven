import React from "react";
import Heading from "../components/Heading/Heading";
import UseTitle from "../components/UseTitle/UseTitle";

const Statistics = () => {
  UseTitle("Statistics");
  return (
    <>
      <div className="bg-[#9538E2] p-9 text-center">
        <Heading
          title={"statistics"}
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
      </div>
      <h1 className="text-6xl font-bold text-center text-[#9538E2] my-7">
        No Data Here
      </h1>
    </>
  );
};

export default Statistics;
