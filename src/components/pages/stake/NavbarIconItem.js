const NavbarIconItem = ({ link, iconUrl, alt, className }) => {
	return (
		<>
			<a href={link} target="_blank" rel="noreferrer" className={className}>
				<img src={iconUrl} alt={alt} draggable="false" />
			</a>
		</>
	);
};

export default NavbarIconItem;
