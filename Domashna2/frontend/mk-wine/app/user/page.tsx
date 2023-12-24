"use client";
import Logo from "../../public/images/MKWineLogo.png";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/page";

export default function Home() {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col lg:w-[90vw]  lg:scale-75   sm:scale-50 lg:h-[95vh] mt-12 bg-black bg-opacity-50 p-4 lg:rounded-3xl md:rounded-3xl grid-cols-2 gap-5 z-10 ">
        <div className="flex justify-center items-center ">
          <div className="lg:basis-1/2 md:basis-1/2 ">
            <Image
              src={Logo}
              alt="mkwinelogo"
              className=" lg:basis-1/2 md:basis-1/2   mr-6"
            />
          </div>
          <div className="flex flex-col font-body lg:text-5xl md:text-5xl sm:text-5xl text-xl z-50  mx-auto h-5/6   bg-slate-700 bg-opacity-30 rounded-lg">
            <div className=" justify-normal m-[2.5vh] p-[1vh]">
              <label className="mt-3">Your Email:</label>
              <label> kpancevski19@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="text-center font-body text-2xl"></div>
      </div>
    </div>
  );
}
