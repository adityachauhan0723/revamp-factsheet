// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { factsheetReducer } from "./reducers/factsheetReducer";

const rootReducer = combineReducers({
  factsheet: factsheetReducer,
  // other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
