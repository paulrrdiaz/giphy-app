import { useState } from "react";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import GitList from "./GitList";
import useGifs from "../hooks/useGifs";
import { TRENDING_URL, SEARCH_URL } from "../constants";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [url, setUrl] = useState(TRENDING_URL);
	const { gifs, isLoading } = useGifs(url);

	const onSubmit = (searchTerm) => {
		if (searchTerm.length) {
			setUrl(`${SEARCH_URL}&q=${searchTerm}`);
		} else {
			setUrl(TRENDING_URL);
		}
	};

	return (
		<div className="container max-w-xs md:max-w-xl xl:max-w-5xl mx-auto py-4">
			<SearchForm
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				onSubmit={onSubmit}
			/>

			{isLoading ? (
				<Loading className="text-5xl mx-auto" />
			) : (
				<GitList gifs={gifs} />
			)}
		</div>
	);
}

export default App;
