import Logo from '../../public/images/MKWineLogo.png';
import Image from 'next/image';

export default function Login() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col lg:w-[80vw]  lg:scale-75   sm:scale-50 lg:h-[95vh] mt-12 bg-gray-800 bg-opacity-50 p-4 rounded-3xl grid-cols-2 gap-5">
				<div className="flex justify-center">
					<Image
						src={Logo}
						alt="mkwinelogo"
						className="lg:w-[40vw]  md:w-[40vw]  sm:w-[50vw]  mr-6"
					/>
					<div className="flex flex-col font-body text-5xl mt-16">
						<label className="mb-3">Username</label>
						<input
							type="text"
							id="name"
							className="input-primary"
							name="name"
						/>
						<label className="mt-3">Email</label>
						<input type="text" id="email" className="input-primary" />
						<label className="mt-5">Password</label>
						<input type="text" id="password" className="input-primary" />
					</div>
				</div>
				<div className="text-center font-body text-2xl">
					Already have an account? Sign in
				</div>
			</div>
		</div>
	);
}
