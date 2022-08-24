import { stakingPoolContractInstance } from "../components/utils/ContractUtils";
import { TOKENS_LOADING } from "../redux/constants";
import { balanceOfOvolos } from "./OvolosWeb3";

export const stakedTokensOfPool = async (active, account, library) => {
	if (!active) return 0;
	var result = await stakingPoolContractInstance(library)
		.methods.stakedTokensOf(account)
		.call();
	console.log("----- stakedTokensOfPool ----", result);
	return result;
};

export const getClaimableTokenOfPool = async (active, account, library) => {
	if (!active) return 0;
	var result = await stakingPoolContractInstance(library)
		.methods.getClaimableToken(account)
		.call();
	console.log("---- getClaimableTokenOfPool", result);
	if (result) {
		return result;
	} else {
		return 0;
	}
};

export const getRewardOfPool =
	(active, account, library) => async (dispatch) => {
		if (!active) return false;
		dispatch({ type: TOKENS_LOADING, payload: true });
		await stakingPoolContractInstance(library)
			.methods.getReward()
			.send({ from: account })
			.on("receipt", function (receipt) {
				balanceOfOvolos(active, account, library);
				dispatch({ type: TOKENS_LOADING, payload: false });
				return true;
			})
			.on("error", function (error) {
				dispatch({ type: TOKENS_LOADING, payload: false });
				return true;
			});
	};
