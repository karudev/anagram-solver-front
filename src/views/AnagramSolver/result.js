import React from "react";

import {useSelector} from "react-redux";

const AnagramSolverResult = () => {
    const { initialString, stringToCompare, p } = useSelector((state) => state.global.anagramSolver);

    const result = React.useMemo(() => {

        if(p !== null){
            return  <p>
                The number of rearrangement for <b> {initialString} </b> to <b>{stringToCompare}</b> is <b>{p}</b>
            </p>
        }else{
            return <></>
        }

    },[initialString, stringToCompare, p]);

  return result;

};

export default AnagramSolverResult;
