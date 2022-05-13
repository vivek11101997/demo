import { combineReducers } from "redux";
import InfoReducer from "./InfoReducer";

const rootReducer = combineReducers({
  info: InfoReducer,
});

export default rootReducer;
