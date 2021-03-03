import { combineReducers } from "redux";
import userReducer from "./userReducer";
import paqueteReducer from "./paqueteReducer";
import productoReducer from "./productoReducer";
import categoriaReducer from "./categoriaReducer";

<<<<<<< HEAD

const mainReducer=combineReducers({
=======
const mainReducer = combineReducers({
>>>>>>> cd029b8b30962b9a958d6bd9f3000d17c2edd459
    userReducer,
    productoReducer,
    paqueteReducer,
    categoriaReducer
})

export default mainReducer;