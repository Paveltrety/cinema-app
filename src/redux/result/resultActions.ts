import { films } from "./../../types/reduxTypes";
import { typeActionsResult } from "../typeActionsConstant";

export const setListFilms = (films: films) => ({
  type: typeActionsResult.SET_LIST_FILMS,
  payload: films,
});

export const setErrorSearch = () => ({
  type: typeActionsResult.SET_ERROR_SEARCH,
});
