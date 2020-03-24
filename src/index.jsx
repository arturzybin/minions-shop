import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './redux/rootReducer';
import App from './App';


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);