import { SET_QUESTIONS } from "../actions";

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
    default:
      return state;
  }
};

export default questionsReducer;
