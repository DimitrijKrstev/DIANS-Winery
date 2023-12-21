import Image from 'next/image';
import Logo from '../../public/images/vinoskop.png';

export default function About() {
	return (
		<div className="flex justify-center items-center h-screen font-body">
			<div className=" flex flex-col justify-center items-center bg-black bg-opacity-50 gap-10 rounded-3xl p-4 w-[65vw] h-full">
				<div className=" flex flex-row gap-5  items-center ">
					<Image src={Logo} alt="log" className=" w-[25vw] h-[13vw] " />
					<div className="flex flex-col bg-stone-800 bg-opacity-50 p-2 py-6 rounded-3xl w-max text-4xl h-max justify-center items-center">
						<h2>Nie sme tim od 5 studenti</h2>
						<p>-Petar Kalinovski</p>
						<p>-Dimitrij Krstev</p>
						<p>-Kristijan Panchevski</p>
						<p>-Ivan Ristovski</p>
						<p>-Vasil Strezov</p>
					</div>
				</div>
			</div>
		</div>
	);
}
