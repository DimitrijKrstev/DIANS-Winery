import Logo from './images/MKWineLogo.png';
import Image from 'next/image';
import Icon from './images/Icon.png';
import { useNavigate } from 'react-router-dom';

export function Homepage() {
	const nav = useNavigate();
	const handlelogin = () => {
		nav('/login');
	};
	return (
		<div className=" w-[100vw] h-[100vh] bg-cover fixed justify-center">
			<div className="flex justify-center">
				<div className="flex justify-center bg-stone-800 p-6 mt-8 ml-6 mr-6 rounded-3xl overflow-hidden gap-12 font-body text-5xl">
					<button>Nastani</button>
					<button className="mr-20">Mapa</button>
					<button className="ml-20">Vina</button>
					<button>Za nas</button>
				</div>
				<Image
					src={Logo}
					alt="mkwinelogo"
					className="fixed justify-center w-[15%] ml-11"
				/>
			</div>
			<div className="fixed top-11 right-20 p-5 rounded-full  text-white font-body text-5xl w-[7%] mr-40">
				<Image
					src={Icon}
					alt="iconche"
					className="w-max"
					onClick={handlelogin}
				/>
			</div>

			<div className="flex justify-center w-max h-max items-center ml-80 mt-32 bg-gray-800 bg-opacity-50 p-4 rounded-2xl grid-cols-4 gap-10">
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
				<div className="bg-stone-800 w-48 h-64 rounded-3xl"></div>
			</div>
			<div className="flex justify-center font-body text-2xl mt-40">
				EST. 2023
			</div>
		</div>
	);
}
