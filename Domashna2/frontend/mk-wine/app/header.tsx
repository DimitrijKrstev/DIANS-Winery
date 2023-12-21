// "use client";
import Logo from '../public/images/MKWineLogo.png';
import Image from 'next/image';
import Icon from '../public/images/Icon.png';
//import { useRouter } from "next/navigation";
import Link from 'next/link';

export function Header() {
	//const router = useRouter();

	return (
		<div>
			<div className="flex justify-center">
				<div className="  flex justify-center lg:w-[58vw] h-[13vh] items-center bg-stone-800 p-6 mt-8 ml-6 mr-6 rounded-3xl overflow-hidden sm:gap-4 lg:gap-12 md:gap-6 font-body lg:text-5xl md:text-2xl whitespace-nowrap">
					<div className="flex justify-between lg:gap-56 md:gap-44 sm:gap-32">
						<div className="flex justify-between gap-10 items-center ">
							<Link
								href="/events"
								className=" flex items-center flex-shrink hover:text-red-600"
							>
								Nastani
							</Link>
							<Link
								className=" flex items-center flex-shrink hover:text-red-600"
								href="/map"
							>
								Mapa
							</Link>
						</div>
						<div className=" flex justify-between gap-10 items-center">
							<Link
								href="/Wines"
								className=" flex items-center flex-shrink hover:text-red-600 "
							>
								Vina
							</Link>
							<Link
								href="about_us"
								className="whitespace-nowrap flex items-center flex-shrink hover:text-red-600"
							>
								Za nas
							</Link>
						</div>
					</div>
				</div>
				<Link
					href="/"
					className="fixed justify-center w-[12%] items-center top-0 lg:ml-11  md:ml-7 sm:ml-5 z-50"
				>
					<Image src={Logo} alt="MKWineLogo" />
				</Link>
			</div>
			<div className="fixed lg:justify-end md:top-9 md:right-1 p-5 rounded-full  text-white font-body text-5xl w-[7vw] ">
				<Link href="/login" className="shrink-0">
					<Image src={Icon} alt="Login Icon" />
				</Link>
			</div>
		</div>
	);
}
