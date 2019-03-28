import React, { Component } from 'react';
import { InputBase, IconButton, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const styles = {
  search: {
    padding: '5px 15px',
    backgroundColor: 'white',
    display: 'flex',
    height: 40,
    maxWidth: 500,
    width: '100%',
    borderRadius: '6px 0 0 6px'
  },
  searchButton: {
    maxWidth: 50,
    height: 50,
    backgroundColor: '#b7b5b5',
    borderRadius: '0 6px 6px 0'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 20px',
    boxSizing: 'border-box'
  }
};

class Search extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  setInputValue = e => {
    this.setState({
      query: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.onSearch(this.state.query);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={classes.searchContainer}>
          <InputBase
            className={classes.search}
            placeholder="Search…"
            type="text"
            onChange={this.setInputValue}
            value={this.state.value}
          />
          <IconButton
            type="submit"
            className={classes.searchButton}
            variant="contained"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Search);
