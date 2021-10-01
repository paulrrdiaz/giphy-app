const GifItem = ({ title, images, url }) => {
	return (
		<a
			className="w-32 h-32 block m-2 rounded-full overflow-hidden border-4 shadow-lg border-purple-400"
			href={url}
			target="_blank"
			rel="noreferrer"
			title={title}
		>
			<img className="w-full h-full" src={images.preview_gif.url} alt={title} />
		</a>
	);
};

export default GifItem;
