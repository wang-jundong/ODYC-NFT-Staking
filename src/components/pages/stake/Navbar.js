import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { link_discord, link_opensea, link_twitter } from "../../../data/links";
import { injected } from "../../../wallet/Connect";
import NavbarIconItem from "./NavbarIconItem";
import NavbarItem from "./NavbarItem";
import { useNavigate } from "react-router-dom";

const { pngs } = require("../../../assets/pngs");

const Navbar = ({ setPage }) => {
	// const [userAddress, setUserAddress] = useState("");

	// const checkIfWalletIsConnected = async () => {
	// 	if (window.ethereum) {
	// 		const accounts = await window.ethereum.request({
	// 			method: "eth_accounts",
	// 		});

	// 		if (accounts.length > 0) {
	// 			const account = accounts[0];
	// 			setUserAddress(account);
	// 			return;
	// 		}
	// 	}
	// };

	// useEffect(() => {
	// 	checkIfWalletIsConnected();
	// }, []);

	// const onClickConnect = async () => {
	// 	if (!window.ethereum) {
	// 		alert("Get MetaMask!");
	// 		return;
	// 	}

	// 	if (userAddress) {
	// 		const accounts = await window.ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		});

	// 		setUserAddress(accounts[0]);
	// 	} else {
	// 	}
	// };

	const { active, account, activate, deactivate } = useWeb3React();
	const navigate = useNavigate();

	const checkIfWalletIsConnected = async () => {
		try {
			if (!active) await activate(injected);
		} catch (ex) {
			console.log(ex);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickConnect = async () => {
		try {
			if (!active) await activate(injected);
			else deactivate();
		} catch (ex) {
			console.log(ex);
		}
	};

	const displayUserAddress = () => {
		if (active) {
			let firstPart = account.slice(0, 6);
			let endPart = account.slice(account.length - 4);
			return firstPart + "..." + endPart;
		} else {
			return "CONNECT";
		}
	};

	return (
		<nav className="Navbar_Wrapper">
			<div className="Navbar_Container">
				<div className="Navbar_IconContainer">
					<NavbarIconItem
						link={link_opensea}
						iconUrl="/images/opensea.png"
						alt="OpenSea"
						className="opensea"
					/>
					<NavbarIconItem
						link={link_discord}
						iconUrl="/images/discord.png"
						alt="Discord"
						className="discord"
					/>
					<NavbarIconItem
						link={link_twitter}
						iconUrl="/images/twitter.png"
						alt="Twitter"
					/>
				</div>
				<div className="Navbar_LinksContainer">
					<NavbarItem
						text="Home"
						onClickItem={() => navigate("/")}
					/>
					<NavbarItem
						text="WULFZ HOUSE"
						onClickItem={() => setPage(0)}
					/>
					<NavbarItem text="DAYCARE" onClickItem={() => setPage(1)} />
					{/* <NavbarItem
						text="FULL MOON"
						onClickItem={() => setPage(2)}
					/> */}
					<NavbarItem text="MARKET" onClickItem={() => setPage(3)} />
				</div>
				<div className="Navbar_ButtonContainer">
					<NavbarIconItem iconUrl='/images/discord.png' alt="Discord" />
					<button onClick={() => onClickConnect()}>
						{displayUserAddress()}
					</button>
				</div>
				<h1>WULFZ HOUSE</h1>
				<div className="Navbar_MenuToggler">
					<div
						className="hamburger-react"
						role="button"
						style={{
							cursor: "pointer",
							height: "48px",
							position: "relative",
							transition: "0.4s cubic-bezier(0, 0, 0, 1)",
							userSelect: "none",
							width: "48px",
							outline: "none",
						}}
						tabIndex={0}
					>
						<div
							style={{
								transition:
									"0.2s cubic-bezier(0, 0, 0, 1) 0.2s",
								transform: "none",
							}}
						>
							<div
								style={{
									background: "#3d2c0e",
									height: "2px",
									left: "10px",
									position: "absolute",
									width: "28px",
									top: "15px",
									transition:
										"0.2s cubic-bezier(0, 0, 0, 1) 0s",
									transform: "none",
								}}
							></div>
						</div>
						<div
							style={{
								transition: "0.2s cubic-bezier(0, 0, 0, 1)",
								opacity: "1",
							}}
						>
							<div
								style={{
									background: "#3d2c0e",
									height: "2px",
									left: "10px",
									position: "absolute",
									width: "28px",
									top: "23px",
									transition: "0.2s cubic-bezier(0, 0, 0, 1)",
								}}
							></div>
						</div>
						<div
							style={{
								transition:
									"0.2s cubic-bezier(0, 0, 0, 1) 0.2s",
								transform: "none",
							}}
						>
							<div
								style={{
									background: "#3d2c0e",
									height: "2px",
									left: "10px",
									position: "absolute",
									width: "28px",
									top: "31px",
									transition:
										"0.2s cubic-bezier(0, 0, 0, 1) 0s",
									transform: "none",
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
