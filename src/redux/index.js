import { createStore, combineReducers } from 'redux';
import { filterReducer } from './reducers/filter';
import { tasksReducer } from './reducers/tasks';
import { formReducer } from './reducers/form';

const rootReducer = combineReducers({
  form: formReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);


export default store;
