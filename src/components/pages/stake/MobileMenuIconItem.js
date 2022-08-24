const MobileMenuIconItem = ({ link, iconUrl, alt }) => {
	return (
		<>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={iconUrl} alt={alt} draggable="false" />
			</a>
		</>
	);
};

export default MobileMenuIconItem;
