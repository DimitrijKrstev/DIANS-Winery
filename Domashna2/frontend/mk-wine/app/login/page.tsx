'use client';
import Logo from '../../public/images/MKWineLogo.png';
import Image from 'next/image';
import Link from 'next/link';

import { useContext, useState } from 'react';
import { LoginUser } from '../util/util';
import { GlobalContext } from '../context/page';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const { user, setUser } = useContext(GlobalContext);
	console.log(user);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col lg:w-[80vw]  lg:scale-75   sm:scale-50 lg:h-[95vh] mt-12 bg-black bg-opacity-50 p-4 lg:rounded-3xl md:rounded-3xl grid-cols-2 gap-5 z-10 ">
				<div className="flex justify-center items-center ">
					<div className="lg:basis-1/2 md:basis-1/2 ">
						<Image
							src={Logo}
							alt="mkwinelogo"
							className=" lg:basis-1/2 md:basis-1/2   mr-6"
						/>
					</div>
					<div className="flex flex-col font-body lg:text-5xl md:text-5xl sm:text-5xl text-xl mt-16 lg:basis-1/2 md:basis-1/2  z-50 justify-center mx-auto ">
						<label className="mt-3">Email</label>
						<input
							type="text"
							id="email"
							className="input-primary"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							style={{ zIndex: 1 }}
						/>
						<label className="mt-5">Password</label>
						<input
							type="text"
							id="password"
							className="input-primary"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className="bg-stone-800 rounded-3xl text-white hover:text-red-600 mt-4 w-max p-5"
							style={{ zIndex: 1 }}
							onClick={() => LoginUser(email, password, setUser, setError)}
						>
							Log in
						</button>
					</div>
				</div>
				<div className="text-center font-body text-2xl">
					No account?{' '}
					<Link href="/register" className=" border-b-[3px]">
						Register
					</Link>
				</div>
				<p>{user.username}</p>
			</div>
		</div>
	);
}
