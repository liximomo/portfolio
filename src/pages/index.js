import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../containers/App';

const store = configureStore({
  speeches: [],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)