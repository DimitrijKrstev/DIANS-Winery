'use client';
import Vinarija1 from '../../public/images/tikves-posledno.jpg';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getWineries } from '../../util/wineItemsutil';
import { useState, useEffect, useContext } from 'react';
import { AddComment } from '../../util/util';
import { LikeWine } from '../../util/util';
import { GlobalContext } from '../../context/page';

export default function Home({ params }) {
	const { user, setUser } = useContext(GlobalContext);
	const id = params.id;
	const router = useRouter();
	const [wineries, setWinries] = useState([]);
	const [selectedWine, setWine] = useState();
	const [error, setError] = useState();
	const [comment, setComment] = useState();
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);

	const handlesubmit = (e) => {
		setComment(e.target[0].value);
		console.log(e.target[0].value);
		console.log(comment);
		console.log(selectedWine);
		AddComment(id, e.target[0].value);
		getWineries(setWinries, setError);
	};
	const handleLikes = () => {
		console.log('ID ' + user.id);
		console.log('WINE ID: ' + selectedWine.id);
		LikeWine(user.id, selectedWine.id, setUser);
	};
	useEffect(() => {
		getWineries(setWinries, setError);
	}, []);
	useEffect(() => {
		console.log(wineries);
		setWine(wineries.filter((item) => item.id == id)[0]);
		console.log('WINEE');
		console.log(selectedWine);
	}, [wineries]);

	return (
		<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
			<div className="w-full h-[65vh] bg-black bg-opacity-50  flex  p-6 flex-row ">
				{selectedWine && (
					<div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-[70vw] mx-auto ">
						<div className=" flex basis-3/4 justify-center  flex-col">
							<h1 className="text-shadowed-white text-6xl font-bold mb-3 font-body">
								{selectedWine.name}
							</h1>
							<br />
							<p className="text-shadowed-white  " id="desc">
								{selectedWine.description}
							</p>
							<label htmlFor="num" className="mt-5">
								Contact:
							</label>
							<p className="text-shadowed-white text-sm   " id="num">
								{selectedWine.phone}
							</p>
							<br />
							<button
								className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5"
								onClick={handleLikes}
							>
								Like
							</button>
						</div>
						<div className="flex lg:basis-1/4 md:basis-1/4 lg:h-auto md:h-auto sm:h-auto h-[25vh] sm:basis-1/4 lg:w-auto md:w-auto sm:w-auto w-[70%] lg:mt-0  md:mt-0 sm:mt-0 mt-3  flex-col bg-stone-800 rounded-xl p-4">
							<h1>Komentari:</h1>
							<div className="overflow-x-auto hide-scrollbar bg-black bg-opacity-50 mb-4 mt-4 p-2 rounded-lg text-left lg:h-[14vh] md:h-[14vh] sm:h-[14vh] h-[6vh]  whitespace-nowrap">
								{selectedWine.commentList.map((comm) => (
									<p key={comm.id} className="mb-4 bg-stone-800 rounded-lg p-2">
										{comm.text}
									</p>
								))}
							</div>
							<form onSubmit={handlesubmit}>
								<textarea
									placeholder="Enter your review"
									className="lg:h-[40%] md:h-[40%] sm:h-[40%]  h-[20%] rounded-xl p-2 text-black "
								></textarea>
								<button className="bg-stone-600 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-3">
									Save
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
