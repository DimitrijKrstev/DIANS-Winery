export function LoginUser(email, password, setUser, setError) {
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

export function DislikeWine(email, wine, setUser) {
	try {
		fetch('http://localhost:8080/user/dislikeWinery', {
			method: 'POST',
			body: JSON.stringify({
				userId: email,
				wineryId: wine,
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
			})
			.catch((err) => {});
	} catch (err) {}
}

export function LikeWine(email, wine, setUser) {
	try {
		fetch('http://localhost:8080/user/likeWinery', {
			method: 'POST',
			body: JSON.stringify({
				userId: email,
				wineryId: wine,
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
			})
			.catch((err) => {});
	} catch (err) {}
}

export function AddComment(wine, comment) {
	try {
		fetch('http://localhost:8080/wineries/addComment', {
			method: 'POST',
			body: JSON.stringify({
				wineryId: wine,
				text: comment,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).then((response) => {
			console.log(response);
			if (!response.ok) throw new Error('Invalid comment');
			return response.json();
		});
	} catch (err) {}
}

export const RegisterUser = (username, email, password, setUser, setError) => {
	fetch('http://localhost:8080/user/register', {
		method: 'POST',
		body: JSON.stringify({
			username: username,
			email: email,
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
