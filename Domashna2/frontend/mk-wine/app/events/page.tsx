import Image from 'next/image';
import Logo from '../../public/images/vinoskop.jpg';
import Logo2 from '../../public/images/winefestohrid.jpg';

export default function Wines() {
	return (
		<div className="flex justify-center  items-center font-body">
			<div className=" flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 gap-10 rounded-3xl p-4 w-max">
				<div className=" flex flex-row gap-5 ">
					<Image src={Logo} alt="log" className=" w-[20vw] h-[20%] " />
					<div className="flex flex-col bg-black bg-opacity-50 p-2 rounded-3xl w-max text-4xl h-max">
						<h2>Vinoskop Skopje 2023</h2>
						<p>12-15.10.2023</p>
					</div>
				</div>
				<div className=" flex flex-row gap-5">
					<Image src={Logo2} alt="log2" className="w-[20%] h-[20%]" />
					<div className="flex flex-col bg-black bg-opacity-50 p-2 rounded-3xl w-max text-4xl h-max">
						<h2>Ohrid Wine Fest 2023</h2>
						<p>22-24.06.2023</p>
					</div>
				</div>
			</div>
		</div>
	);
}
