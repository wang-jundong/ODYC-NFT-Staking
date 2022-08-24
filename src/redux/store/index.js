import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

export default store;
