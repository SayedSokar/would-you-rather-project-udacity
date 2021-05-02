import { combineReducers } from "redux";
import questionsReducer from "./questionsSlice";
import usersReducer from "./usersSlice";
import authuserReducer from './authSlice'

export default combineReducers({
  questions: questionsReducer,
    users: usersReducer,
  authuser: authuserReducer
});
