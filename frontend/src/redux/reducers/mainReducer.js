import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import productsActions from "./productsReducer";

const mainReducer = combineReducers({
  usersReducer,
  productsActions,
});

export default mainReducer;
