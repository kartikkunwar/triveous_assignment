const { legacy_createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
import {reducer} from "./reducer"


export const store=legacy_createStore(reducer,applyMiddleware(thunk))