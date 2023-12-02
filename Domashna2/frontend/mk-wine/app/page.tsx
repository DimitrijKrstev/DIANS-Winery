'use client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './homepage';
import { Login } from './login';

export default function Home() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}
