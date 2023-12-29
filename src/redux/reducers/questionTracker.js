import { TRACK_QUESTIONS } from "../actions";

const initialState = {
  content: 0,
};

const questionTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACK_QUESTIONS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default questionTrackerReducer;
