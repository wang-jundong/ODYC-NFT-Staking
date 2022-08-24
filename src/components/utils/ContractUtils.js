import {
    ALPHANFTADDRESS,
    BEEADDRESS,
    DUCKLINGNFTADDRESS,
    DUCKNFTADDRESS,
    MinotaurNFTAddress,
    OvolosAddress,
    StakingPoolAddress,
} from "../../data";
import { alphaAbi } from "../../data/abi/alphaAbi";
import { beeAbi } from "../../data/abi/beeAbi";
import { DuckAbi } from "../../data/abi/DuckAbi";
import { DucklingAbi } from "../../data/abi/DucklingAbi";
import { MinotaurNFTAbi } from "../../data/abi/MinotaurNFT";
import { OvolosAbi } from "../../data/abi/Ovolos";
import { StakingPoolAbi } from "../../data/abi/StakingPool";

export const minotaurContractInstance = (library) => {
    const minotaurNFT = new library.eth.Contract(
        MinotaurNFTAbi,
        MinotaurNFTAddress
    );
    return minotaurNFT;
};

export const stakingPoolContractInstance = (library) => {
    const stakingPool = new library.eth.Contract(
        StakingPoolAbi,
        StakingPoolAddress
    );
    return stakingPool;
};

export const ovolosContractInstance = (library) => {
    const ovolos = new library.eth.Contract(OvolosAbi, OvolosAddress);
    return ovolos;
};

export const duckContractInstance = (library) => {
    const duck = new library.eth.Contract(DuckAbi, DUCKNFTADDRESS);
    return duck;
};

export const ducklingContractInstance = (library) => {
    const duckling = new library.eth.Contract(DucklingAbi, DUCKLINGNFTADDRESS);
    return duckling;
};

export const alphaContractInstance = (library) => {
    const alpha = new library.eth.Contract(alphaAbi, ALPHANFTADDRESS);
    return alpha;
};

export const beeContractInstance = (library) => {
    const bee = new library.eth.Contract(beeAbi, BEEADDRESS);
    return bee;
};
