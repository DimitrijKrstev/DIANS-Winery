import Logo from './images/MKWineLogo.png';
import Image from 'next/image';

export function Login() {
	return (
		<div className="flex justify-center">
			<div className="flex justify-center w-[70%] h-max  mt-32 bg-gray-950 bg-opacity-50 p-4 rounded-3xl grid-cols-2 gap-10">
				<Image src={Logo} alt="mkwinelogo" className="  w-[45%]  " />
				<div className=" font-body text-5xl mt-16 gap-10">
					<label className="mb-3">Username</label>
					<input
						type="text"
						id="name"
						className="rounded-3xl mb-3 h-[10%]"
						name="name"
					/>
					<label className="mt-3">Email</label>
					<input type="text" id="email" className="rounded-3xl mb-3 h-[10%]" />
					<label className="mt-5">Password</label>
					<input type="text" id="password" className="rounded-3xl h-[10%]" />
				</div>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-36 flex justify-center font-body text-2xl">
					Do you already have an account? Sing in
				</div>
			</div>
		</div>
	);
}
