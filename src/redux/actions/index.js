export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_SCORE = "SET_SCORE";
export const TRACK_QUESTIONS = "TRACK_QUESTIONS";

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
