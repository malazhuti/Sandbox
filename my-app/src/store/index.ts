import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    legacy_createStore
} from "redux";

import logger from 'redux-logger';
import thunk from "redux-thunk";

import UserReducer from "./UserReducer/index";

const AllStore = combineReducers({
    UserReducer
})

export default legacy_createStore(AllStore, applyMiddleware(logger, thunk));
