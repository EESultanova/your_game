import { RENDER_ALL, CHANGE_STATUS } from "../types/questionsTypes";

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case RENDER_ALL:
      return action.payload;

    case CHANGE_STATUS:
      console.log(action.payload.id);

      return state.map((el) => {
        if (el.id === action.payload.key) {
          return {
            ...el,
            questions: el.questions.map((el) =>
              el.id === action.payload.id ? el.status = "done" : el
            ),
          };
        }
        return el;
      });

    default:
      return state;
  }
};

export default questionsReducer;
