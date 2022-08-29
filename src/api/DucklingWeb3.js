import { ducklingContractInstance } from "../components/utils/ContractUtils";
import { BEEADDRESS, ALPHANFTADDRESS } from "../data";

export const isApprovedForAllDuckling = async (active, account, library) => {
    if (!active) return false;
    const result = await ducklingContractInstance(library)
        .methods.isApprovedForAll(account, BEEADDRESS)
        .call();
    return result;
};

export const isAlphaApprovedForAllDuckling = async (active, account, library) => {
    if (!active) return false;
    const result = await ducklingContractInstance(library)
        .methods.isApprovedForAll(account, ALPHANFTADDRESS)
        .call();
    return result;
};

export const setApprovalForAllDuckling = async (
    active,
    account,
    library,
    callback
) => {
    if (!active) {
        callback(false);
        return;
    }
    await ducklingContractInstance(library)
        .methods.setApprovalForAll(BEEADDRESS, true)
        .send({ from: account })
        .on("receipt", function (receipt) {
            console.log("--- receipt ---", receipt);
            callback(true);
        })
        .on("error", function (error) {
            console.log("--- error ---", error);
            callback(false);
        });
};

export const setAlphaApprovalForAllDuckling = async (
    active,
    account,
    library,
    callback
) => {
    if (!active) {
        callback(false);
        return;
    }
    await ducklingContractInstance(library)
        .methods.setApprovalForAll(ALPHANFTADDRESS, true)
        .send({ from: account })
        .on("receipt", function (receipt) {
            console.log("--- receipt ---", receipt);
            callback(true);
        })
        .on("error", function (error) {
            console.log("--- error ---", error);
            callback(false);
        });
};

export const getUserDucklingIds = async (active, account, library) => {
    if (!active) return undefined;
    const tokenIdList = await ducklingContractInstance(library)
        .methods.walletOfOwner(account)
        .call();
    return tokenIdList;
};

export const getDucklingMaxSupply = async (active, account, library) => {
    if (!active) return false;
    const result = await ducklingContractInstance(library)
        .methods.maxSupply()
        .call();
    return result;
};