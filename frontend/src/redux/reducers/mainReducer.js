import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";

const mainReducer=combineReducers({
    paqueteReducer,
    userReducer
})

export default mainReducer;