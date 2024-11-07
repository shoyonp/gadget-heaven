import React from "react";
import Banner from "../components/Banner/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import UseTitle from "../components/UseTitle/UseTitle";

const Home = () => {
    UseTitle("Home")
    const categories = useLoaderData();
  return (
    <div>
      <div className="px-6">
        <Banner></Banner>
      </div>
      <h1 className="text-center font-bold text-4xl mb-10">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="flex flex-col md:grid grid-flow-col gap-10 w-3/4 mx-auto">
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
