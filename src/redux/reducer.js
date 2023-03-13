import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlide";
import todoListReducer from "../components/TodoList/todoSlide";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
