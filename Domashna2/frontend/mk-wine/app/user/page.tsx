'use client';
import Logo from '../../public/images/Icon.png';
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '../context/page';
import { useRouter } from 'next/router';
import { DislikeWine } from '../util/util';

export default function Home() {
	const router = require('next/router');
	const { user, setUser } = useContext(GlobalContext);
	console.log(user.likedWineries);
	console.log(user);
	return (
		<div className="flex justify-center items-center h-screen">
			{user && (
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
								{user &&
									user.likedWineries &&
									user.likedWineries.map((winery, index: number) => (
										<div key={index} className=" text-3xl">
											{index + 1}. {winery.name}{' '}
											<button
												onClick={() => {
													DislikeWine(user.id, winery.id, setUser);
												}}
												className="text-clip w-max h-1/4 text-slate-50 text-xl text-center font-Rubik bg-red-600 bg-opacity-70 rounded-[25px]  p-2  mt-8 mr-[4vh]"
											>
												Remove
											</button>
										</div>
									))}
							</div>
						</div>
						<button
							onClick={() => {
								setUser({ email: '', password: '' });
								window.location.href = 'http://localhost:3000';
							}}
							className="text-clip w-max text-slate-50 text-xl text-center font-Rubik bg-red-600 rounded-[25px]  p-2  mt-8"
						>
							Log out
						</button>
					</div>

					<div className="text-center font-body text-2xl"></div>
				</div>
			)}
		</div>
	);
}
