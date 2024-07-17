import { combineReducers } from "redux";
import counter from "./counterReducer";

const rootRaducers = combineReducers({counter});

export default rootRaducers;