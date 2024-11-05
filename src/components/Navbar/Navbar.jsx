import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="nav navbar bg-[#9538E2] text-white px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/new">New</NavLink>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/new">New</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3 items-center text-black">
        <span className="bg-white p-2 rounded-full"><FaOpencart></FaOpencart></span>
        <span  className="bg-white p-2 rounded-full"><IoMdHeartEmpty></IoMdHeartEmpty></span>
      </div>
    </div>
  );
};

export default Navbar;
