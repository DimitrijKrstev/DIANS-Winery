import Image from 'next/image';
import Logo from '../../public/images/vinoskop.png';
import Logo2 from '../../public/images/ogridnastan.png';

export default function Events() {
	return (
		<div className="flex justify-center h-screen font-body">
			<div className=" flex flex-col justify-center items-center bg-black bg-opacity-50 gap-10 rounded-3xl p-4 lg:w-[65vw] md:w-[65vw] sm:w-[65vw] w-full h-full">
				<div className=" flex flex-row gap-5  items-center ">
					<Image src={Logo} alt="log" className=" w-[20vw] h-[13vw] " />
					<div className="flex flex-col bg-stone-800 bg-opacity-50 p-2 py-6 rounded-3xl w-max lg:text-4xl md:text-3xl sm:text-3xl text-2xl h-[13vw] justify-center items-center text-center">
						<h2 className="text-center">Vinoskop Skopje 2023</h2>
						<p className="text-sm">12-15.10.2023</p>
					</div>
				</div>
				<div className=" flex flex-row gap-5 items-center">
					<Image src={Logo2} alt="log2" className=" w-[20vw] h-[13vw]" />
					<div className="flex flex-col bg-stone-800 bg-opacity-50 p-2  py-6 rounded-3xl w-max lg:text-4xl md:text-3xl sm:text-3xl text-2xl h-[13vw] justify-center items-center text-center">
						<h2 className="text-center">Ohrid Wine Fest 2023</h2>
						<p className="text-sm">22-24.06.2023</p>
					</div>
				</div>
			</div>
		</div>
	);
}
