// "use client";

import { Header } from './header';
export default function Home() {
	return (
		<div>
			<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
				<div className="flex justify-center w-max h-max items-center  bg-gray-800 bg-opacity-50 p-4 rounded-2xl grid-cols-4 gap-10">
					<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
					<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
					<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
					<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				</div>
			</div>
			<div className="fixed bottom-0 w-full text-center font-body text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
