import Logo from '../../public/images/MKWineLogo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col lg:w-[80vw]  lg:scale-75   sm:scale-50 lg:h-[95vh] mt-12 bg-black bg-opacity-50 p-4 rounded-3xl grid-cols-2 gap-5 z-10 ">
				<div className="flex justify-center ">
					<div className="basis-1/2">
						<Image src={Logo} alt="mkwinelogo" className=" basis-1/2  mr-6" />
					</div>
					<div className="flex flex-col font-body text-5xl mt-16 basis-1/2 z-50 ">
						<label className="mb-3">Username</label>
						<input
							type="text"
							id="name"
							className="input-primary  "
							name="name"
						/>
						<label className="mt-3">Email</label>
						<input type="text" id="email" className="input-primary" />
						<label className="mt-5">Password</label>
						<input type="text" id="password" className="input-primary" />
						<button className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5">
							Register
						</button>
					</div>
				</div>
				<div className="text-center font-body text-2xl">
					Already have an account?{' '}
					<Link href="/login" className=" border-b-[3px]">
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}
