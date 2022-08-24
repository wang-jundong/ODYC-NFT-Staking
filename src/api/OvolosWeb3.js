import { ovolosContractInstance } from "../components/utils/ContractUtils";
import { TOKENS_BALANCE } from "../redux/constants";

export const balanceOfOvolos =
	(active, account, library) => async (dispatch) => {
		if (!active) return;
		var result = await ovolosContractInstance(library)
			.methods.balanceOf(account)
			.call();
		if (result) {
			dispatch({ type: TOKENS_BALANCE, payload: result });
		}
	};
