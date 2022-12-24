import { useState } from "react";
import TestCase from "./TestCase";
import TestCaseContainer from "./TestCaseContainer";
import { AiFillPlayCircle } from "react-icons/ai";

const Output = (props) => {
  console.log(props.testCases)
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">Output</div>
      <div className='mt-4 flex-1 overscroll-y-auto overflow-auto'>
        <TestCaseContainer testCases={props.testCases} />
      </div>
    </div>
  );
};
export default Output;
