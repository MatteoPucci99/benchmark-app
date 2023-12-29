export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_SCORE = "SET_SCORE";

export const setQuestionsAction = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  };
};

export const setScoreAction = (score) => {
  return {
    type: SET_SCORE,
    payload: score,
  };
};
