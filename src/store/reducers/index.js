import { combineReducers } from 'redux';
import countReducer from './count';

const initialState = {
  count: 0
};

export default combineReducers({
  count: countReducer,
}, initialState);
