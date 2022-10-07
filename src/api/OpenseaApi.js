import axios from "axios";
import {
    OPENSEA_TESTNET_API, OPENSEA_MAINNET_API
} from "../data";

export const getTokenIdList = async (userAddress, tokenAddress) => {
    let tokenIdList = [];
    let next = "";
    try {
        do {
            let response = await axios.get(OPENSEA_MAINNET_API, {
                headers: {
                    'X-Api-Key': "2a31753ee6454d2f87bde9172e94e2dc",
                },
                params: {
                    owner: userAddress,
                    asset_contract_address: tokenAddress,
                    order_direction: "desc",
                    limit: "50",
                    cursor:next,
                },
            });
            console.log(response.data.next, "next");
            next = response.data.next;
            if (response.status === 200) {
                response.data.assets.map((one) => tokenIdList.push({ id: one.token_id, image: one.image_url }));
                // response.data.assets.map((one) => tokenIdList.push(one.token_id));
            }
        } while (next);
        
    } catch (error) {
        console.log("___ error ___", error);
    }
    return tokenIdList;
};
