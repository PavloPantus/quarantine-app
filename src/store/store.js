import { combineReducers, createStore } from 'redux';
import usersReducer from './usersReducer';
import registeredNotesReducer from './registredNotesReducer';

const reducers = combineReducers({
  users: usersReducer,
  registeredNotes: registeredNotesReducer,
});

const store = createStore(reducers);

export default store;
