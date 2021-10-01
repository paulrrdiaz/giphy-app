import { useState } from "react";
import { HiX } from "react-icons/hi";
import Loading from "./Loading";
import useAutocomplete from "../hooks/useAutocomplete";

const SearchForm = ({ searchTerm, setSearchTerm, onSubmit }) => {
	const [isTyping, setIsTyping] = useState(false);
	const { tags, setTags, isLoading } = useAutocomplete(searchTerm, isTyping);

	const handleCleanUp = () => {
		setIsTyping(false);
		setTags([]);
		setSearchTerm("");
		onSubmit("");
	};

	const handleChange = (e) => {
		setIsTyping(true);
		setSearchTerm(e.target.value);
	};

	const handleClick = (name) => {
		setIsTyping(false);
		setTags([]);
		setSearchTerm(name);
		onSubmit(name);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(searchTerm);
	};

	return (
		<div>
			<form className="flex justify-center mb-8" onSubmit={handleSubmit}>
				<div className="relative">
					<input
						value={searchTerm}
						onChange={handleChange}
						type="text"
						className="border w-64 border-purple-300 focus:outline-none h-12 px-3"
					/>

					{isLoading ? <Loading className="absolute top-4 right-3" /> : null}

					{!isLoading && searchTerm.length ? (
						<button
							onClick={handleCleanUp}
							className="absolute top-4 right-3 text-purple-400"
						>
							<HiX />
						</button>
					) : null}

					{tags.length ? (
						<ul className="absolute bg-purple-200 w-full text-purple-500 p-1">
							{tags.map((tag) => (
								<li key={tag.name}>
									<button
										onClick={() => handleClick(tag.name)}
										className="px-3 py-1.5 hover:bg-purple-300 w-full text-left"
									>
										{tag.name}
									</button>
								</li>
							))}
						</ul>
					) : null}
				</div>

				<button type="submit" className="h-12 bg-purple-400 text-white px-3">
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchForm;
