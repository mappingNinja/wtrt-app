import constants from "../constants";
const { SAVE_ANSWERS } = constants;

export const saveAnswersAction = (answers) => async (dispatch) => {
  dispatch({ type: SAVE_ANSWERS, answers })
}
