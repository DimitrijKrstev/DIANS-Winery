import Image from 'next/image';
import Logo from '../../public/images/grupna.jpg';

export default function About() {
	return (
		<div className="flex justify-center items-center h-screen font-body">
			<div className=" flex flex-col justify-center items-center bg-black bg-opacity-50 gap-10 rounded-3xl p-4 lg:w-[65vw] md:w-[65vw] sm:w-[65vw] w-full h-full">
				<div className=" flex lg:flex-row md:flex-row sm:flex-col gap-5  items-center ">
					<Image
						src={Logo}
						alt="log"
						className=" lg:w-[18vw] lg:h-[13vw] md:w-[18vw] md:h-[13vw] sm:w-[18vw] sm:h-[13vw] w-[50vw] h-[50vw] "
					/>
					<div className="flex flex-col bg-stone-800 bg-opacity-50 p-6 py-6 rounded-3xl w-max  lg:text-2xl md:text-2xl sm:text-2xl text-sm h-[30vh] justify-center items-center text-center">
						<h2>Nie sme tim od 5 studenti</h2>
						-Petar Kalinovski <br></br> -Dimitrij Krstev <br></br> -Kristijan
						Panchevski <br></br> -Ivan Ristovski <br></br> -Vasil Strezov
					</div>
				</div>
			</div>
		</div>
	);
}
