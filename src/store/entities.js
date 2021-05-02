import { combineReducers } from "redux";
import questionsReducer from "./questionsSlice";
import usersReducer from "./usersSlice";


export default combineReducers({
  questions: questionsReducer,
  users: usersReducer
});
