import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import todosReducer from './todosReducer';

const allReducers = combineReducers({
  todoArr: todosReducer,
  alert: alertReducer,
});

export default allReducers;
