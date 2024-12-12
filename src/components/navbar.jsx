import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
 
  const navigate=useNavigate();
  return (
    <>
      <div className="md:flex hidden file:w-full items-center justify-between font-semibold">
        <div className="items-center flex  gap-2">
          <img onClick={()=>navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
            src={assets.arrow_left}
            alt=""
          />
          <img onClick={()=>navigate(+1)} className="w-8 bg-black rounded-2xl p-2 cursor-pointer"
            src={assets.arrow_right}
            alt=""/>
        </div>
        <div className="items-center flex  gap-4">
          <p className="bg-white text-black rounded-2xl px-4 py-1 hidden    md:block cursor-pointer">Explore premium</p>
          <p className="bg-black py-1 px-3 rounded-xl text-[15px] cursor-pointer  ">
            Install App
          </p>
          <p className="bg-purple-700 text-black w-7 h-7 rounded-full flex justify-center ">A</p>
        </div>
      </div>
      <div className=" hidden sm:flex items-center gap-3">
        <p className="bg-white text-black font-semibold w-7 h-7 rounded-2xl items-center flex justify-center">All</p>
        <p className="bg-black rounded-2xl px-4py-1">Music</p>
        <p className="bg-black rounded-2xl px-4py-1" >Podcast</p>
      </div>
    </>
  );
}

export default Navbar;
