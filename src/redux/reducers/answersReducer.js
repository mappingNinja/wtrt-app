import constants from "../constants";

const { SAVE_ANSWERS } = constants;

const initialState = {}

export const answersReducer = (state = initialState, action) => {
  const { type, answers } = action;
  switch (type) {
    case SAVE_ANSWERS:
      return answers

    default:
      return state
  }
}

