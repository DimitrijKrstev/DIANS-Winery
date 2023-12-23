// "use client";
import Vinarija1 from '../public/images/chateau sopot.jpg';
import Vinarija2 from '../public/images/popovakula.png';
import Vinarija3 from '../public/images/kartal winery.png';
import Vinarija4 from '../public/images/skovin.jpg';
import Image from 'next/image';

import { Header } from './header';
export default function Home() {
	return (
		<div>
			<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
				<div className="flex justify-center w-[60%] h-[40%] items-center  bg-black bg-opacity-50 p-4 rounded-2xl lg:flex-row md:flex-row sm:flex-row gap-10 overflow-x-auto hide-scrollbar">
					<div className="bg-stone-800 w-[13vw] h-[35vh] rounded-3xl shrink-0 ">
						<Image className="" src={Vinarija1} alt="1" />
					</div>
					<div className="bg-stone-800 w-[13vw] h-[35vh] rounded-3xl shrink-0 ">
						<Image className="" src={Vinarija2} alt="2" />
					</div>
					<div className="bg-stone-800 w-[13vw] h-[35vh]  rounded-3xl shrink-0 ">
						<Image className="" src={Vinarija3} alt="3" />
					</div>
					<div className="bg-stone-800 w-[13vw] h-[35vh]  rounded-3xl shrink-0 ">
						<Image className="" src={Vinarija4} alt="4" />
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 w-full text-center font-body sm:text-lg md:text-xl lg:text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
