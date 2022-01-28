import axios from "axios"
import {Dispatch} from "redux";
import {LIST_FAIL, LIST_LOADING, LIST_SUCCESS, GameDispatchTypes} from "./actionTypes";


export const GetGameList = (data: string) => async (dispatch: Dispatch<GameDispatchTypes>) => {
  try {
    dispatch({
      type: LIST_LOADING
      })
  
    const res = await axios.get(`https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/game/${data}`);
  
    dispatch({
      type: LIST_SUCCESS,
      payload: res.data
      })
  
  } catch(e) {
    dispatch({
      type: LIST_FAIL
    })
  }
};