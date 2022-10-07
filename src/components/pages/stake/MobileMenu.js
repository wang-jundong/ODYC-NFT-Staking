import { pngs } from "../../../assets/pngs";
import {
	link_discord,
	link_discord_api,
	link_opensea,
	link_twitter,
} from "../../../data/links";
import MobileMenuIconItem from "./MobileMenuIconItem";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = ({ setShowModal, setPage }) => {
	return (
		<div className="MobileMenu_Wrapper">
			<div className="MobileMenu_FlexContainer">
				<div className="MobileMenu_IconContainer">
					<MobileMenuIconItem
						link={link_opensea}
						iconUrl={pngs.opensea_icon}
						alt="OpenSea"
					/>
					<MobileMenuIconItem
						link={link_discord}
						iconUrl={pngs.discord_icon}
						alt="Discord"
					/>
					<MobileMenuIconItem
						link={link_twitter}
						iconUrl={pngs.twitter_icon}
						alt="Twitter"
					/>
				</div>
				<div className="MobileMenu_IconContainer">
					<a
						href={link_discord_api}
						style={{ height: "40px" }}
						rel="noreferrer"
					>
						<img
							src={pngs.discord_icon}
							alt="Discord"
							draggable="false"
						/>
					</a>
					<button onClick={() => setShowModal(true)}>CONNECT</button>
				</div>
			</div>
			<div className="MobileMenu_Divider"></div>
			<div className="MobileMenu_LinksContainer">
				<MobileMenuItem
					text="THE DOCKS"
					onClickItem={() => setPage(0)}
				/>
				<MobileMenuItem text="MINT" onClickItem={() => setPage(1)} />
			</div>
		</div>
	);
};

export default MobileMenu;
