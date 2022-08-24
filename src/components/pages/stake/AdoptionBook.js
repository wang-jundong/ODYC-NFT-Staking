import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { adoptNFT } from "../../../api/MinotaurWeb3";
import { mint, duckduck, goose } from "../../../api/AlphaWeb3";
import { isAlphaApprovedForAllDuck, setAlphaApprovalForAllDuck } from "../../../api/DuckWeb3"
import { isAlphaApprovedForAllDuckling, setAlphaApprovalForAllDuckling } from "../../../api/DucklingWeb3"
import { getAllowance, approveForBee } from "../../../api/BeeWeb3";
import { gifs } from "../../../assets/gifs";
import { pngs } from "../../../assets/pngs";
import { svgs } from "../../../assets/svgs";
import { selectStakeTokensOfWulfzAndAlpha, selectUserTokenIdsOfDuck, selectUserTokenIdsOfDuckling } from "../../../redux/reducers/tokensReducer";
import { TOKENS_LOADING } from "../../../redux/constants"
import { showNotification } from "../../utils/NotificationUtils";
import { selectCustomStyle } from "../../utils/StyleUtils";
import { alphaContractInstance } from "../../../components/utils/ContractUtils"
import Statistics from "./Statistics";

const AdoptionBook = () => {
    const [selectedToken, setSelectedToken] = useState();
    const [selectedDuckToken, setSelectedDuckToken] = useState();
    const [selectedDuckTokenId, setSelectedDuckTokenId] = useState();
    const [selectedDucklingToken, setSelectedDucklingToken] = useState();
    const [selectedDucklingTokenId, setSelectedDucklingTokenId] = useState();
    const [amount, setAmount] = useState(0);
    const [isApproved, setIsApproved] = useState(false);
    const stakeTokensOfWulfzAndAlpha = useSelector(
        selectStakeTokensOfWulfzAndAlpha
    );
    const userTokenIdsOfDuck = useSelector(selectUserTokenIdsOfDuck);
    const userTokenIdsOfDuckling = useSelector(selectUserTokenIdsOfDuckling);
    const [stakingTab, setStakingTab] = useState(0);
    const { active, account, library } = useWeb3React();
    const dispatch = useDispatch();

    const onChangeDuckSelected = (selectedOption) => {
        setSelectedDuckToken(selectedOption);
        const selectedTokenId = selectedOption.map((item, index) => parseInt(item.value));
        setSelectedDuckTokenId(selectedTokenId);
    }
    const onChangeDucklingSelected = (selectedOption) => {
        setSelectedDucklingToken(selectedOption);
        const selectedTokenId = selectedOption.map((item, index) => parseInt(item.value));
        setSelectedDucklingTokenId(selectedTokenId);
    }

    useEffect(async () => {
        const isDuckApprove = await isAlphaApprovedForAllDuck(active, account, library);
        const isDucklingApprove = await isAlphaApprovedForAllDuckling(active, account, library);
        const allowance = parseInt(await getAllowance(active, account, library));
        console.log(isDuckApprove, isDucklingApprove, allowance, "isDuckApprove for alpha");
        if (stakingTab === 0) {
            setIsApproved(true);
        } else if (stakingTab === 1) {
            if (isDuckApprove && isDucklingApprove && (allowance > 0))
                setIsApproved(true)
            else setIsApproved(false);
        } else if (stakingTab === 2) {
            if (isDucklingApprove && (allowance > 0))
                setIsApproved(true)
            else setIsApproved(false);
        }
    }, [stakingTab])

    useEffect(() => {
        setSelectedDuckToken([]);
        setSelectedDuckTokenId([]);
        setSelectedDucklingToken([]);
        setSelectedDucklingTokenId([]);
        setAmount(0);
    }, [stakingTab])


    const adoptRequset = async () => {
        if (!active) {
            showNotification("error", "Please connect to metamask!");
            return;
        }
        if (stakingTab === 0) {
            if (amount === 0) {
                showNotification("error", "Please select correct amount!");
                return;
            }
            dispatch(
                mint(active, account, library, amount, (status) => {
                    dispatch({ type: TOKENS_LOADING, payload: false });
                })
            );
        } else if (stakingTab === 1) {
            console.log(isApproved, "isapproved");
            if (isApproved) {
                if (amount === 0) {
                    showNotification("error", "Please select correct amount!");
                    return;
                }
                if (!selectedDuckTokenId && !selectedDucklingTokenId) {
                    showNotification("error", "Please select token");
                    return;
                }
                dispatch(
                    duckduck(active, account, library, amount, selectedDuckTokenId, selectedDucklingTokenId, (status) => {
                        if (status) {
                            selectedDuckToken.map((item, index) => {
                                const indexOfObject = userTokenIdsOfDuck.findIndex(object => {
                                    return object.value === item.value;
                                });
                                userTokenIdsOfDuck.splice(indexOfObject, 1);
                            })
                            selectedDucklingToken.map((item, index) => {
                                const indexOfObject = userTokenIdsOfDuckling.findIndex(object => {
                                    return object.value === item.value;
                                });
                                userTokenIdsOfDuckling.splice(indexOfObject, 1);
                            })
                            dispatch({ type: TOKENS_LOADING, payload: false });
                        }

                        setSelectedDuckToken([]);
                        setSelectedDucklingToken([]);
                    })
                )
            }
            else {
                dispatch({ type: TOKENS_LOADING, payload: true });
                await setAlphaApprovalForAllDuck(active, account, library, (status) => {
                    if (!status)
                        dispatch({ type: TOKENS_LOADING, payload: false });
                    console.log(status);
                })
                await setAlphaApprovalForAllDuckling(active, account, library, (status) => {
                    console.log(status);
                    if (!status)
                        dispatch({ type: TOKENS_LOADING, payload: false });
                })
                await approveForBee(active, account, library, (status) => {
                    if (status) {
                        setIsApproved(true);
                    }
                    dispatch({ type: TOKENS_LOADING, payload: false });
                })
            }

        } else if (stakingTab === 2) {
            if (isApproved) {
                if (amount === 0) {
                    showNotification("error", "Please select correct amount!");
                    return;
                }
                if (!selectedDucklingTokenId) {
                    showNotification("error", "Please select token");
                    return;
                }
                dispatch(
                    goose(active, account, library, amount, selectedDucklingTokenId, (status) => {
                        if (status) {
                            selectedDucklingToken.map((item, index) => {
                                const indexOfObject = userTokenIdsOfDuckling.findIndex(object => {
                                    return object.value === item.value;
                                });
                                userTokenIdsOfDuckling.splice(indexOfObject, 1);
                            })
                        }
                        dispatch({ type: TOKENS_LOADING, payload: false });
                        setSelectedDucklingToken([]);
                    })
                )
            }
            else {
                dispatch({ type: TOKENS_LOADING, payload: true });
                await setAlphaApprovalForAllDuckling(active, account, library, (status) => {
                    if (!status)
                        dispatch({ type: TOKENS_LOADING, payload: false });
                    console.log(status);
                })
                await approveForBee(active, account, library, (status) => {
                    if (status) {
                        setIsApproved(true);
                    }
                    dispatch({ type: TOKENS_LOADING, payload: false });
                })
            }
        }
    };

    return (
        <div>
            <Statistics page={1} />

            <div className="AdoptionBook_Wrapper">
                {/* <img
                    className="AdoptionBook_DesktopBackground"
                    src={svgs.green_book_background}
                    alt="Background"
                    draggable="false"
                /> */}
                <img
                    className="AdoptionBook_DesktopBackground"
                    src="/images/adopt_background.png"
                    alt="Background"
                    draggable="false"
                />
                <img
                    className="AdoptionBook_MobileBackground"
                    src={pngs.adoption_book_background_mobile}
                    alt="Background"
                    draggable="false"
                />
                <div className="AdoptionBook_Left">
                    <h1 className="text-accent">ADOPTION</h1>
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

                    <div className="AdoptionBook_FlexContainer">

                        <div>
                            <img
                                src={stakingTab === 0 ? "/images/Duck.png" : stakingTab === 1 ? "/images/Duckling.png" : "/images/alpha.png"}
                                alt="Duck"
                                draggable="false"
                            />
                            <h2>1 WULFZ</h2>
                        </div>
                        <h3>+</h3>
                        <div>
                            <img
                                src={svgs.awoo_icon}
                                alt="Awoo"
                                draggable="false"
                            />
                            <h2>600 $AWOO</h2>
                        </div>
                    </div>

                    <div className="AdoptionBook_ButtonContainer">
                        <div className="AdoptionBook_ButtonContainer-selectwrap" style={{ display: stakingTab === 0 ? "none" : "" }}>
                            <div className="AdoptionBook_ButtonContainer-selectwrap-inner" style={{ display: stakingTab === 2 ? "none" : "" }}>
                                <label style={{ marginBottom: "-10px" }}>
                                    Duck to burn
                                </label>
                                <Select
                                    isMulti={true}
                                    styles={selectCustomStyle}
                                    value={selectedDuckToken}
                                    options={userTokenIdsOfDuck}
                                    NoOptionsMessage="No options"
                                    onChange={(selectedOption) =>
                                        onChangeDuckSelected(selectedOption)
                                    }
                                />
                            </div>
                            <div className="AdoptionBook_ButtonContainer-selectwrap-inner selectwrap_duckling" style={{ width: stakingTab === 2 ? "100%" : "" }}>
                                <label style={{ marginBottom: "-10px" }}>
                                    Duckling to burn
                                </label>
                                <Select
                                    isMulti={true}
                                    styles={selectCustomStyle}
                                    value={selectedDucklingToken}
                                    options={userTokenIdsOfDuckling}
                                    NoOptionsMessage="No options"
                                    onChange={(selectedOption) =>
                                        onChangeDucklingSelected(selectedOption)
                                    }
                                />
                            </div>
                        </div>
                        <div className="AdoptionBook_ButtonContainer-inputwrap" style={{ marginTop: stakingTab === 0 ? "30px" : "", marginBottom: stakingTab === 0 ? "30px" : "" }}>
                            <label>Amount</label>
                            <input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
                        </div>

                        <button onClick={() => adoptRequset()}>{isApproved ? "ADOPT" : "APPROVE"}</button>
                    </div>
                </div>
                <div className="AdoptionBook_Right">
                    {/* <h1>Pupz will hatch from the Egg!</h1>
                    <img
                        src={gifs.daycare}
                        alt="Egg Hatching"
                        draggable="false"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default AdoptionBook;
