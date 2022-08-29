import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { defaultTheme } from "react-select";
import CustomSelect from "../../CustomSelect/CustomSelect";
import {
    isApprovedForAllAlpha,
    setApprovalForAllAlpha
} from "../../../api/AlphaWeb3";
import {
    stakeActionOfAlpha,
    stakeActionOfDuck,
    stakeActionOfDuckling,
    unstakeActionOfAlpha,
    unstakeActionOfDuck,
    unstakeActionOfDuckling
} from "../../../api/BeeWeb3";
import {
    isApprovedForAllDuckling,
    setApprovalForAllDuckling
} from "../../../api/DucklingWeb3";
import {
    isApprovedForAllDuck,
    setApprovalForAllDuck
} from "../../../api/DuckWeb3";
import { svgs } from "../../../assets/svgs";
import {
    selectStakedTokenIdsOfAlpha,
    selectStakedTokenIdsOfDuck,
    selectStakedTokenIdsOfDuckling,
    selectUserTokenIdsOfAlpha,
    selectUserTokenIdsOfDuck,
    selectUserTokenIdsOfDuckling
} from "../../../redux/reducers/tokensReducer";
import { showNotification } from "../../utils/NotificationUtils";
import { selectCustomStyle } from "../../utils/StyleUtils";
import Statistics from "./Statistics";

const GridContainer = () => {
    const [stakingTab, setStakingTab] = useState(0);
    const [unStakingTab, setUnStakingTab] = useState(0);

    const [selectedUserTokensOfDuck, setSelectedUserTokensOfDuck] = useState(
        []
    );
    const [selectedUserTokensOfDuckling, setSelectedUserTokensOfDuckling] =
        useState([]);
    const [selectedUserTokensOfAlpha, setSelectedUserTokensOfAlpha] = useState(
        []
    );

    const [selectedStakedTokensOfDuck, setSelectedStakedTokensOfDuck] =
        useState([]);
    const [selectedStakedTokensOfDuckling, setSelectedStakedTokensOfDuckling] =
        useState([]);
    const [selectedStakedTokensOfAlpha, setSelectedStakedTokensOfAlpha] =
        useState([]);

    const [stakeProgress, setStakeProgress] = useState(0);

    const [isDuckApproved, setIsDuckApproved] = useState(false);
    const [isDucklingApproved, setIsDucklingApproved] = useState(false);
    const [isAlphaApproved, setIsAlphaApproved] = useState(false);

    const userTokenIdsOfDuck = useSelector(selectUserTokenIdsOfDuck);
    const stakedTokenIdsOfDuck = useSelector(selectStakedTokenIdsOfDuck);

    const userTokenIdsOfDuckling = useSelector(selectUserTokenIdsOfDuckling);
    const stakedTokenIdsOfDuckling = useSelector(
        selectStakedTokenIdsOfDuckling
    );

    const userTokenIdsOfAlpha = useSelector(selectUserTokenIdsOfAlpha);
    const stakedTokenIdsOfAlpha = useSelector(selectStakedTokenIdsOfAlpha);

    const { totalStakedTokenIdsOfDuck, totalStakedTokenIdsOfDuckling, totalStakedTokenIdsOfAlpha, maxSupplyDuck, maxSupplyDuckling, maxSupplyAlpha } = useSelector((state) => state.tokens);
    const { active, account, library } = useWeb3React();
    const dispatch = useDispatch();

    const checkIsDuckApproved = async () => {
        if (isDuckApproved) return;
        const result = await isApprovedForAllDuck(active, account, library);
        setIsDuckApproved(result);
    };

    const checkIsDucklingApproved = async () => {
        if (isDucklingApproved) return;
        const result = await isApprovedForAllDuckling(active, account, library);
        setIsDucklingApproved(result);
    };

    const checkIsAlphaApproved = async () => {
        if (isAlphaApproved) return;
        const result = await isApprovedForAllAlpha(active, account, library);
        setIsAlphaApproved(result);
    };

    useEffect(() => {
        checkIsDuckApproved();
        checkIsDucklingApproved();
        checkIsAlphaApproved();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const duckApproveOrStake = () => {

        if (selectedUserTokensOfDuck.length === 0) {
            showNotification("error", "Please select token");
            return;
        }
        if (isDuckApproved) {
            let tokenIds = selectedUserTokensOfDuck.map((item, index) => { return item.id });
            dispatch(
                stakeActionOfDuck(
                    active,
                    account,
                    library,
                    tokenIds,
                    (status) => {
                        if (status) setSelectedUserTokensOfDuck([]);
                    }
                )
            );
        } else {
            setApprovalForAllDuck(active, account, library, (status) => {
                setIsDuckApproved(status);
            });
        }
    };

    const ducklingApproveOrStake = () => {
        if (selectedUserTokensOfDuckling.length === 0) {
            showNotification("error", "Please select token");
            return;
        }
        if (isDucklingApproved) {
            let tokenIds = selectedUserTokensOfDuckling.map((item, index) => { return item.id });
            dispatch(
                stakeActionOfDuckling(
                    active,
                    account,
                    library,
                    tokenIds,
                    (status) => {
                        if (status) setSelectedUserTokensOfDuckling([]);
                    }
                )
            );
        } else {
            setApprovalForAllDuckling(active, account, library, (status) => {
                setIsDucklingApproved(status);
            });
        }
    };

    const alphaApproveOrStake = () => {
        if (selectedUserTokensOfAlpha.length === 0) {
            showNotification("error", "Please select token");
            return;
        }
        if (isAlphaApproved) {
            let tokenIds = selectedUserTokensOfAlpha.map((item, index) => { return item.id });
            dispatch(
                stakeActionOfAlpha(
                    active,
                    account,
                    library,
                    tokenIds,
                    (status) => {
                        if (status) setSelectedUserTokensOfAlpha([]);
                    }
                )
            );
        } else {
            setApprovalForAllAlpha(active, account, library, (status) => {
                setIsAlphaApproved(status);
            });
        }
    };

    const duckUnstake = () => {
        if (selectedStakedTokensOfDuck.length === 0) {
            showNotification("error", "Please select token!");
            return;
        }
        let tokenIds = selectedStakedTokensOfDuck.map((item, index) => { return item.id });
        dispatch(
            unstakeActionOfDuck(
                active,
                account,
                library,
                tokenIds,
                (status) => {
                    if (status) setSelectedStakedTokensOfDuck([]);
                }
            )
        );
    };

    const ducklingUnstake = () => {
        if (selectedStakedTokensOfDuckling.length === 0) {
            showNotification("error", "Please select token!");
            return;
        }
        let tokenIds = selectedStakedTokensOfDuckling.map((item, index) => { return item.id });
        dispatch(
            unstakeActionOfDuckling(
                active,
                account,
                library,
                tokenIds,
                (status) => {
                    if (status) setSelectedStakedTokensOfDuckling([]);
                }
            )
        );
    };

    const alphaUnstake = () => {
        if (selectedStakedTokensOfAlpha.length === 0) {
            showNotification("error", "Please select token!");
            return;
        }
        let tokenIds = selectedStakedTokensOfAlpha.map((item, index) => { return item.id });
        dispatch(
            unstakeActionOfAlpha(
                active,
                account,
                library,
                tokenIds,
                (status) => {
                    if (status) setSelectedStakedTokensOfAlpha([]);
                }
            )
        );
    };

    const onClickApproveOrStake = () => {
        if (!active) {
            showNotification("error", "Please connect to metamask!");
            return;
        }
        if (stakingTab === 0) duckApproveOrStake();
        if (stakingTab === 1) ducklingApproveOrStake();
        if (stakingTab === 2) alphaApproveOrStake();
    };

    const onClickUnstake = () => {
        if (!active) {
            showNotification("error", "Please connect to metamask!");
            return;
        }
        if (unStakingTab === 0) duckUnstake();
        if (unStakingTab === 1) ducklingUnstake();
        if (unStakingTab === 2) alphaUnstake();
    };

    const onClickMaxStake = () => {
        if (stakingTab === 0) {
            setSelectedUserTokensOfDuck(userTokenIdsOfDuck.map((item, index) => { return item.id }));
        }
        else if (stakingTab === 1)
            setSelectedUserTokensOfDuckling(userTokenIdsOfDuckling.map((item, index) => { return item.id }));
        else if (stakingTab === 2)
            setSelectedUserTokensOfAlpha(userTokenIdsOfAlpha.map((item, index) => { return item.id }));
    };

    const onClickMaxUnstake = () => {
        if (unStakingTab === 0)
            setSelectedStakedTokensOfDuck(stakedTokenIdsOfDuck.map((item, index) => { return item.id }));
        else if (unStakingTab === 1)
            setSelectedStakedTokensOfDuckling(stakedTokenIdsOfDuckling.map((item, index) => { return item.id }));
        else if (unStakingTab === 2)
            setSelectedStakedTokensOfAlpha(stakedTokenIdsOfAlpha.map((item, index) => { return item.id }));
    };

    const onUserTokensChange = (selectedOption) => {

        console.log(selectedOption, "selectedOption");


        if (stakingTab === 0) {
            setSelectedUserTokensOfDuck(selectedOption);
        } else if (stakingTab === 1) {
            setSelectedUserTokensOfDuckling(selectedOption);
        } else if (stakingTab === 2) {
            setSelectedUserTokensOfAlpha(selectedOption);
        }
    };

    const onStakedTokensChange = (selectedOption) => {


        if (unStakingTab === 0) {
            setSelectedStakedTokensOfDuck(selectedOption);
        } else if (unStakingTab === 1) {
            setSelectedStakedTokensOfDuckling(selectedOption);
        } else if (unStakingTab === 2) {
            setSelectedStakedTokensOfAlpha(selectedOption);
        }
    };

    const stakingApproveText = () => {
        if (stakingTab === 0) {
            if (isDuckApproved) return "STAKE";
            else return "APPROVE";
        } else if (stakingTab === 1) {
            if (isDucklingApproved) return "STAKE";
            else return "APPROVE";
        } else if (stakingTab === 2) {
            if (isAlphaApproved) return "STAKE";
            else return "APPROVE";
        }
    };

    useEffect(() => {
        if (stakingTab == 0) {
            if (totalStakedTokenIdsOfDuck.length === 0 || maxSupplyDuck === 0) {
                setStakeProgress(0);
            }
            else {
                let progress = totalStakedTokenIdsOfDuck.length / maxSupplyDuck * 100;
                setStakeProgress(progress.toFixed(2));
            }
        }
        if (stakingTab == 1) {
            if (totalStakedTokenIdsOfDuckling.length === 0 || maxSupplyDuckling === 0) {
                setStakeProgress(0);
            }
            else {
                let progress = totalStakedTokenIdsOfDuckling.length / maxSupplyDuckling * 100;
                setStakeProgress(progress.toFixed(2));
            }
        }
        if (stakingTab == 2) {
            if (totalStakedTokenIdsOfAlpha.length === 0 || maxSupplyAlpha === 0) {
                setStakeProgress(0);
            }
            else {
                let progress = totalStakedTokenIdsOfAlpha.length / maxSupplyAlpha * 100;
                setStakeProgress(progress.toFixed(2));
            }
        }

    }, [stakingTab, userTokenIdsOfDuck, userTokenIdsOfDuckling, userTokenIdsOfAlpha])


    return (
        <div>
            <Statistics page={0} />
            <div className="progress">
                <p style={{ color: stakeProgress > 40 ? "white" : "" }}>{stakeProgress}% Staked</p>
                <progress id="file" value={stakeProgress} max="100" style={{ width: "100%", height: "25px" }}> {stakeProgress}% Staked </progress>
            </div>
            <div className="GridContainer">
                <div className="Card_Wrapper">
                    {/* <img
                        className="Card_DesktopBackground"
                        src={svgs.green_card_background}
                        alt="Background"
                        draggable="false"
                    /> */}
                    <img
                        className="Card_DesktopBackground"
                        src="/images/green.svg"
                        alt="Background"
                        draggable="false"
                    />
                    <img
                        className="Card_MobileBackground"
                        src="/images/green-mobile.png"
                        alt="Background"
                        draggable="false"
                    />
                    {/* <h1><img alt="" src="/images/staking.png" /></h1> */}
                    <div className="Card_Selector">
                        <button
                            className={
                                `${stakingTab === 0 ? "Card_Green duck_button" : undefined}`
                            }
                            onClick={() => setStakingTab(0)}
                        >
                            DUCK
                        </button>
                        <button
                            className={
                                stakingTab === 1 ? "Card_Green duckling_button" : undefined
                            }
                            onClick={() => setStakingTab(1)}
                        >
                            DUCKLING
                        </button>
                        <button
                            className={
                                stakingTab === 2 ? "Card_Green alpha_button" : undefined
                            }
                            onClick={() => setStakingTab(2)}
                        >
                            ALPHA
                        </button>
                    </div>
                    <div className="Card_GridContainer">
                        <div>
                            <img
                                src={stakingTab === 0 ? "/images/Duck.png" : stakingTab === 1 ? "/images/Duckling.png" : "/images/alpha.png"}
                                alt="Duck"
                                draggable="false"
                            />
                            <h2>
                                {(stakingTab === 0 &&
                                    "DUCK: " + userTokenIdsOfDuck.length) ||
                                    (stakingTab === 1 &&
                                        "DUCKLING: " +
                                        (userTokenIdsOfDuckling.length
                                            ? userTokenIdsOfDuckling.length
                                            : 0)) ||
                                    (stakingTab === 2 &&
                                        "ALPHA: " +
                                        (userTokenIdsOfAlpha.length
                                            ? userTokenIdsOfAlpha.length
                                            : 0))}
                            </h2>
                            <h3>Available</h3>
                        </div>
                        <div>
                            <img
                                src={stakingTab === 2 ? "/images/multicoin.png" : "/images/singlecoin.png"}
                                alt="Grapes"
                                draggable="false"
                            />
                            <h2>
                                {(stakingTab === 0 && "$Grapes: 10") ||
                                    (stakingTab === 1 && "$Grapes: 5") ||
                                    (stakingTab === 2 && "$Grapes: 17")}
                            </h2>
                            <h3>Per staked</h3>
                        </div>
                    </div>
                    <div className="Card_InputContainer">
                        <label style={{ marginBottom: "-10px" }}>
                            {(stakingTab === 0 && "Duck to stake") ||
                                (stakingTab === 1 && "Duckling to stake") ||
                                (stakingTab === 2 && "Alpha to stake")}
                        </label>

                        <CustomSelect
                            value={
                                (stakingTab === 0 &&
                                    selectedUserTokensOfDuck) ||
                                (stakingTab === 1 &&
                                    selectedUserTokensOfDuckling) ||
                                (stakingTab === 2 && selectedUserTokensOfAlpha)
                            }
                            options={
                                (stakingTab === 0 && userTokenIdsOfDuck) ||
                                (stakingTab === 1 && userTokenIdsOfDuckling) ||
                                (stakingTab === 2 && userTokenIdsOfAlpha)
                            }
                            onChange={onUserTokensChange}
                        />
                        {/* <Select
                            styles={selectCustomStyle}
                            value={
                                (stakingTab === 0 &&
                                    selectedUserTokensOfDuck) ||
                                (stakingTab === 1 &&
                                    selectedUserTokensOfDuckling) ||
                                (stakingTab === 2 && selectedUserTokensOfAlpha)
                            }
                            options={
                                (stakingTab === 0 && userTokenIdsOfDuck) ||
                                (stakingTab === 1 && userTokenIdsOfDuckling) ||
                                (stakingTab === 2 && userTokenIdsOfAlpha)
                            }
                            isMulti={true}
                            NoOptionsMessage="No options"
                            onChange={(selected) =>
                                onUserTokensChange(selected)
                            }
                        /> */}
                        <div className="Card_ButtonContainer">
                            <button
                                className="Card_ActionBtn Card_Green"
                                onClick={() => onClickApproveOrStake()}
                            >
                                {stakingApproveText()}
                            </button>
                            <button
                                className="Card_MaxBtn"
                                onClick={() => onClickMaxStake()}
                            >
                                MAX
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Card_Wrapper">
                    {/* <img
                        className="Card_DesktopBackground"
                        src={svgs.red_card_background}
                        alt="Background"
                        draggable="false"
                    /> */}
                    <img
                        className="Card_DesktopBackground"
                        src="/images/red.svg"
                        alt="Background"
                        draggable="false"
                    />
                    <img
                        className="Card_MobileBackground"
                        src='/images/red-mobile.png'
                        alt="Background"
                        draggable="false"
                    />
                    {/* <h1><img alt="" src="/images/unstaking.png" /></h1> */}
                    <div className="Card_Selector">
                        <button
                            className={
                                unStakingTab === 0 ? "Card_Red duck_button" : undefined
                            }
                            onClick={() => setUnStakingTab(0)}
                        >
                            DUCK
                        </button>
                        <button
                            className={
                                unStakingTab === 1 ? "Card_Red duckling_button" : undefined
                            }
                            onClick={() => setUnStakingTab(1)}
                        >
                            DUCKLING
                        </button>
                        <button
                            className={
                                unStakingTab === 2 ? "Card_Red alpha_button" : undefined
                            }
                            onClick={() => setUnStakingTab(2)}
                        >
                            ALPHA
                        </button>
                    </div>
                    <div className="Card_GridContainer">
                        <div>
                            <img
                                src={unStakingTab === 0 ? "/images/Duck.png" : unStakingTab === 1 ? "/images/Duckling.png" : "/images/alpha.png"}
                                alt="Duck"
                                draggable="false"
                            />
                            <h2>
                                {(unStakingTab === 0 &&
                                    "DUCK: " + stakedTokenIdsOfDuck.length) ||
                                    (unStakingTab === 1 &&
                                        "DUCKLING: " +
                                        (stakedTokenIdsOfDuckling.length
                                            ? stakedTokenIdsOfDuckling.length
                                            : 0)) ||
                                    (unStakingTab === 2 &&
                                        "ALPHA: " +
                                        (stakedTokenIdsOfAlpha.length
                                            ? stakedTokenIdsOfAlpha.length
                                            : 0))}
                            </h2>
                            <h3>Staked</h3>
                        </div>
                    </div>
                    <div className="Card_InputContainer">
                        <label style={{ marginBottom: "-10px" }}>
                            {(unStakingTab === 0 && "DUCK to unstake") ||
                                (unStakingTab === 1 && "DUCKLING to unstake") ||
                                (unStakingTab === 2 && "Alpha to unstake")}
                        </label>
                        <CustomSelect
                            value={
                                (unStakingTab === 0 &&
                                    selectedStakedTokensOfDuck) ||
                                (unStakingTab === 1 &&
                                    selectedStakedTokensOfDuckling) ||
                                (unStakingTab === 2 && selectedStakedTokensOfAlpha)
                            }
                            options={
                                (unStakingTab === 0 && stakedTokenIdsOfDuck) ||
                                (unStakingTab === 1 && stakedTokenIdsOfDuckling) ||
                                (unStakingTab === 2 && stakedTokenIdsOfAlpha)
                            }
                            onChange={onStakedTokensChange}
                        />
                        {/* <Select
                            value={
                                (unStakingTab === 0 &&
                                    selectedStakedTokensOfDuck) ||
                                (unStakingTab === 1 &&
                                    selectedStakedTokensOfDuckling) ||
                                (unStakingTab === 2 && selectedStakedTokensOfAlpha)
                            }
                            options={
                                (unStakingTab === 0 && stakedTokenIdsOfDuck) ||
                                (unStakingTab === 1 &&
                                    stakedTokenIdsOfDuckling) ||
                                (unStakingTab === 2 && stakedTokenIdsOfAlpha)
                            }
                            isMulti={true}
                            NoOptionsMessage="No options"
                            onChange={(selected) =>
                                onStakedTokensChange(selected)
                            }
                        /> */}
                        <div className="Card_ButtonContainer">
                            <button
                                className="Card_ActionBtn Card_Red"
                                onClick={() => onClickUnstake()}
                            >
                                UNSTAKE
                            </button>
                            <button
                                className="Card_MaxBtn"
                                onClick={() => onClickMaxUnstake()}
                            >
                                MAX
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridContainer;
