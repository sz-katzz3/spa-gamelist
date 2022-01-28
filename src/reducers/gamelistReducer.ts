import { GameItem } from "../actions";

interface initialState {
  loading: boolean;
  game?: GameItem
}

const initialState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
  };



  const gamelistReducer = (state = initialState, action: { type: any; payload: { results: any; count: any; }; }) => {
    switch (action.type) {
      case "LIST_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "LIST_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to get the game you are looking for"
        };
      case "LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload.results,
          errorMsg: "",
          count: action.payload.count
        };
      default:
        return state
    }
  };
  
  export default gamelistReducer