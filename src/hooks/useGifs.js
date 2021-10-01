import { useState, useEffect } from "react";

const useGifs = (url) => {
	const [isLoading, setIsLoading] = useState(false);
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		async function getGifs() {
			setIsLoading(true);

			try {
				const res = await fetch(url);
				const { data } = await res.json();
				setGifs(data);
			} catch (error) {
				console.error("Something went wrong");
			} finally {
				setIsLoading(false);
			}
		}

		getGifs();
	}, [url]);

	return {
		gifs,
		isLoading,
	};
};

export default useGifs;
