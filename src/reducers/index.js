import { todoLists, selectedItem } from "../todolist/reducer/todoList";
import { combineReducers } from "redux";

export default combineReducers({ todoLists, selectedItem });
