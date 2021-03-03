import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";
import productoReducer from "./productoReducer";


const mainReducer=combineReducers({
    userReducer,
    productoReducer,
    paqueteReducer
})

export default mainReducer;