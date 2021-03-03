import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";

const mainReducer=combineReducers({
    user: userReducer,
    paqueteReducer,
})

export default mainReducer;