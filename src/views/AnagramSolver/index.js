import React from "react";

import AnagramSolverForm from "./form.js";
import AnagramSolverResult from "./result.js";

const AnagramSolverView = () => {

  return (
    <div className="example-wrapper">
      <h1>AnagramSolver ✅</h1>
      <AnagramSolverForm />
      <AnagramSolverResult />
    </div>
  );
};

export default AnagramSolverView;
