import {
  LIST_FAIL,
  LIST_LOADING,
  LIST_SUCCESS,
  GameDispatchTypes,
  GameData,
} from "../../src/actionTypes";

interface DefaultStateI {
  loading: boolean;
  data?: GameData;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const gamelistReducer = (
  state: DefaultStateI = defaultState,
  action: GameDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case LIST_FAIL:
      return {
        loading: false,
      };
    case LIST_LOADING:
      return {
        loading: true,
      };
    case LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default gamelistReducer;
