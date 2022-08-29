import {
    alphaContractInstance,
    ducklingContractInstance,
} from "../components/utils/ContractUtils";
import { BEEADDRESS } from "../data";
import Web3 from "web3";
import { TOKENS_LOADING } from "../redux/constants";

export const isApprovedForAllAlpha = async (active, account, library) => {
    if (!active) return false;
    const result = await alphaContractInstance(library)
        .methods.isApprovedForAll(account, BEEADDRESS)
        .call();
    return result;
};

export const setApprovalForAllAlpha = async (
    active,
    account,
    library,
    callback
) => {
    if (!active) {
        callback(false);
        return;
    }
    await alphaContractInstance(library)
        .methods.setApprovalForAll(BEEADDRESS, true)
        .send({ from: account })
        .on("receipt", function (receipt) {
            callback(true);
        })
        .on("error", function (error) {
            callback(false);
        });
};

export const getUserAlphaIds = async (active, account, library) => {
    if (!active) return undefined;
    const tokenIdList = await alphaContractInstance(library)
        .methods.walletOfOwner(account)
        .call();
    return tokenIdList;
};

export const mint = (active, account, library, count, callback) => async (dispatch) => {

    if (!active) {
        callback(false);
        return;
    }
    dispatch({ type: TOKENS_LOADING, payload: true });
    const mintPrice = await alphaContractInstance(library)
        .methods.mintPrice()
        .call();
    const value = (mintPrice / Math.pow(10, 18) * count).toString();
    await alphaContractInstance(library)
        .methods.mint(count)
        .send({ from: account, value: Web3.utils.toWei(value, "ether") })
        .on("receipt", function (receipt) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(true);
        })
        .on("error", function (error) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(false);
        });
}

export const duckduck = (active, account, library, count, duckTokenIds, ducklingTokenIds, callback) => async (dispatch) => {

    if (!active) {
        callback(false);
        return;
    }
    dispatch({ type: TOKENS_LOADING, payload: true });
    await alphaContractInstance(library)
        .methods.duckduck(count, duckTokenIds, ducklingTokenIds)
        .send({ from: account })
        .on("receipt", function (receipt) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            console.log("--- receipt ---", receipt);
            callback(true);
        })
        .on("error", function (error) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            console.log("--- error ---", error);
            callback(false);
        });
}

export const goose = (active, account, library, count, ducklingTokenIds, callback) => async (dispatch) => {

    if (!active) {
        callback(false);
        return;
    }
    dispatch({ type: TOKENS_LOADING, payload: true });
    await alphaContractInstance(library)
        .methods.goose(count, ducklingTokenIds)
        .send({ from: account })
        .on("receipt", function (receipt) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(true);
        })
        .on("error", function (error) {
            dispatch({ type: TOKENS_LOADING, payload: false });
            callback(false);
        });
}

export const getAlphaMaxSupply = async (active, account, library) => {
    if (!active) return false;
    const result = await alphaContractInstance(library)
        .methods.maxSupply()
        .call();
    return result;
};


export const getTotalSupply = async (active, account, library) => {
    if (!active) return false;
    const result = await alphaContractInstance(library)
        .methods.totalSupply()
        .call();
    return result;
};

export const getGooseCount = async (active, account, library) => {
    if (!active) return undefined;
    const result = await alphaContractInstance(library)
        .methods.goosecount()
        .call();
    return result;
};