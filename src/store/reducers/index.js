import { combineReducers } from "redux";
import addTaskSwitchReducer from "./addTaskSwitchReducer";
import taskListReducer from "./taskListReducer";

export const rootReducer = combineReducers({
    addTask: addTaskSwitchReducer,
    taskList: taskListReducer
})