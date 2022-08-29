import { beeContractInstance } from "../components/utils/ContractUtils";
import { ALPHANFTADDRESS } from "../data"
import {
    TOKENS_LOADING,
    TOKENS_STAKE_ACTION_ALPHA,
    TOKENS_STAKE_ACTION_DUCK,
    TOKENS_STAKE_ACTION_DUCKLING,
    TOKENS_UNSTAKE_ACTION_ALPHA,
    TOKENS_UNSTAKE_ACTION_DUCK,
    TOKENS_UNSTAKE_ACTION_DUCKLING,
} from "../redux/constants";

export const getStakedDuckIds = async (active, account, library) => {
    if (!active) return undefined;
    const tokenIdList = await beeContractInstance(library)
        .methods.getStakedDuck(account)
        .call();
    return tokenIdList;
};

export const getStakedDucklingIds = async (active, account, library) => {
    if (!active) return undefined;
    const tokenIdList = await beeContractInstance(library)
        .methods.getStakedDuckling(account)
        .call();
    return tokenIdList;
};

export const getStakedAlphaIds = async (active, account, library) => {
    if (!active) return undefined;
    const tokenIdList = await beeContractInstance(library)
        .methods.getStakedAlpha(account)
        .call();
    return tokenIdList;
};

export const getAllowance = async (active, account, library) => {
    if (!active) return undefined;
    const isAllowance = await beeContractInstance(library)
        .methods.allowance(account, ALPHANFTADDRESS)
        .call();
    return isAllowance;
};


export const approveForBee = async (active, account, library, callback) => {

    if (!active) {
        callback(false);
        return;
    }
    await beeContractInstance(library)
        .methods.approve(ALPHANFTADDRESS, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
        .send({ from: account })
        .on("receipt", function (receipt) {
            console.log("--- receipt ---", receipt);
            callback(true);
        })
        .on("error", function (error) {
            console.log("--- error ---", error);
            callback(false);
        });
}


// stakeActions
export const stakeActionOfDuck =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.stakeDuckById(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_STAKE_ACTION_DUCK,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

export const stakeActionOfDuckling =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.stakeDucklingsById(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_STAKE_ACTION_DUCKLING,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

export const stakeActionOfAlpha =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.stakeAlphaById(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_STAKE_ACTION_ALPHA,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

// unstakeActions
export const unstakeActionOfDuck =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.unstakeDuckByIds(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_UNSTAKE_ACTION_DUCK,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

export const unstakeActionOfDuckling =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.unstakeDucklingsByIds(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_UNSTAKE_ACTION_DUCKLING,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

export const unstakeActionOfAlpha =
    (active, account, library, tokenIds, callback) => async (dispatch) => {
        if (!active) return false;
        dispatch({ type: TOKENS_LOADING, payload: true });
        await beeContractInstance(library)
            .methods.unstakeAlphaByIds(tokenIds)
            .send({ from: account })
            .on("receipt", function (receipt) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                dispatch({
                    type: TOKENS_UNSTAKE_ACTION_ALPHA,
                    payload: tokenIds,
                });
                callback(true);
            })
            .on("error", function (error) {
                dispatch({ type: TOKENS_LOADING, payload: false });
                callback(false);
            });
    };

export const getBalance = async (active, account, library) => {
    if (!active) return undefined;
    const balance = await beeContractInstance(library)
        .methods.balanceOf(account)
        .call();
    return balance;
};

export const getReward = async (active, account, library) => {
    if (!active) return undefined;
    const balance = await beeContractInstance(library)
        .methods.getAllRewards(account)
        .call();
    return balance;
};

export const claim = (active, account, library, callback) => async (dispatch) => {

    if (!active) return false;
    dispatch({ type: TOKENS_LOADING, payload: true });
    await beeContractInstance(library)
        .methods.claimAll()
        .send({ from: account })
        .on("receipt", function (receipt) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(true);
        })
        .on("error", function (error) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(false);
        });
};

export const unstakeAll = (active, account, library, callback) => async (dispatch) => {

    if (!active) return false;
    dispatch({ type: TOKENS_LOADING, payload: true });
    await beeContractInstance(library)
        .methods.unstakeAll()
        .send({ from: account })
        .on("receipt", function (receipt) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(true);
        })
        .on("error", function (error) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(false);
        });
};