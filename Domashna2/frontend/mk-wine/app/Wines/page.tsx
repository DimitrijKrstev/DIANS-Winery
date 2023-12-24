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
		setItems(wineType);
	}
	return (
		<div>
			<div className=" fixed left-[4%] lg:top-[6%] md:top-[6%] sm:top-[6%] top-[12%]  grid grid-rows items-center h-[90vh] w-[10vw] bg-stone-800 font-body lg:text-2xl md:text-2xl sm:text-2xl text-xs gap-6 lg:p-3  p-8 rounded-3xl text-center z-50 overflow-auto hide-scrollbar">
				{wineries &&
					wineries.map((winery) => (
						<button
							key={winery.name}
							onClick={() => handleCategoryClick(winery.wines)}
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
										src={item.url}
										height={100}
										width={100}
										alt="log1"
										className=" bg-stone-800 rounded-3xl lg:p-6 lg:h-[30vh] h-[12vh] w-[10vw] lg:w-auto "
									/>
									<label className="font-body text-2xl text-center">
										{item.name}
									</label>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
