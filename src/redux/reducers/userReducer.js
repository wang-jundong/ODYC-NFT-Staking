import { LOGIN_SUCCESS, GET_USER, CHANGE_AVATAR } from "../constants";

const initialState = {};

export const fetchUser = () => {

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload;

        case LOGIN_SUCCESS:
            return action.payload;

        case CHANGE_AVATAR:
            return action.payload;

        default:
            return state;
    }
}

export const selectUser = (state) => state.user;
export const selectUserId = (state) => state.user._id;

export default userReducer;