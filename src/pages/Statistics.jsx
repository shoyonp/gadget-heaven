import React from "react";
import Heading from "../components/Heading/Heading";
import UseTitle from "../components/UseTitle/UseTitle";

const Statistics = () => {
    UseTitle("Statistics")
  return (
    <div className="bg-[#9538E2] p-9 text-center">
      <Heading
        title={"statistics"}
        subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
      ></Heading>
    </div>
  );
};

export default Statistics;
