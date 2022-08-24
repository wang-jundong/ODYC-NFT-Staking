import { minotaurContractInstance } from "../components/utils/ContractUtils";
import {
	MellonTokenSupply,
	MinotaurNFTAddress,
	YparchosTokenSupply,
} from "../data";
import {
	TOKENS_LOADING,
	TOKENS_STAKE_TO_UNSTAKE,
	TOKENS_UNSTAKE_TO_STAKE,
} from "../redux/constants";

export const balanceOf = async (active, account, library) => {
	if (!active) return 0;
	const userTokenCount = await minotaurContractInstance(library)
		.methods.balanceOf(account)
		.call();
	console.log("----------------balanceOf", userTokenCount);
	return userTokenCount;
};

export const tokenOfOwnerByIndex = async (active, account, library, index) => {
	if (!active) return undefined;
	const tokenId = await minotaurContractInstance(library)
		.methods.tokenOfOwnerByIndex(account, index)
		.call();
	console.log("----------------tokenOfOwnerByIndex");
	return tokenId;
};

export const minotaur = async (active, account, library, tokenId) => {
	if (!active) return undefined;
	const tokenInformation = await minotaurContractInstance(library)
		.methods.minotaur(tokenId)
		.call();
	console.log("----------------minotaur");
	return tokenInformation;
};

export const isApprovedForAll = async (active, account, library) => {
	if (!active) return false;
	const result = await minotaurContractInstance(library)
		.methods.isApprovedForAll(account, MinotaurNFTAddress)
		.call();
	return result;
};

export const setApprovalForAll = async (active, account, library) => {
	if (!active) return false;
	await minotaurContractInstance(library)
		.methods.setApprovalForAll(MinotaurNFTAddress, true)
		.send({ from: account })
		.on("receipt", function (receipt) {
			console.log("--- receipt ---", receipt);
			return true;
		})
		.on("error", function (error) {
			console.log("--- error ---", error);
			return false;
		});
};

export const startStaking =
	(active, account, library, token) => async (dispatch) => {
		if (!active) return false;
		dispatch({ type: TOKENS_LOADING, payload: true });
		await minotaurContractInstance(library)
			.methods.startStaking(token.value)
			.send({ from: account })
			.on("receipt", function (receipt) {
				dispatch({ type: TOKENS_LOADING, payload: false });
				dispatch({
					type: TOKENS_STAKE_TO_UNSTAKE,
					payload: token,
				});
			})
			.on("error", function (error) {
				dispatch({ type: TOKENS_LOADING, payload: false });
				console.log("--- startStaking ---", error);
			});
	};

export const stopStaking =
	(active, account, library, token) => async (dispatch) => {
		if (!active) return false;
		dispatch({ type: TOKENS_LOADING, payload: true });
		await minotaurContractInstance(library)
			.methods.stopStaking(token.value)
			.send({ from: account })
			.on("receipt", function (receipt) {
				dispatch({ type: TOKENS_LOADING, payload: false });
				dispatch({
					type: TOKENS_UNSTAKE_TO_STAKE,
					payload: token,
				});
			})
			.on("error", function (error) {
				dispatch({ type: TOKENS_LOADING, payload: false });
				console.log("--- error ---", error);
			});
	};

export const adoptNFT =
	(active, account, library, tokenId) => async (dispatch) => {
		if (!active || !tokenId) return;
		dispatch({ type: TOKENS_LOADING, payload: true });
		await minotaurContractInstance(library)
			.methods.adopt(tokenId)
			.send({ from: account })
			.on("receipt", function (receipt) {
				dispatch({ type: TOKENS_LOADING, payload: false });
			})
			.on("error", function (error) {
				dispatch({ type: TOKENS_LOADING, payload: false });
			});
	};

export const evolveNFT =
	(active, account, library, tokenId) => async (dispatch) => {
		if (!active || !tokenId) return;
		dispatch({ type: TOKENS_LOADING, payload: true });
		await minotaurContractInstance(library)
			.methods.evolve(tokenId)
			.send({ from: account })
			.on("receipt", function (receipt) {
				dispatch({ type: TOKENS_LOADING, payload: false });
			})
			.on("error", function (error) {
				dispatch({ type: TOKENS_LOADING, payload: false });
			});
	};

export const totalSupplyMellon = async (active, account, library) => {
	if (!active) return 0;
	var result = await minotaurContractInstance(library)
		.methods.totalSupplyMellon()
		.call();
	if (result) {
		return MellonTokenSupply - result;
	} else {
		return 0;
	}
};

export const totalSupplyYparchos = async (active, library) => {
	if (!active) return 0;
	var result = await minotaurContractInstance(library)
		.methods.totalSupplyYparchos()
		.call();
	if (result) {
		return YparchosTokenSupply - result;
	} else {
		return 0;
	}
};
