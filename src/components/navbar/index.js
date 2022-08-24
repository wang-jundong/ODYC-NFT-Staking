import { svgs } from "../../assets/svgs";

const Navbar = () => {
	const getAccount = async () => {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			const accountAddress = accounts[0];
			return accountAddress;
		}
		window.location.href = "https://metamask.io/download";
		return false;
	};

	const onClickConnect = () => {
		getAccount().then((res) => {
			if (res !== false) {
				console.log("--- address ---", String(res));
			}
		});
	};
};

export default Navbar;
