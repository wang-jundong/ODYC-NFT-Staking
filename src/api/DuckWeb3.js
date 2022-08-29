import { duckContractInstance } from "../components/utils/ContractUtils";
import { BEEADDRESS, DUCKNFTADDRESS, ALPHANFTADDRESS } from "../data";

export const isApprovedForAllDuck = async (active, account, library) => {
    if (!active) return false;
    const result = await duckContractInstance(library)
        .methods.isApprovedForAll(account, BEEADDRESS)
        .call();
    return result;
};

export const isAlphaApprovedForAllDuck = async (active, account, library) => {
    if (!active) return false;
    const result = await duckContractInstance(library)
        .methods.isApprovedForAll(account, ALPHANFTADDRESS)
        .call();
    return result;
};


export const setApprovalForAllDuck = async (
    active,
    account,
    library,
    callback
) => {
    if (!active) {
        callback(false);
        return;
    }
    await duckContractInstance(library)
        .methods.setApprovalForAll(BEEADDRESS, true)
        .send({ from: account })
        .on("receipt", function (receipt) {
            callback(true);
        })
        .on("error", function (error) {
            callback(false);
        });
};

export const setAlphaApprovalForAllDuck = async (
    active,
    account,
    library,
    callback
) => {
    if (!active) {
        callback(false);
        return;
    }
    await duckContractInstance(library)
        .methods.setApprovalForAll(ALPHANFTADDRESS, true)
        .send({ from: account })
        .on("receipt", function (receipt) {
            callback(true);
        })
        .on("error", function (error) {
            callback(false);
        });
};

export const balanceOfDuck = async (active, account, library) => {
    if (!active) return 0;
    const userDuckCount = await duckContractInstance(library)
        .methods.balanceOf(account)
        .call();
    return userDuckCount;
};

export const totalSupplyOfDuck = async (active, account, library) => {
    if (!active) return 0;
    const totalSupplyOfDuck = await duckContractInstance(library)
        .methods.totalSupply()
        .call();
    return totalSupplyOfDuck;
};

export const ownerOfDuck = async (active, account, library, tokenId) => {
    if (!active) return undefined;
    const tokenOwner = await duckContractInstance(library)
        .methods.ownerOf(tokenId)
        .call();
    return tokenOwner;
};

export const getDuckMaxSupply = async (active, account, library) => {
    if (!active) return false;
    const result = await duckContractInstance(library)
        .methods.maxSupply()
        .call();
    return result;
};
