'use client';
import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext({
	user: { username: '', email: '', password: '' },
});

export const GlobalContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		username: '',
	});

	return (
		<GlobalContext.Provider value={{ user, setUser }}>
			{children}
		</GlobalContext.Provider>
	);
};
