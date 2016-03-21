import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import rootReducer from './reducers/reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducers', () => {
      const nextReducer = require('./reducers/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

let appStore = configureStore()

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root')
    );
