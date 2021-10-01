import React from "react";
import GifItem from "./GifItem";

const GitList = ({ gifs }) => {
	if (!gifs.length) {
		return (
			<div className="border border-purple-400 bg-purple-100 text-purple-500 rounded px-3 py-2 text-center">
				<h3 className="font-bold text-xl mb-2">No gifs here!</h3>
				<p className="text-sm">Try with different words</p>
			</div>
		);
	}

	return (
		<div className="flex flex-wrap justify-around">
			{gifs.map((gif) => (
				<GifItem key={gif.id} {...gif} />
			))}
		</div>
	);
};

export default GitList;
