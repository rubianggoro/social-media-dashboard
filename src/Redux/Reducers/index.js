import { combineReducers } from "redux";

import getUsers from './Users'
import getPosts from "./Posts";

const rootReducer = combineReducers({ getUsers, getPosts });

export default rootReducer;