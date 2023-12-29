import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../reducers/questions";
import scoreReducer from "../reducers/score";

const myReducer = combineReducers({
  questions: questionsReducer,
  score: scoreReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
