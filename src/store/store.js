import { combineReducers, createStore } from 'redux';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
});

const store = createStore(reducers);

export default store;
