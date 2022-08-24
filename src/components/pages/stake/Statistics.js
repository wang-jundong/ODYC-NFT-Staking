import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalSupply } from "../../../api/AlphaWeb3"
import { getReward, claim, getBalance } from "../../../api/BeeWeb3"
import {
	totalSupplyMellon,
	totalSupplyYparchos,
} from "../../../api/MinotaurWeb3";
import { TOKENS_LOADING } from "../../../redux/constants";
import { balanceOfOvolos } from "../../../api/OvolosWeb3";
import {
	getClaimableTokenOfPool,
	getRewardOfPool,
} from "../../../api/StakingPoolWeb3";
import { svgs } from "../../../assets/svgs";
import {
	selectBalance,
	selectUnstakeTokens,
} from "../../../redux/reducers/tokensReducer";
import { showNotification } from "../../utils/NotificationUtils";
import StatisticsItem from "./StatisticsItem";

const Statistics = ({ page }) => {
	const { active, account, library } = useWeb3React();
	const dispatch = useDispatch();

	const [pending, setPending] = useState(0);
	const [remainingMellon, setRemainingMellon] = useState(0);
	const [remainingYparchos, setRemainingYparchos] = useState(0);

	const { userTokenIdsOfDuck, stakedTokenIdsOfDuck, userTokenIdsOfDuckling, stakedTokenIdsOfDuckling, userTokenIdsOfAlpha, stakedTokenIdsOfAlpha, maxSupplyAlpha } = useSelector((state) => state.tokens)
	const [balance, setBalance] = useState(0);

	const unstakeTokens = useSelector(selectUnstakeTokens);
	const [stakedNumber, setStakedNumber] = useState(0);
	const [dayYield, setdayYield] = useState(0);
	// const stakedNumber = stakedTokenIdsOfDuck.length + stakedTokenIdsOfDuckling.length + stakedTokenIdsOfAlpha.length;

	useEffect(() => {
		setStakedNumber(stakedTokenIdsOfDuck.length + stakedTokenIdsOfDuckling.length + stakedTokenIdsOfAlpha.length);
		setdayYield(userTokenIdsOfDuck.length * 10 + userTokenIdsOfDuckling.length * 5 + userTokenIdsOfAlpha.length * 17);
	}, [stakedTokenIdsOfDuck, stakedTokenIdsOfDuckling, stakedTokenIdsOfAlpha, userTokenIdsOfDuck, userTokenIdsOfDuckling, userTokenIdsOfAlpha])

	// const remainingOfMellon = async () => {
	// 	if (!active) return;
	// 	var result = await totalSupplyMellon(active, account, library);
	// 	setRemainingMellon(result);
	// };

	const remainingOfYparchos = async () => {
		if (!active) return;
		var result = await totalSupplyYparchos(active, library);
		setRemainingYparchos(result);
	};

	// const balanceOf = async () => {
	// 	if (!active) return;
	// 	dispatch(balanceOfOvolos(active, account, library));
	// };

	const balanceOf = async () => {
		if (!active) return;
		const result = await getBalance(active, account, library);
		setBalance((result / Math.pow(10, 18)).toFixed(0));
	};

	const getRewardRequest = async () => {
		if (!active) {
			showNotification("error", "Please connect to metamask!");
			return;
		}
		const reward = await getReward(active, account, library);
		setPending((reward / Math.pow(10, 18)).toFixed(0));
	}

	const getAlphaRemaning = async () => {
		if (!active) {
			showNotification("error", "Please connect to metamask!");
			return;
		}
		var result = await getTotalSupply(active, account, library);
		setRemainingMellon(maxSupplyAlpha - result);
	}

	const claimAll = async () => {
		if (!active) {
			showNotification("error", "Please connect to metamask!");
			return;
		}

		dispatch(claim(active, account, library, (status) => {
			dispatch({ type: TOKENS_LOADING, payload: false });
		}))
	}

	// const getClaimableToken = async () => {
	// 	if (!active) return;
	// 	var result = await getClaimableTokenOfPool(active, account, library);
	// 	setPending(result);
	// };

	// const getReward = async () => {
	// 	if (!active) {
	// 		showNotification("error", "Please connect to metamask!");
	// 		return;
	// 	}
	// 	dispatch(getRewardOfPool(active, account, library));
	// 	// if (result) balanceOf();
	// };

	useEffect(() => {
		balanceOf();
		getAlphaRemaning();
		remainingOfYparchos();
		getRewardRequest()
		// getClaimableToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
		console.log("library", library);
	}, [active, maxSupplyAlpha]);

	return (
		<div className="Statistics_Wrapper">
			<div className="Statistics_GridContainer">
				<StatisticsItem
					imgUrl="/images/unnamed.png"
					alt="wolf"
					title={stakedNumber}
					subTitle="STAKED"
					imgType='png'
				/>
				{page === 0 && (
					<StatisticsItem
						imgUrl="/images/yield.png"
						alt="cash"
						title={`${dayYield}/DAY`}
						subTitle="YIELD"
						imgType='png'
					/>
				)}
				{page === 1 && (
					<StatisticsItem
						imgUrl='/images/egg-icon.svg'
						alt="egg"
						title={remainingMellon}
						subTitle="REMAINING"
					/>
				)}
				{page === 2 && (
					<StatisticsItem
						imgUrl={svgs.moon_icon}
						alt="moon"
						title={remainingYparchos}
						subTitle="REMAINING"
					/>
				)}
				<StatisticsItem
					imgUrl='/images/balance.png'
					alt="baoxiang"
					title={balance}
					subTitle="BALANCE"
					imgType='png'
					className="yield"
				/>
				<StatisticsItem
					imgUrl='/images/clock.png'
					alt="clock"
					title={pending}
					subTitle="PENDING"
					imgType='png'
				/>
				<button onClick={claimAll} >CLAIM</button>
			</div>
		</div>
	);
};

export default Statistics;
