// "use client";
export default function Home() {
	return (
		<div className=" w-[100vw] h-[100vh] bg-cover fixed justify-center">
			<div className="flex justify-center w-max h-max items-center ml-80 mt-32 bg-gray-800 bg-opacity-50 p-4 rounded-2xl grid-cols-4 gap-10">
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
			</div>
			<div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-center font-body text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
