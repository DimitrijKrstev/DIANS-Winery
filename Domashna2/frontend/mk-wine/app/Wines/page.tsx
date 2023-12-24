'use client';
import Image from 'next/image';
import Logo from '../../public/images/vino1.png';
import Logo2 from '../../public/images/vino2.png';
import Logo3 from '../../public/images/vino3.png';
import Logo4 from '../../public/images/vino4.png';
import Logo5 from '../../public/images/vino5.png';
import Logo6 from '../../public/images/vino6.png';
import Logo7 from '../../public/images/vino7.png';
import Logo8 from '../../public/images/vino8.png';
import { getWines } from '../util/wineItemsutil';
import { getWineries } from '../util/wineItemsutil';

import { useContext, useState, useEffect } from 'react';

export default function Wines() {
	const [items, setItems] = useState([]);
	const [wines, setWines] = useState([]);
	const [wineries, setWinries] = useState([]);
	const [error, setError] = useState();
	useEffect(() => {
		getWines(setWines, setError);
	}, []);
	useEffect(() => {
		getWineries(setWinries, setError);
	}, []);

	useEffect(() => {
		setItems(wines);
	}, [wines]);
	function Searching(e) {
		setItems(
			wines.filter((vino) =>
				vino.name.toUpperCase().includes(e.target.value.toUpperCase())
			)
		);
	}

	function handleCategoryClick(wineType) {
		setItems(wines.filter((win) => vino.name.includes(wineType)));
	}
	return (
		<div>
			<div className=" fixed left-[4%] lg:top-[6%] md:top-[6%] sm:top-[6%] top-[12%]  justify-center grid grid-rows-3 items-center h-fit w-[10vw] bg-stone-800 font-body lg:text-2xl md:text-2xl sm:text-2xl text-xs gap-6 lg:p-3  p-8 rounded-3xl text-center z-50 overflow-auto hide-scrollbar">
				{wineries &&
					wineries.map((winery) => (
						<button
							key={winery.name}
							onClick={() => handleCategoryClick(winery.name)}
							className="hover:text-red-600 bg-black bg-opacity-50 p-2 rounded-xl"
						>
							{winery.name}
						</button>
					))}
			</div>

			<div className="flex justify-center  items-center h-screen ">
				<div className=" relative grid grid-rows-2  justify-center items-center  bg-black bg-opacity-50 lg:gap-24  mx-auto  rounded-3xl p-4 w-[60%]  h-full flex-wrap overflow-y-auto hide-scrollbar">
					<div className="w-full">
						<input
							type="text"
							className="w-full h-10 mt-16 text-center text-black rounded-xl "
							placeholder="Choose your wine"
							onChange={Searching}
						/>
					</div>
					<div className="grid grid-cols-5 gap-12 justify-center items-center  overflow-y-auto hide-scrollbar ">
						{items &&
							items.map((item) => (
								<div
									key={item.name}
									className="flex flex-col text-center mx-auto"
								>
									<Image
										src={Logo}
										alt="log1"
										className=" bg-stone-800 rounded-3xl lg:p-6 lg:h-[30vh] h-[12vh] w-[10vw] lg:w-auto "
									/>
									<label className="font-body text-2xl text-center">
										tga za jug
									</label>
								</div>
							))}

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo2}
								alt="log2"
								className=" bg-stone-800 rounded-3xl lg:h-[30vh]  h-[12vh] w-[10vw] lg:w-auto  lg:p-6"
							/>
							<label className="font-body text-2xl text-center ">
								Aleksandrija
							</label>
						</div>

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo3}
								alt="log3"
								className=" bg-stone-800 rounded-3xl lg:p-6  lg:h-[30vh] w-[10vw] lg:w-auto "
							/>
							<label className="font-body text-2xl text-center">vranec</label>
						</div>

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo4}
								alt="log4"
								className=" bg-stone-800 rounded-3xl lg:h-[30vh] w-[10vw] lg:w-auto  lg:p-6"
							/>
							<label className="font-body text-2xl text-center">
								bela voda
							</label>
						</div>

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo5}
								alt="log5"
								className=" bg-stone-800 rounded-3xl lg:h-[30vh] w-[10vw] lg:w-auto lg:p-6"
							/>
							<label className="font-body text-2xl text-center">berovo</label>
						</div>
						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo6}
								alt="log6"
								className=" bg-stone-800 rounded-3xl  lg:h-[30vh] w-[10vw] lg:w-auto  lg:p-6"
							/>
							<label className="font-body text-2xl text-center">vranec</label>
						</div>

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo7}
								alt="log7"
								className=" bg-stone-800 rounded-3xl  lg:h-[30vh] w-[10vw] lg:w-auto  lg:p-6"
							/>
							<label className="font-body text-2xl text-center ">
								bela voda
							</label>
						</div>

						<div className=" flex flex-col text-center mx-auto">
							<Image
								src={Logo8}
								alt="log8"
								className=" bg-stone-800 rounded-3xl lg:h-[30vh] w-[10vw] lg:w-auto lg:p-6"
							/>
							<label className="font-body text-2xl text-center">merlot</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
