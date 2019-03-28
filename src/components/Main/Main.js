import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../../store/actionCreators';
import Search from '../Search/Search';
import MoviesList from '../MoviesList/MoviesList';

const Main = ({ movies, fetchMovies }) => (
  <div className="main">
    <h3>Search the video from YouTube</h3>
    <Search onSearch={fetchMovies} />
    <MoviesList movies={movies} />
  </div>
);

Main.propTypes = {
  movies: PropTypes.array.isRequired,
  fetchMovies: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
