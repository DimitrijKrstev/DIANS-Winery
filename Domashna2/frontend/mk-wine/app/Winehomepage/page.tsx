// "use client";
import Vinarija1 from '../../public/images/tikves-posledno.jpg';

import Image from 'next/image';

export default function Home() {
	return (
		<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
			<div className="w-full h-[65vh] bg-black bg-opacity-50  flex  p-6 flex-row ">
				<div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-[70vw] mx-auto ">
					<div className=" flex basis-3/4 justify-center  flex-col">
						<h1 className="text-shadowed-white text-6xl font-bold mb-3 font-body">
							Kamnik
						</h1>
						<br />
						<p className="text-shadowed-white  " id="desc">
							Bitola offers you absolute zero stress and a spirit of well-being.
							This is a warm invite to feel the mixture of the East and the
							West, to reinvent your term of taste due to the culinary delights
							that city restaurants offer, and to be part of a very typical
						</p>
						<label htmlFor="num" className="mt-5">
							Contact:
						</label>
						<p className="text-shadowed-white text-sm   " id="num">
							07834234234
						</p>
						<br />
						<button className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5">
							View available wines
						</button>
					</div>
					<div className="flex lg:basis-1/4 md:basis-1/4 lg:h-auto md:h-auto sm:h-auto h-[25vh] sm:basis-1/4 lg:w-auto md:w-auto sm:w-auto w-[70%] lg:mt-0  md:mt-0 sm:mt-0 mt-3  flex-col bg-stone-800 rounded-xl p-4">
						<h1>Komentari:</h1>
						<div className="overflow-x-auto hide-scrollbar bg-black bg-opacity-50 mb-4 mt-4 p-2 rounded-lg text-left lg:h-[14vh] md:h-[14vh] sm:h-[14vh] h-[6vh]  whitespace-nowrap">
							<p className="mb-4 bg-stone-800 rounded-lg p-2">2 Reviews</p>
							<p className="mb-4 bg-stone-800 rounded-lg p-2">2 Reviews</p>

							<p className="mb-4 bg-stone-800 rounded-lg p-2">2 Reviews</p>
							<p className="mb-4 bg-stone-800 rounded-lg p-2">2 Reviews</p>
						</div>
						<textarea
							placeholder="Enter your review"
							className="lg:h-[40%] md:h-[40%] sm:h-[40%]  h-[20%] rounded-xl p-2 text-black "
						></textarea>
						<button className="bg-stone-600 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-3">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
