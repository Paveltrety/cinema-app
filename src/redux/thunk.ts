import { setErrorSearch, setListFilms } from "./result/resultActions";
export const getListFilms = (value: string) => (dispatch: any) => {
  fetch(`https://imdb-api.com/en/API/SearchMovie/k_nlew0aq1/${value}`)
    .then((response) => response.json())
    .then(({results}) => {
      if (results.length !== 0) {
        dispatch(setListFilms(results));
      } else dispatch(setErrorSearch());
    });
};
