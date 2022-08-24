import {
    TOKENS_BALANCE,
    TOKENS_LOADING,
    TOKENS_STAKE_INFORMATIONS,
    TOKENS_STAKE_TO_UNSTAKE,
    TOKENS_UNSTAKE_INFORMATIONS,
    TOKENS_UNSTAKE_TO_STAKE,
    TOKENS_UPDATE_ONE,
    TOKENS_USER_IDS_DUCK,
    TOKENS_STAKE_IDS_DUCK,
    TOKENS_USER_IDS_DUCKLING,
    TOKENS_STAKE_IDS_DUCKLING,
    TOKENS_USER_IDS_ALPHA,
    TOKENS_STAKE_IDS_ALPHA,
    TOKENS_STAKE_ACTION_DUCK,
    TOKENS_STAKE_ACTION_DUCKLING,
    TOKENS_STAKE_ACTION_ALPHA,
    TOKENS_UNSTAKE_ACTION_DUCK,
    TOKENS_UNSTAKE_ACTION_DUCKLING,
    TOKENS_UNSTAKE_ACTION_ALPHA,
    TOTAL_TOKENS_STAKE_IDS_DUCK,
    TOTAL_TOKENS_STAKE_IDS_DUCKLING,
    TOTAL_TOKENS_STAKE_IDS_ALPHA,
    MAX_SUPPLY_DUCK,
    MAX_SUPPLY_DUCKLING,
    MAX_SUPPLY_ALPHA
} from "../constants";

const initialState = {
    isLoading: false,
    balance: 0,
    maxSupplyDuck: 0,
    maxSupplyDuckling: 0,
    maxSupplyAlpha: 0,

    userTokenIdsOfDuck: [],
    stakedTokenIdsOfDuck: [],
    totalStakedTokenIdsOfDuck: [],
    userTokenIdsOfDuckling: [],
    stakedTokenIdsOfDuckling: [],
    totalStakedTokenIdsOfDuckling: [],
    userTokenIdsOfAlpha: [],
    stakedTokenIdsOfAlpha: [],
    totalStakedTokenIdsOfAlpha: [],

    tokenIds: [],
    tokenStakeInformations: [],
    tokenUnstakeInformations: [],
};

const tokensReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKENS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case MAX_SUPPLY_DUCK: {
            return {
                ...state,
                maxSupplyDuck: action.payload,
            };
        }
        case MAX_SUPPLY_DUCKLING: {
            return {
                ...state,
                maxSupplyDuckling: action.payload,
            };
        }
        case MAX_SUPPLY_ALPHA: {
            return {
                ...state,
                maxSupplyAlpha: action.payload,
            };
        }
        case TOKENS_USER_IDS_DUCK: {
            return {
                ...state,
                userTokenIdsOfDuck: action.payload,
            };
        }
        case TOKENS_STAKE_IDS_DUCK: {
            return {
                ...state,
                stakedTokenIdsOfDuck: action.payload,
            };
        }
        case TOTAL_TOKENS_STAKE_IDS_DUCK: {
            return {
                ...state,
                totalStakedTokenIdsOfDuck: action.payload,
            };
        }
        case TOKENS_USER_IDS_DUCKLING: {
            return {
                ...state,
                userTokenIdsOfDuckling: action.payload,
            };
        }
        case TOKENS_STAKE_IDS_DUCKLING: {
            return {
                ...state,
                stakedTokenIdsOfDuckling: action.payload,
            };
        }
        case TOTAL_TOKENS_STAKE_IDS_DUCKLING: {
            return {
                ...state,
                totalStakedTokenIdsOfDuckling: action.payload,
            };
        }
        case TOKENS_USER_IDS_ALPHA: {
            return {
                ...state,
                userTokenIdsOfAlpha: action.payload,
            };
        }
        case TOKENS_STAKE_IDS_ALPHA: {
            return {
                ...state,
                stakedTokenIdsOfAlpha: action.payload,
            };
        }
        case TOTAL_TOKENS_STAKE_IDS_ALPHA: {
            return {
                ...state,
                totalStakedTokenIdsOfAlpha: action.payload,
            };
        }
        case TOKENS_STAKE_ACTION_DUCK: {
            return {
                ...state,
                userTokenIdsOfDuck: state.userTokenIdsOfDuck.filter(
                    (one) => !action.payload.includes(one)
                ),
                stakedTokenIdsOfDuck: [
                    ...state.stakedTokenIdsOfDuck,
                    ...action.payload,
                ],
            };
        }
        case TOKENS_STAKE_ACTION_DUCKLING: {
            return {
                ...state,
                userTokenIdsOfDuckling: state.userTokenIdsOfDuckling.filter(
                    (one) => !action.payload.includes(one)
                ),
                stakedTokenIdsOfDuckling: [
                    ...state.stakedTokenIdsOfDuckling,
                    ...action.payload,
                ],
            };
        }
        case TOKENS_STAKE_ACTION_ALPHA: {
            return {
                ...state,
                userTokenIdsOfAlpha: state.userTokenIdsOfAlpha.filter(
                    (one) => !action.payload.includes(one)
                ),
                stakedTokenIdsOfAlpha: [
                    ...state.stakedTokenIdsOfAlpha,
                    ...action.payload,
                ],
            };
        }

        case TOKENS_UNSTAKE_ACTION_DUCK: {
            return {
                ...state,
                userTokenIdsOfDuck: [
                    ...state.userTokenIdsOfDuck,
                    ...action.payload,
                ],
                stakedTokenIdsOfDuck: state.stakedTokenIdsOfDuck.filter(
                    (one) => !action.payload.includes(one)
                ),
            };
        }

        case TOKENS_UNSTAKE_ACTION_DUCKLING: {
            return {
                ...state,
                userTokenIdsOfDuckling: [
                    ...state.userTokenIdsOfDuckling,
                    ...action.payload,
                ],
                stakedTokenIdsOfDuckling: state.stakedTokenIdsOfDuckling.filter(
                    (one) => !action.payload.includes(one)
                ),
            };
        }

        case TOKENS_UNSTAKE_ACTION_ALPHA: {
            return {
                ...state,
                userTokenIdsOfAlpha: [
                    ...state.userTokenIdsOfAlpha,
                    ...action.payload,
                ],
                stakedTokenIdsOfAlpha: state.stakedTokenIdsOfAlpha.filter(
                    (one) => !action.payload.includes(one)
                ),
            };
        }

        case TOKENS_BALANCE: {
            return {
                ...state,
                balance: action.payload,
            };
        }

        case TOKENS_STAKE_INFORMATIONS: {
            return {
                ...state,
                tokenStakeInformations: action.payload,
            };
        }

        case TOKENS_UNSTAKE_INFORMATIONS: {
            return {
                ...state,
                tokenUnstakeInformations: action.payload,
            };
        }

        case TOKENS_STAKE_TO_UNSTAKE: {
            return {
                ...state,
                tokenStakeInformations: state.tokenStakeInformations.filter(
                    (one) => one.value !== action.payload.value
                ),
                tokenUnstakeInformations: [
                    ...state.tokenUnstakeInformations,
                    action.payload,
                ],
            };
        }

        case TOKENS_UNSTAKE_TO_STAKE: {
            return {
                ...state,
                tokenStakeInformations: [
                    ...state.tokenStakeInformations,
                    action.payload,
                ],
                tokenUnstakeInformations: state.tokenUnstakeInformations.filter(
                    (one) => one.value !== action.payload.value
                ),
            };
        }

        case TOKENS_UPDATE_ONE: {
            return {
                ...state,
                tokenInformations: state.tokenStakeInformations.map((one) =>
                    one.value === action.payload.value ? action.payload : one
                ),
            };
        }

        default:
            return state;
    }
};

export const selectIsLoading = (state) => state.tokens.isLoading;
export const selectBalance = (state) => state.tokens.balance;

export const selectUserTokenIdsOfDuck = (state) => {
    let info = state.tokens.userTokenIdsOfDuck.map((one) => {
        return { value: one, label: "Duck #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};
export const selectStakedTokenIdsOfDuck = (state) => {
    let info = state.tokens.stakedTokenIdsOfDuck.map((one) => {
        return { value: one, label: "Duck #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};

export const selectUserTokenIdsOfDuckling = (state) => {
    let info = state.tokens.userTokenIdsOfDuckling.map((one) => {
        return { value: one, label: "Duckling #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};
export const selectStakedTokenIdsOfDuckling = (state) => {
    let info = state.tokens.stakedTokenIdsOfDuckling.map((one) => {
        return { value: one, label: "Duckling #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};
export const selectUserTokenIdsOfAlpha = (state) => {
    let info = state.tokens.userTokenIdsOfAlpha.map((one) => {
        return { value: one, label: "Alpha #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};
export const selectStakedTokenIdsOfAlpha = (state) => {
    let info = state.tokens.stakedTokenIdsOfAlpha.map((one) => {
        return { value: one, label: "Alpha #" + one };
    });
    info.sort((one, other) => one.value - other.value);
    return info;
};


export const selectUnstakeTokens = (state) =>
    state.tokens.tokenUnstakeInformations;

export const selectStakeTokensOfWulfz = (state) =>
    state.tokens.tokenStakeInformations.filter((token) => token.mType === "0");
export const selectUnstakeTokensOfWulfz = (state) =>
    state.tokens.tokenUnstakeInformations.filter(
        (token) => token.mType === "0"
    );

export const selectStakeTokensOfPupz = (state) =>
    state.tokens.tokenStakeInformations.filter((token) => token.mType === "1");
export const selectUnstakeTokensOfPupz = (state) =>
    state.tokens.tokenUnstakeInformations.filter(
        (token) => token.mType === "1"
    );

export const selectStakeTokensOfAlpha = (state) =>
    state.tokens.tokenStakeInformations.filter((token) => token.mType === "2");
export const selectUnstakeTokensOfAlpha = (state) =>
    state.tokens.tokenUnstakeInformations.filter(
        (token) => token.mType === "2"
    );

export const selectStakeTokensOfWulfzAndAlpha = (state) =>
    state.tokens.tokenStakeInformations.filter(
        (token) => token.mType === "0" || token.mType === "2"
    );
export default tokensReducer;
