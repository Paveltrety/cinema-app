export type initialStateResult = {
    resultFilms : Array<films>;
    isFound: boolean;
}

export type films = {
  description: string | null;
  id: string | null;
  image: string | null;
  resultType: string | null;
  title: string | null;
};
