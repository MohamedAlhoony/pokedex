import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxThunk from 'redux-thunk';
let middleware = [reduxThunk];

if (__DEV__) {
  const {createLogger} = require('redux-logger');
  const logger = createLogger({
    collapsed: true,
  });
  middleware = [...middleware, logger];
} else {
}

let store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
