'use client';
import Vinarija1 from '../public/images/tikves-posledno.jpg';
import Vinarija2 from '../public/images/skovin-posledno.jpg';
import Vinarija3 from '../public/images/stobi-najnovo.jpg';
import Vinarija4 from '../public/images/povardarie posledno.jpg';
import Vinarija5 from '../public/images/monastery-wine posledno.jpg';
import Vinarija6 from '../public/images/kartal-novo.jpg';
import Vinarija7 from '../public/images/kamnik-novo.jpg';
import Vinarija8 from '../public/images/grkov-najnovo.png';
import Vinarija9 from '../public/images/Z-novo.jpg';
import Vinarija10 from '../public/images/bovin-novo.jpg';
import Vinarija11 from '../public/images/popovakula-novo.jpg';
import Vinarija12 from '../public/images/chateau sopot novo.jpg';
import Image from 'next/image';
import { getWineries } from './util/wineItemsutil';

import { useContext, useState, useEffect } from 'react';

import { Header } from './header';
import Link from 'next/link';
export default function Home() {
	const [wineries, setWinries] = useState([]);
	const [error, setError] = useState();
	useEffect(() => {
		getWineries(setWinries, setError);
	}, []);
	return (
		<div>
			<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center flex-col">
				<h1 className="text-center text-5xl font-body">Nasi vinarii</h1>
				<div className="flex lg:w-[63%] lg:h-[40%] md:w-[45%] md:h-[45%] sm:w-[80vw] sm:h-[35vh]  w-[100%] h-[40%] items-center  bg-black bg-opacity-50  p-4  md:rounded-2xl lg:flex-nowrap sm:flex-nowrap md:flex-nowrap lg:flex-row md:flex-row flex-nowrap lg:gap-10 md:gap-10 sm:gap-6 gap-6 overflow-x-auto hide-scrollbar">
					{wineries &&
						wineries.map((item) => (
							<Link
								key={item.id}
								id="imghomepage"
								href={`/Winehomepage/${item.id}`}
								className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh]  w-[60vw] h-inherit rounded-3xl shrink-0 "
							>
								<Image
									className=""
									src={item.url}
									height={200}
									width={200}
									alt="1"
								/>
							</Link>
						))}
				</div>
			</div>
			<div className="fixed bottom-0 w-full text-center font-body sm:text-lg md:text-xl lg:text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
