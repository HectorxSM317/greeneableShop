import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";

const mainReducer = combineReducers({
  usersReducer,
  productsReducer,
});

export default mainReducer;
