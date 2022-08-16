import { combineReducers } from "redux";

import getUsers from './Reducer'

const rootReducer = combineReducers({ getUsers });

export default rootReducer;