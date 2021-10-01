import clsx from "clsx";
import { ImSpinner2 } from "react-icons/im";

const Loading = ({ className }) => {
	const classes = clsx("animate-spin text-purple-400", className);

	return <ImSpinner2 className={classes} />;
};

export default Loading;
