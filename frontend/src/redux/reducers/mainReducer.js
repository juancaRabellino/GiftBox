import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";
import productoReducer from "./productoReducer";
import carritoReducer from "./carritoReducer";
import categoriaReducer from "./categoriaReducer";

const mainReducer = combineReducers({
    userReducer,
    productoReducer,
    paqueteReducer,
    carritoReducer,
    categoriaReducer
})

export default mainReducer;