export function LoginUser(email, setUser, setError) {
	try {
		fetch('http://localhost:8080/user/login', {
			method: 'POST',
			body: JSON.stringify({
				username: email,
				password: password,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => {
				console.log(response);
				if (!response.ok) throw new Error('Invalid username or password');
				return response.json();
			})
			.then((data) => {
				setUser(data);
				setError();
			})
			.catch((err) => {
				setError(err);
			});
	} catch (err) {
		setError(err);
	}
}

export const RegisterUser = (username, email, password, setUser, setError) => {
	fetch('http://localhost:8080/user/register', {
		method: 'POST',
		body: JSON.stringify({
			username: username,
			password: password,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			setUser(data);
		})
		.catch((err) => {
			setError(err);
		});
};