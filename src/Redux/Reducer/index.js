import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "redux";

export default combineReducers({
  cart: CartReducer,
  auth: AuthReducer,
});
