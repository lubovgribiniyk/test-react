import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Movie from '../Movie/Movie';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import store from '../../store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movie/:id" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
