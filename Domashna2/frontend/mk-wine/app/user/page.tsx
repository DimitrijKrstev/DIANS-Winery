"use client";
import Logo from "../../public/images/Icon.png";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../context/page";

export default function Home() {
  const { user, setUser } = useContext(GlobalContext);
  console.log(user.likedWineries);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-full  lg:scale-75   sm:scale-50 lg:h-[65vh] md:h-[65vh] sm:h-[65vh] mt-12 bg-black bg-opacity-50 p-4 lg:rounded-3xl md:rounded-3xl grid-cols-2 gap-5 z-10 ">
        <div className="flex justify-center items-center ">
          <div className="lg:basis-1/2 md:basis-1/2 flex-col ">
            <Image
              src={Logo}
              alt="mkwinelogo"
              className=" lg:basis-1/2 md:basis-1/2   mr-6"
            />
            <h1 className="text-center text-2xl">{user.username}</h1>
          </div>
          <div className="flex flex-col font-body lg:text-5xl md:text-5xl sm:text-5xl text-lg z-50  mx-auto lg:w-[46vw] w-full lg:h-[57vh] h-5/6   bg-slate-700 bg-opacity-30 rounded-lg ">
            <div className=" justify-normal m-[2.5vh] p-[1vh]">
              <label className="mt-3">Vashiot username:</label>
              <label> {user.username}</label>
            </div>
            <div className=" justify-normal m-[2.5vh] p-[1vh]">
              <label className="mt-3">Vashite vinarii:</label>
              {user.likedWineries.map((winery: String, index: number) => (
                <div key={index} className=" text-3xl">
                  {index + 1}. {winery}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center font-body text-2xl"></div>
      </div>
    </div>
  );
}
