const StatisticsItem = (props) => {
	const { imgUrl, alt, title, subTitle, imgType, className } = props;

	return (
		<div className={`Statistics_Item ${className}`} >
			<img className={imgType} src={imgUrl} alt={alt} draggable="false" />
			<div>
				<h2>{title}</h2>
				<h3>{subTitle}</h3>
			</div>
		</div>
	);
};

export default StatisticsItem;
