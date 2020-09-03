import { combineReducers } from "redux";

const initialState = {
  anagramSolver: {
    initialString: 'odelk',
    stringToCompare: 'delko',
    p: 4,
  },
};

const anagramSolver = (state = initialState.anagramSolver, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return { ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  anagramSolver,
});
