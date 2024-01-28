"use client";
import Logo from "../public/images/MKWineLogo.png";
import Image from "next/image";
import Icon from "../public/images/Icon.png";
//import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { GlobalContext } from "./context/context";

export function Header() {
	//const router = useRouter();
	const { user } = useContext(GlobalContext);

	return (
		<div>
			<div className=" mt-2 flex flex-col justify-center  h-[100px]  items-center">
				<div className="flex justify-evenly no-wrap text-center lg:w-[55%] md:w-[55%] w-[80%]  mx-auto font-body">
					<div className="flex flex-col justify-center basis-1/5 h-inherit">
						<Link
							href="/events"
							className="basis-1/5 bg-stone-800 text-white py-4 lg:rounded-tl-xl lg:rounded-bl-xl md:rounded-tl-xl md:rounded-bl-xl rounded-tl-xl rounded-bl-xl lg:text-[32px] md:text-[28px] text-[22px]  whitespace-nowrap hover:text-red-600 md:px-3 px-3"
						>
							Nastani
						</Link>
					</div>
					<div className="flex flex-col justify-center basis-1/5 ">
						<Link
							className="basis-1/5 bg-stone-800 text-white py-4 lg:text-[32px] md:text-[28px] text-[22px]  whitespace-nowrap hover:text-red-600"
							href="/map"
						>
							Mapa
						</Link>
					</div>
					<Link href="/" className="lg:h-[80px] h-[64px] md:h-[74px] w-1/5 basis-1/5 bg-stone-800">
						<Image
							className="relative p-0 shrink-0 lg:top-[-27%] md:top-[-12%] top-[5%]  z-50"
							src={Logo}
							alt="MKWineLogo"
						/>
					</Link>
					<div className="flex flex-col justify-center basis-1/5">
						<Link
							href="/Wines"
							className="basis-1/5 bg-stone-800 text-white py-4 lg:text-[32px] md:text-[28px] text-[22px]  whitespace-nowrap hover:text-red-600"
						>
							Vina
						</Link>
					</div>
					<div className="flex flex-col justify-center basis-1/5">
						<Link
							href="about_us"
							className="basis-1/5 bg-stone-800 text-white py-4 lg:rounded-tr-xl lg:rounded-br-xl md:rounded-tr-xl md:rounded-br-xl rounded-tr-xl rounded-br-xl lg:text-[32px] md:text-[28px] text-[22px]  whitespace-nowrap hover:text-red-600 md:px-3 px-3"
						>
							Za nas
						</Link>
					</div>
				</div>
			</div>
			<div className="fixed lg:justify-end md:top-6 md:right-1 top-8 right-[-15px] p-5 rounded-full  text-white font-body text-5xl lg:w-[7vw] md:w-[10vw] w-[17vw] ">
				{user.username == "" && (
					<Link href="/login" className="shrink-0">
						<Image src={Icon} alt="Login Icon" />
					</Link>
				)}
				{user.username != "" && (
					<Link href="/user" className="shrink-0">
						<Image src={Icon} alt="Login Icon" />
					</Link>
				)}
			</div>
		</div>
	);
}
