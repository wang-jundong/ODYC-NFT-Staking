import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { evolveNFT } from "../../../api/MinotaurWeb3";
import { gifs } from "../../../assets/gifs";
import { pngs } from "../../../assets/pngs";
import { svgs } from "../../../assets/svgs";
import { selectStakeTokensOfWulfz } from "../../../redux/reducers/tokensReducer";
import { showNotification } from "../../utils/NotificationUtils";
import { selectCustomStyle } from "../../utils/StyleUtils";
import Statistics from "./Statistics";

const EvolutionBook = () => {
    const [selectedToken, setSelectedToken] = useState();
    const stakeTokensOfWulfz = useSelector(selectStakeTokensOfWulfz);

    const { active, account, library } = useWeb3React();
    const dispatch = useDispatch();

    const evolve = async () => {
        if (!active) {
            showNotification("error", "Please connect to metamask!");
            return;
        }
        if (selectedToken.length === 0) {
            showNotification("error", "Please select token");
            return;
        }
        dispatch(evolveNFT(active, account, library, selectedToken.value));
    };

    return (
        <div>
            <Statistics page={2} />
            <div className="EvolutionBook_Wrapper">
                <img
                    className="EvolutionBook_DesktopBackground"
                    src={svgs.red_book_background}
                    alt="Background"
                    draggable="false"
                />
                <img
                    className="EvolutionBook_MobileBackground"
                    src={pngs.evolution_book_background_mobile}
                    alt="Background"
                    draggable="false"
                />
                <div className="EvolutionBook_Left">
                    <h1>EVOLUTION</h1>
                    <div className="EvolutionBook_FlexContainer">
                        <div>
                            <img
                                src={svgs.wolf_icon}
                                alt="Wolf"
                                draggable="false"
                            />
                            <h2>BURN 1 WULFZ</h2>
                        </div>
                        <h3>+</h3>
                        <div>
                            <img
                                src={svgs.awoo_icon}
                                alt="Awoo"
                                draggable="false"
                            />
                            <h2>1500 $AWOO</h2>
                        </div>
                    </div>
                    <div className="EvolutionBook_ButtonContainer">
                        <label style={{ marginBottom: "-10px" }}>
                            Wulfz to burn
                        </label>

                        <Select
                            styles={selectCustomStyle}
                            value={selectedToken}
                            options={stakeTokensOfWulfz}
                            NoOptionsMessage="No options"
                            onChange={(selectedOption) =>
                                setSelectedToken(selectedOption)
                            }
                        />

                        <button onClick={() => evolve()}>EVOLVE</button>
                    </div>
                </div>
                <div className="EvolutionBook_Right">
                    <h1>Full Moon is coming!</h1>
                    <img
                        src={gifs.fullmoon}
                        alt="Full Moon"
                        draggable="false"
                    />
                </div>
            </div>
        </div>
    );
};

export default EvolutionBook;
