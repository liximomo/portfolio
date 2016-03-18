import "babel-polyfill";
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Window from './src/Components/Window';
import TalkFlowContainer from './src/containers/TalkFlowContainer';

const store = configureStore({
  speeches: [],
});

render(
  <Provider store={store}>
    <Window>
      <TalkFlowContainer />
    </Window> 
  </Provider>,
  document.getElementById('root')
)