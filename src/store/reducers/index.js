import { combineReducers } from "redux";
import addTaskSwitchReducer from "./addTaskSwitchReducer";

export const rootReducer = combineReducers({
    addTask: addTaskSwitchReducer
})