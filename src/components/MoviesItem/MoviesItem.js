import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
  CardMedia,
  CardContent,
  CardActionArea,
  Link
} from '@material-ui/core';
const styles = {
  card: {
    maxWidth: 280
  },
  media: {
    width: 280,
    height: 180
  },
  title: {
    color: '#222',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textDecoration: 'none'
  }
};

const MoviesItem = ({ movie, classes }) => (
  <div className="movies__item">
    <Card className={classes.card}>
      <CardActionArea>
        <Link component={RouterLink} to={`/movie/${movie.id.videoId}`}>
          <CardMedia
            image={movie.snippet.thumbnails.medium.url}
            title={movie.snippet.title}
            className={classes.media}
          />
          <CardContent className={classes.title}>
            {movie.snippet.title}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  </div>
);

MoviesItem.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withStyles(styles)(MoviesItem);
