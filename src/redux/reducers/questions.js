import { REMOVE_QUESTION, SET_QUESTIONS } from "../actions";

const initialState = {
  content: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        content: action.payload,
      };
    case REMOVE_QUESTION:
      return {
        ...state,
        content: state.content.slice(1),
      };
    default:
      return state;
  }
};

export default questionsReducer;
