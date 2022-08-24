import axios from "axios";
import {
    OPENSEA_TESTNET_API
} from "../data";

export const getTokenIdList = async (userAddress, tokenAddress) => {
    let tokenIdList = [];
    try {
        let response = await axios.get(OPENSEA_TESTNET_API, {
            params: {
                owner: userAddress,
                asset_contract_address: tokenAddress,
                order_direction: "asc",
            },
        });

        if (response.status === 200) {
            // response.data.assets.map((one) => tokenIdList.push({ id: one.token_id, image: one.image_url }));
            response.data.assets.map((one) => tokenIdList.push(one.token_id));

        }
    } catch (error) {
        console.log("___ error ___", error);
    }

    return tokenIdList;
};
