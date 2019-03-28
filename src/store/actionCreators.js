import { FETCH_MOVIES, FETCH_MOVIE_ITEM } from './actionTypes';

export const fetchMovies = query => dispatch => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=10&key=AIzaSyAVsu-YFZCzq7Xm3WoERxTG78vwiXs63mk&part=snippet&type=video`
  )
    .then(response => {
      return response.json();
    })
    .then(movies => {
      dispatch({ type: FETCH_MOVIES, payload: movies.items });
    });
};

export const fetchMovieItem = id => dispatch => {
  fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAVsu-YFZCzq7Xm3WoERxTG78vwiXs63mk`
  )
    .then(response => {
      return response.json();
    })
    .then(movies => {
      dispatch({ type: FETCH_MOVIE_ITEM, payload: movies.items[0] });
    });
};
