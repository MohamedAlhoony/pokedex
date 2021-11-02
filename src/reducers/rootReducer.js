import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import pokimonDetailsReducer from './pokimonDetailsReducer';
let rootReducer;
const appReducer = combineReducers({
  homeReducer,
  pokimonDetailsReducer,
});

export default rootReducer = (state, action) => {
  switch (action.type) {
  }
  return appReducer(state, action);
};
