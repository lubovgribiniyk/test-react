import { FETCH_MOVIE_ITEM, FETCH_MOVIES } from './actionTypes';

const INITIAL_STATE = {
  movies: [],
  selectedMovie: null
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case FETCH_MOVIE_ITEM:
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      return state;
  }
};
