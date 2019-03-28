import React from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem/MoviesItem';
import './MoviesList.css';

const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MoviesItem movie={movie} key={movie.id.videoId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MoviesList;
