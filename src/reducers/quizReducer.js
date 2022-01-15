const defaultState = {
  quizData: null,
  answers: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_QUIZ_DATA":
      return { ...state, ...action.payload };
    case "SET_ANSWER_DATA":
      return {
        ...state,
        answers: state.answers.concat(action.payload.answer),
      };
    case "RESET_QUIZ":
      return {
        ...defaultState,
      };
    default:
      return state;
  }
}
