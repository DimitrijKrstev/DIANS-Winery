export const getWines = (setItems, setError) => {
	fetch('http://localhost:8080/wines/getAll')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setItems(data);
		})
		.catch((err) => setError(err));
};
export const getWineries = (setItems, setError) => {
	fetch('http://localhost:8080/wineries/getAll')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setItems(data);
		})
		.catch((err) => setError(err));
};
