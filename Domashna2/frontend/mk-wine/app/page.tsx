// "use client";
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

import { Header } from './header';
import Link from 'next/link';
export default function Home() {
	return (
		<div>
			<div className=" w-[100vw] h-[100vh] bg-cover flex justify-center items-center">
				<div className="flex lg:w-[63%] lg:h-[40%] md:w-[45%] md:h-[45%] sm:w-[80vw] sm:h-[35vh]  w-[100%] h-[40%] items-center  bg-black bg-opacity-50  p-4  md:rounded-2xl lg:flex-nowrap sm:flex-nowrap md:flex-nowrap lg:flex-row md:flex-row flex-nowrap lg:gap-10 md:gap-10 sm:gap-6 gap-6 overflow-x-auto hide-scrollbar">
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh]  w-[60vw] h-inherit rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija1} alt="1" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija2} alt="2" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija3} alt="3" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija4} alt="4" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija5} alt="5" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija6} alt="6" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija7} alt="7" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija8} alt="8" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija9} alt="9" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija10} alt="10" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija11} alt="11" />
					</Link>
					<Link
						id="imghomepage"
						href="Winehomepage"
						className=" lg:w-[13vw] lg:h-[34vh] md:w-[15vw] md:h-[40vh] sm:w-[23vw] sm:h-[30vh] w-[60vw] h-inherit  rounded-3xl shrink-0 "
					>
						<Image className="" src={Vinarija12} alt="12" />
					</Link>
				</div>
			</div>
			<div className="fixed bottom-0 w-full text-center font-body sm:text-lg md:text-xl lg:text-2xl">
				EST. 2023
			</div>
		</div>
	);
}
