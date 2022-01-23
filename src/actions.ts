import axios from "axios"

export const GetGameList = (page: number) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    try {
      dispatch({
        type: "LIST_LOADING"
      });
  
      const perPage = 15;
      const offset = (page * perPage) - perPage;
  
      const res = await axios.get(`https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/game/limit=${perPage}&offset=${offset}`)
  
      dispatch({
        type: "LIST_SUCCESS",
        payload: res.data
      })
    } catch (e) {
      dispatch({
        type: "LIST_FAIL",
      })
    }
  };
  