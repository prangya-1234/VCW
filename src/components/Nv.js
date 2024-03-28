import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const Nv = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Call App</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
          <li className="nav-item">
          <NavLink  activeClassName='menu_active'className="nav-link"to="/hom">Home</NavLink>
        </li>
              <li className="nav-item">
          <NavLink  activeClassName='menu_active'className="nav-link"to="/create/:room">Creat Room</NavLink>
        </li>
            <li className="nav-item">
          <NavLink  activeClassName='menu_active'className="nav-link"to="/abt">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName='menu_active'className="nav-link"to="/blg">Blogs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName='menu_active'className="nav-link"to="/">Log Out</NavLink>
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nv;
