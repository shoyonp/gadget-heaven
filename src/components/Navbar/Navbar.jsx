import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  // console.log(locaion);
  return (
    <div
      className={`nav navbar bg text-white px-6 ${
        pathname === "/" || ("/dashboard" && "removebg")
      }`}
    >
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
            <NavLink
              className={({ isActive }) =>
                ` text-black mb-2 ${isActive ? "link-active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-black mb-2 ${isActive ? "link-active" : ""}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-black mb-2 ${isActive ? "link-active bg-white" : ""}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-black mb-2 ${isActive ? "link-active" : ""}`
              }
              to="/faq"
            >
              FAQ
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5">
          <NavLink
            className={({ isActive }) =>
              `hover:text-black  ${isActive ? "link-active" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? "link-active" : ""}`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? "link-active" : ""}`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-black ${isActive ? "link-active" : ""}`
            }
            to="/faq"
          >
            FAQ
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3 items-center text-black">
        <span className="bg-white p-2 border rounded-full">
          <FaOpencart></FaOpencart>
        </span>
        <span className="bg-white p-2 border rounded-full">
          <IoMdHeartEmpty></IoMdHeartEmpty>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
