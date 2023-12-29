import { SET_SCORE } from "../actions";

const initialState = {
  content: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;
