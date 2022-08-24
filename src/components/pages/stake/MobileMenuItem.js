import { svgs } from "../../../assets/svgs";

const MobileMenuItem = ({ text, onClickItem }) => {
	return (
		<div className="MobileMenu_Item" onClick={onClickItem}>
			<span>{text}</span>
			<img
				src={svgs.arrow_right_icon}
				alt="Arrow Right"
				draggable="false"
			/>
		</div>
	);
};

export default MobileMenuItem;
