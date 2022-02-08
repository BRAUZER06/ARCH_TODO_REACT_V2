import { createStore, combineReducers, applyMiddleware } from "redux";
import { filterReducer } from "./reducers/filter";
import { tasksReducer } from "./reducers/tasks";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
