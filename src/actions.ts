import axios from "axios"
import {Dispatch} from "redux";

export const LIST_LOADING = "LIST_LOADING";
export const LIST_FAIL = "LIST_FAIL";
export const LIST_SUCCESS = "LIST_SUCCESS";

export type GameItem = {
    features: GameFeature[],

  }

  export type GameFeature = {
    features: {
      name: string
      url: string
    }
  }

  export const GetGameList = (game: string) => async (dispatch: Dispatch<GameDispatchTypes>) => {
    try {
      dispatch({
        type: LIST_LOADING
      })
  
      const res = await axios.get(`https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/game/`);
  
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

  export interface ListLoading {
    type: typeof LIST_LOADING
  }
  
  export interface ListFail {
    type: typeof LIST_FAIL
  }
  
  export interface ListSuccess {
    type: typeof LIST_SUCCESS,
    payload: GameItem
  }
  
  
  export type GameDispatchTypes = ListLoading | ListFail | ListSuccess
