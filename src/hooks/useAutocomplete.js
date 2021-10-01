import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { AUTOCOMPLETE_URL } from "../constants";

const useAutocomplete = (searchTerm, isTyping) => {
	const [tags, setTags] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getTags() {
		setIsLoading(true);

		try {
			const res = await fetch(`${AUTOCOMPLETE_URL}&q=${searchTerm}`);
			const { data } = await res.json();
			setTags(data);
		} catch (error) {
			console.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	}

	const getTagsDebounced = useDebouncedCallback(getTags, 500);

	useEffect(() => {
		isTyping && getTagsDebounced();
	}, [searchTerm, isTyping, getTagsDebounced]);

	return {
		tags,
		setTags,
		isLoading,
	};
};

export default useAutocomplete;
