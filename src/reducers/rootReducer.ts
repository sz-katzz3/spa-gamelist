import {combineReducers} from "redux";
import gamelistReducer from "./gamelistReducer";


const RootReducer = combineReducers({
  GameList: gamelistReducer,
});


export default RootReducer;