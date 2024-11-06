import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading/Heading";

const Details = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
  }, [product_id, data]);
  const {} = product;
  return (
    <div className="bg-[#9538E2] px-10 text-white text-center relative mb-32 lg:mb-96">
      <div className="w-3/4 mx-auto">
        <Heading
          title={"Product Details"}
          subtitle={`Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
      </div>
      
    </div>
  );
};

export default Details;
