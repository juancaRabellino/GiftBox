import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";
import productoReducer from "./productoReducer";
import carritoReducer from "./carritoReducer";

const mainReducer=combineReducers({
    userReducer,
    productoReducer,
    paqueteReducer,
    carritoReducer
})

export default mainReducer;