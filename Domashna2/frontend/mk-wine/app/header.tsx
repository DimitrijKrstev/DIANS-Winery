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
			<div className=" mt-2 flex flex-col justify-center  h-[100px]  items-center">
				<div className="flex justify-evenly no-wrap text-center lg:w-[55%]  mx-auto font-body">
					<div className="flex flex-col justify-center basis-1/5 h-inherit">
						<Link
							href="/events"
							className="basis-1/5 bg-stone-800 text-white py-4 lg:rounded-tl-xl lg:rounded-bl-xl text-[32px] whitespace-nowrap hover:text-red-600"
						>
							Nastani
						</Link>
					</div>
					<div className="flex flex-col justify-center basis-1/5 ">
						<Link
							className="basis-1/5 bg-stone-800 text-white py-4 text-[32px] whitespace-nowrap hover:text-red-600"
							href="/map"
						>
							Mapa
						</Link>
					</div>
					<Link href="/" className="h-[80px] w-1/5 basis-1/5 bg-stone-800">
						<Image
							className="relative p-0 shrink-0 top-[-27%]"
							src={Logo}
							alt="MKWineLogo"
						/>
					</Link>
					<div className="flex flex-col justify-center basis-1/5">
						<Link
							href="/Wines"
							className="basis-1/5 bg-stone-800 text-white py-4 text-[32px] whitespace-nowrap hover:text-red-600"
						>
							Vina
						</Link>
					</div>
					<div className="flex flex-col justify-center basis-1/5">
						<Link
							href="about_us"
							className="basis-1/5 bg-stone-800 text-white py-4 rounded-tr-xl lg:rounded-br-xl text-[32px] whitespace-nowrap hover:text-red-600"
						>
							Za nas
						</Link>
					</div>
				</div>
			</div>
			<div className="fixed lg:justify-end md:top-9 md:right-1 p-5 rounded-full  text-white font-body text-5xl w-[7vw] ">
				<Link href="/login" className="shrink-0">
					<Image src={Icon} alt="Login Icon" />
				</Link>
			</div>
		</div>
	);
}
