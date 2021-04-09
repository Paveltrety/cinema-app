import { initialStateResult } from "../../types/reduxTypes";
import { typeActionsResult } from "../typeActionsConstant";

let initialState: initialStateResult = {
  resultFilms: [],
  isFound: true,
};

const resultReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case typeActionsResult.SET_LIST_FILMS:
      return {
        ...state,
        resultFilms: action.payload,
        isFound: true,
      };

    case typeActionsResult.SET_ERROR_SEARCH:
      return {
        ...state,
        isFound: false,
      };
    default:
      return state;
  }
};

export default resultReducer;

// description: null,
// id: null,
// image: null,
// resultType: null,
// title: null,
