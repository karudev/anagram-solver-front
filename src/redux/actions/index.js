import { requestAnagramSolver } from "../../utils/endpoints";

export const fetchAnagramSolver = (initialString, stringToCompare) => async (
  dispatch
) => {
  requestAnagramSolver(initialString, stringToCompare)
      .then(({ data }) => {

          console.log(data);
          dispatch({type: 'SET_RESULTS', payload: data.data});

      });
};
