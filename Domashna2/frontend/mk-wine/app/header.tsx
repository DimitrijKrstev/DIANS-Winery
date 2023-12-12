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
				<div className="flex justify-center bg-stone-800 p-6 mt-8 ml-6 mr-6 rounded-3xl overflow-hidden gap-12 font-body text-5xl">
					<Link href="/events">Nastani</Link>
					<Link className="mr-20" href="/map">
						Mapa
					</Link>
					<Link href="/Wines" className="ml-20">
						Vina
					</Link>
					<button>Za nas</button>
				</div>
				<Link href="/" className="fixed justify-center w-[12%] ml-11 z-50">
					<Image src={Logo} alt="MKWineLogo" />
				</Link>
			</div>
			<div className="fixed top-11 right-20 p-5 rounded-full  text-white font-body text-5xl w-[7%] mr-40">
				<Link href="/login">
					<Image src={Icon} alt="Login Icon" className="w-max" />
				</Link>
			</div>
		</div>
	);
}
