import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import nameReducer from "./nameReducer";

export default combineReducers({
	counterReducer,
	nameReducer,
});
