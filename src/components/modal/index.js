import { svgs } from "../../assets/svgs";

const Modal = ({ setShowModal }) => {
	return (
		<div id="WEB3_CONNECT_MODAL_ID">
			<div
				className="uYscM web3modal-modal-lightbox"
				offset="0"
				opacity="0.4"
				onClick={() => setShowModal(false)}
			>
				<div className="fmSSut web3modal-modal-container">
					<div className="fFpYRP web3modal-modal-hitbox"></div>
					<div className="cCExkz web3modal-modal-card">
						<div className="cSaJae web3modal-provider-wrapper">
							<div className="sc-hKwDye iWCqoQ web3modal-provider-container">
								<div className="fqonLZ web3modal-provider-icon">
									<img src={svgs.metamask} alt="MetaMask" />
								</div>
								<div className="iKzkWq web3modal-provider-name">
									MetaMask
								</div>
								<div className="kFITWz web3modal-provider-description">
									Connect to your MetaMask Wallet
								</div>
							</div>
						</div>
						<div className="cSaJae web3modal-provider-wrapper">
							<div className="sc-hKwDye iWCqoQ web3modal-provider-container">
								<div className="fqonLZ web3modal-provider-icon">
									<img
										src={svgs.walletconnect}
										alt="WalletConnect"
									/>
								</div>
								<div className="iKzkWq web3modal-provider-name">
									WalletConnect
								</div>
								<div className="kFITWz web3modal-provider-description">
									Scan with WalletConnect to connect
								</div>
							</div>
						</div>
						<div className="cSaJae web3modal-provider-wrapper">
							<div className="sc-hKwDye iWCqoQ web3modal-provider-container">
								<div className="fqonLZ web3modal-provider-icon">
									<img
										src="https://walletlink.org/static/media/coinbase-wallet.9fa41556.svg"
										alt="Coinbase Wallet"
									/>
								</div>
								<div className="iKzkWq web3modal-provider-name">
									Coinbase Wallet
								</div>
								<div className="kFITWz web3modal-provider-description">
									Scan with Coinbase Wallet to connect
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
