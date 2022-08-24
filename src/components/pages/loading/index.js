import Spin from "react-cssfx-loading/lib/Spin";

const Loading = () => {
	return (
		<div className="loading-container">
			<Spin color="#FF0000" width="100px" height="100px" duration="3s" />
		</div>
	);
};

export default Loading;
