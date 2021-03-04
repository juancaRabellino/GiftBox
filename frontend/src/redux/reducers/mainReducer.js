import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";
import productoReducer from "./productoReducer";
import categoriaReducer from "./categoriaReducer";

const mainReducer = combineReducers({
    userReducer,
    productoReducer,
    paqueteReducer,
    categoriaReducer
})

export default mainReducer;