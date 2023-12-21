import Image from 'next/image';
import Logo from '../../public/images/vino1.png';
import Logo2 from '../../public/images/vino2.png';
import Logo3 from '../../public/images/vino3.png';
import Logo4 from '../../public/images/vino4.png';
import Logo5 from '../../public/images/vino5.png';
import Logo6 from '../../public/images/vino6.png';
import Logo7 from '../../public/images/vino7.png';
import Logo8 from '../../public/images/vino8.png';

export default function Wines() {
	return (
		<div className="flex justify-center  items-center h-screen ">
			<div className=" flex flex-row bg-black bg-opacity-50 gap-44 rounded-3xl p-4 w-[65vw] h-full">
				<div className="flex justify-center  flex-col gap-9 mt-24">
					<div className="flex justify-center flex-row gap-20">
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo}
								alt="log1"
								className=" bg-stone-800 rounded-3xl p-6"
							/>
							<label className="font-body text-2xl text-center">
								tga za jug
							</label>
						</div>

						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo2}
								alt="log2"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl ">Aleksandrija</label>
						</div>
					</div>
					<div className="flex justify-center flex-row gap-20">
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo3}
								alt="log3"
								className=" bg-stone-800 rounded-3xl p-6"
							/>
							<label className="font-body text-2xl">vranec</label>
						</div>
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo4}
								alt="log4"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl">bela voda</label>
						</div>
					</div>
				</div>
				<div className="flex justify-center  flex-col gap-5  mt-24">
					<div className="flex justify-center flex-row gap-20">
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo5}
								alt="log5"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl">berovo</label>
						</div>
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo6}
								alt="log6"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl">vranec</label>
						</div>
					</div>
					<div className="flex justify-center flex-row gap-20">
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo7}
								alt="log7"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl">bela voda</label>
						</div>
						<div className="flex justify-center  flex-col gap-5">
							<Image
								src={Logo8}
								alt="log8"
								className=" bg-stone-800 rounded-3xl  p-6"
							/>
							<label className="font-body text-2xl">merlot</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
