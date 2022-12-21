import { useState } from "react";
import TestCase from "./TestCase";
import TestCaseContainer from "./TestCaseContainer";

const Output = (props) => {
  console.log(props.testCases)
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">Output</div>
      <TestCaseContainer testCases={props.testCases}/>
      
    </div>
  );
};
export default Output;
