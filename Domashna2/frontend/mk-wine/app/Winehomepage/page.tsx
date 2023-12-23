// "use client";
import Vinarija1 from '../../public/images/tikves-posledno.jpg';

import Image from 'next/image';

export default function Home() {
	return (
		<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
			{/* <div className="w-full h-[70vh] bg-black bg-opacity-50 flex-row">
					<div className="flex justify-center basis-3/4 ">
						<h1>Kamnik</h1>
						<br></br>
						<p className="break-words">
							Bitola offers you absolute zero stress and a spirit of well-being.
							This is a warm invite to feel the mixture of the East and the
							West, to reinvent your term of taste due to the culinary delights
							that city restaurants offer, and to be part of a very typical and
							vibrant local lifestyle.
						</p>
					</div>
					<div className="flex justify-center w-[15%] basis-1/4">
						<Image className=" basis-1/4 w-[20%]" src={Vinarija1} alt="1" />
					</div>
				</div> */}
			<div className="w-full bg-black bg-opacity-50  flex  p-6 flex-row ">
				<div className="flex flex-row w-[70vw] mx-auto ">
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
						<br />
						<button className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5">
							View available wines
						</button>
					</div>
					<div className="flex basis-1/4 flex-col bg-stone-800 rounded-xl p-4">
						<p className="mb-4">2 Reviews</p>
						<textarea
							placeholder="Enter your review"
							className="h-[80%] rounded-xl p-2 text-black "
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
