import "./Dashboard.css";
import Heading from "../components/Heading/Heading";
import { NavLink, Outlet } from "react-router-dom";
import UseTitle from "../components/UseTitle/UseTitle";

const Dashboard = () => {
  UseTitle("Dashboard");
  return (
    <>
      <div className="bg-[#9538E2] p-9 text-center">
        <Heading
          title={"Dashboard"}
          subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}
        ></Heading>
        <div className="flex justify-center gap-4">
          <span>
            <NavLink
              className={({ isActive }) =>
                `p-3 border border-white rounded-3xl font-semibold text-lg ${
                  isActive ? "bg-white text-[#8332C5] p-3 rounded-3xl" : ""
                }`
              }
              to="cart"
            >
              cart
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                `p-3 border border-white rounded-3xl font-semibold text-lg ${
                  isActive ? "bg-white text-[#8332C5] p-3 rounded-3xl" : ""
                }`
              }
              to="wishlist"
            >
              Wishlist
            </NavLink>
          </span>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Dashboard;
