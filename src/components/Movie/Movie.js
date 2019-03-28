import React, { Component } from 'react';

import { fetchMovieItem } from '../../store/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import './Movie.css';

class Movie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieItem(id);
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${
            this.props.movie.id
          }?autoplay=1`}
          frameBorder="0"
          className="player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        />
        <h3 className="title">{this.props.movie.snippet.title}</h3>
        <Link component={RouterLink} to="/">Move to search</Link>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  fetchMovieItem: PropTypes.func.isRequired
};

const mapStateToProps = ({ selectedMovie }) => ({
  movie: selectedMovie
});

const mapDispatchToProps = {
  fetchMovieItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
