import API from "./api";

export const requestAnagramSolver = (initialString, stringToCompare) =>
  API.get(`/anagram-solver/run?initialString=${initialString}&stringToCompare=${stringToCompare}`);