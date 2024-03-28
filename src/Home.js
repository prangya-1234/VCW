import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import conf from "../src/assets/conf.jpg";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className=" ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative h-screen ">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={conf} className="object-cover  w-full h-full" />
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-white font-bold pt-12">
            Video Conferencing Website
            </h1>
            <p className="text-[26px] text-white  -mt-2">Welcome To Our Website</p>
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
