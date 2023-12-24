'use client';
import Logo from '../../public/images/MKWineLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { RegisterUser } from '../util/util';
import { GlobalContext } from '../context/page';

export default function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [error, setError] = useState();
	const { user, setUser } = useContext(GlobalContext);
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col lg:w-[80vw]  lg:scale-75   sm:scale-50 lg:h-[95vh] mt-12 bg-black bg-opacity-50 p-4 lg:rounded-3xl md:rounded-3xl sm:rounded-3xl grid-cols-2 gap-5 z-10 ">
				<div className="flex justify-center items-center ">
					<div className="basis-1/2">
						<Image src={Logo} alt="mkwinelogo" className=" basis-1/2  mr-6" />
					</div>
					<div className="flex flex-col font-body lg:text-5xl md:text-5xl sm:text-5xl text-xl mt-16 basis-1/2 z-50 ">
						<label className="mb-3">Username</label>
						<input
							type="text"
							id="name"
							onChange={(e) => setUsername(e.target.value)}
							className="input-primary  "
							name="name"
						/>
						<label className="mt-3">Email</label>
						<input
							type="text"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							className="input-primary"
						/>
						<label className="mt-5">Password</label>
						<input
							type="text"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							className="input-primary"
						/>
						<button
							className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5"
							onClick={() =>
								RegisterUser(username, email, password, setUser, setError)
							}
						>
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
				<p>{user.username}</p>
			</div>
		</div>
	);
}
