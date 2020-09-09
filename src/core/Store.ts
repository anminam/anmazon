import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import DataReducer from "./data/reducer";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  data: DataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const isDev = process.env.NODE_ENV === "development";

let store: any;
if (isDev) {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
