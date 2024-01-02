export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_SCORE = "SET_SCORE";
export const TRACK_QUESTIONS = "TRACK_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

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

export const setTrackQuestionsActions = (num) => {
  return {
    type: TRACK_QUESTIONS,
    payload: num,
  };
};

export const removeQuestionAction = () => {
  return {
    type: REMOVE_QUESTION,
  };
};
