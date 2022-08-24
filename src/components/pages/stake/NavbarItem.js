const NavbarItem = ({ text, onClickItem }) => {
	return (
		<div className="Navbar_Item" onClick={onClickItem}>
			<span>{text}</span>
			<div></div>
		</div>
	);
};

export default NavbarItem;
