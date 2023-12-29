import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../reducers/questions";
import scoreReducer from "../reducers/score";
import questionTrackerReducer from "../reducers/questionTracker";

const myReducer = combineReducers({
  questions: questionsReducer,
  score: scoreReducer,
  questionTracker: questionTrackerReducer,
});

const store = configureStore({
  reducer: myReducer,
});

export default store;
