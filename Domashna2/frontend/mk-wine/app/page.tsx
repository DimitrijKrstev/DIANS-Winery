// "use client";

import { Header } from './header';
export default function Home() {
	return (
		<div>
			<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
				<div className="flex justify-center w-[60%] h-[40%] items-center  bg-black bg-opacity-50 p-4 rounded-2xl lg:flex-row md:flex-row sm:flex-row gap-10">
					<div className="bg-stone-800 w-[13vw] h-[35vh] rounded-3xl "></div>
					<div className="bg-stone-800 w-[13vw] h-[35vh] rounded-3xl"></div>
					<div className="bg-stone-800 w-[13vw] h-[35vh]  rounded-3xl"></div>
					<div className="bg-stone-800 w-[13vw] h-[35vh]  rounded-3xl"></div>
				</div>
			</div>
			<div className="fixed bottom-0 w-full text-center font-body sm:text-lg md:text-xl lg:text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
