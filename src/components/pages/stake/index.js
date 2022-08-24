import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAlphaIds, getAlphaMaxSupply } from "../../../api/AlphaWeb3";
import {
    getStakedAlphaIds,
    getStakedDuckIds,
    getStakedDucklingIds,
} from "../../../api/BeeWeb3";
import { getUserDucklingIds, getDucklingMaxSupply } from "../../../api/DucklingWeb3";
import { getDuckMaxSupply } from "../../../api/DuckWeb3";
import { getTokenIdList, getTokenIdsOfDuck } from "../../../api/OpenseaApi";
import {
    ALPHANFTADDRESS,
    BEEADDRESS,
    DUCKLINGNFTADDRESS,
    DUCKNFTADDRESS,
} from "../../../data";
import {
    TOKENS_STAKE_IDS_ALPHA,
    TOKENS_STAKE_IDS_DUCK,
    TOKENS_STAKE_IDS_DUCKLING,
    TOKENS_USER_IDS_ALPHA,
    TOKENS_USER_IDS_DUCK,
    TOKENS_USER_IDS_DUCKLING,
    TOTAL_TOKENS_STAKE_IDS_DUCK,
    TOTAL_TOKENS_STAKE_IDS_DUCKLING,
    TOTAL_TOKENS_STAKE_IDS_ALPHA,
    MAX_SUPPLY_DUCK,
    MAX_SUPPLY_DUCKLING,
    MAX_SUPPLY_ALPHA,
} from "../../../redux/constants";
import "../../../styles/common.css";
import "../../../styles/general.css";
import "../../../styles/stake.css";
import Modal from "../../modal";
import { delay } from "../../utils";
import AdoptionBook from "./AdoptionBook";
import EvolutionBook from "./EvolutionBook";
import GridContainer from "./GridContainer";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import ShopContainer from "./ShopContainer";

const Stake = () => {
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [showModal]);

    const { active, account, library } = useWeb3React();

    const getTokenIds = async () => {
        if (!active) return;

        const userTokenIdsOfDuck = await getTokenIdList(
            account,
            DUCKNFTADDRESS
        );
        console.log("_____ user duck id list _____", userTokenIdsOfDuck);

        //get from Opensea

        // const stakedTokenIdsOfDuck = await getTokenIdList(
        //     BEEADDRESS,
        //     DUCKNFTADDRESS
        // );

        // console.log("_____ staked duck id list _____", stakedTokenIdsOfDuck);


        // const userTokenIdsOfDuckling = await getTokenIdList(
        //     account,
        //     DUCKLINGNFTADDRESS
        // );
        // console.log("_____ user duckling id list _____", userTokenIdsOfDuckling);


        // const stakedTokenIdsOfDuckling = await getTokenIdList(
        //     BEEADDRESS,
        //     DUCKLINGNFTADDRESS
        // );

        // console.log("_____ stake duckling id list _____", stakedTokenIdsOfDuckling);


        // const userTokenIdsOfAlpha = await getTokenIdList(
        //     account,
        //     ALPHANFTADDRESS
        // );

        // console.log("_____ user alpha id list _____", userTokenIdsOfAlpha);


        // const stakedTokenIdsOfAlpha = await getTokenIdList(
        //     BEEADDRESS,
        //     ALPHANFTADDRESS
        // );

        // console.log("_____ stake alpha id list _____", stakedTokenIdsOfAlpha);


        // get from smart contract
        const stakedTokenIdsOfDuck = await getStakedDuckIds(
            active,
            account,
            library
        );

        const userTokenIdsOfDuckling = await getUserDucklingIds(
            active,
            account,
            library
        );


        const stakedTokenIdsOfDuckling = await getStakedDucklingIds(
            active,
            account,
            library
        );

        const userTokenIdsOfAlpha = await getUserAlphaIds(
            active,
            account,
            library
        );
        const stakedTokenIdsOfAlpha = await getStakedAlphaIds(
            active,
            account,
            library
        );

        // get total staked token

        const totalStakedTokenIdsOfDuck = await getTokenIdList(
            BEEADDRESS,
            DUCKNFTADDRESS
        );

        const totalStakedTokenIdsOfDuckling = await getTokenIdList(
            BEEADDRESS,
            DUCKLINGNFTADDRESS
        );

        const totalStakedTokenIdsOfAlpha = await getTokenIdList(
            BEEADDRESS,
            ALPHANFTADDRESS
        );



        // get max supply
        const duckMaxSupply = await getDuckMaxSupply(
            active,
            account,
            library
        );

        const ducklingMaxSupply = await getDucklingMaxSupply(
            active,
            account,
            library
        );

        const alphaMaxSupply = await getAlphaMaxSupply(
            active,
            account,
            library
        );



        dispatch({ type: TOKENS_USER_IDS_DUCK, payload: userTokenIdsOfDuck });
        dispatch({
            type: TOKENS_STAKE_IDS_DUCK,
            payload: stakedTokenIdsOfDuck,
        });
        dispatch({
            type: TOKENS_USER_IDS_DUCKLING,
            payload: userTokenIdsOfDuckling,
        });
        dispatch({
            type: TOKENS_STAKE_IDS_DUCKLING,
            payload: stakedTokenIdsOfDuckling,
        });
        dispatch({ type: TOKENS_USER_IDS_ALPHA, payload: userTokenIdsOfAlpha });
        dispatch({
            type: TOKENS_STAKE_IDS_ALPHA,
            payload: stakedTokenIdsOfAlpha,
        });
        dispatch({
            type: TOTAL_TOKENS_STAKE_IDS_DUCK,
            payload: totalStakedTokenIdsOfDuck,
        });
        dispatch({
            type: TOTAL_TOKENS_STAKE_IDS_DUCKLING,
            payload: totalStakedTokenIdsOfDuckling,
        });
        dispatch({
            type: TOTAL_TOKENS_STAKE_IDS_ALPHA,
            payload: totalStakedTokenIdsOfAlpha,
        });
        dispatch({
            type: MAX_SUPPLY_DUCK,
            payload: duckMaxSupply,
        });
        dispatch({
            type: MAX_SUPPLY_DUCKLING,
            payload: ducklingMaxSupply,
        });
        dispatch({
            type: MAX_SUPPLY_ALPHA,
            payload: alphaMaxSupply,
        });

    };

    useEffect(() => {
        getTokenIds();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <div id="stake" style={{ overflow: showModal ? "hidden" : "visible" }}>
            <div>
                <MobileMenu />
                <Navbar setPage={setPage} />
                <div
                    style={{
                        position: "fixed",
                        zIndex: "9999",
                        top: "16px",
                        left: "16px",
                        right: "16px",
                        bottom: "16px",
                        pointerEvents: "none",
                        padding: "0",
                        marginTop: "5px",
                        marginRight: "4px",
                    }}
                />
                <div className="Container">
                    {page === 0 && <GridContainer />}
                    {page === 1 && <AdoptionBook />}
                    {page === 2 && <EvolutionBook />}
                    {page === 3 && <ShopContainer />}
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default Stake;
