import { combineReducers } from "redux";

import getUsers from './Users'
import getPosts from "./Posts";
import getAlbums from "./Albums";

const rootReducer = combineReducers({ getUsers, getPosts, getAlbums });

export default rootReducer;