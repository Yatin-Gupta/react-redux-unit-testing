import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export const middlewares = [thunk];
export const initialState = { lang: "en", posts: [] };
// Method 1 of creating store with middleware
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer, initialState);

export default store;
