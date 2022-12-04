import {combineReducers, createStore} from "redux";
import {taskReducer} from "./taskReducer";

const reducerCombine = combineReducers({tasks: taskReducer})

export const store = createStore(reducerCombine)