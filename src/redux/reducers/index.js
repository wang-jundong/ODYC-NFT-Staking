import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import tokensReducer from "./tokensReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	posts: postsReducer,
	user: userReducer,
	tokens: tokensReducer,
});

export default rootReducer;
