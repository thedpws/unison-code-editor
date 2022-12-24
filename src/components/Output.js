import { useState } from "react";
import TestCase from "./TestCase";
import TestCaseContainer from "./TestCaseContainer";
import { AiFillPlayCircle } from "react-icons/ai";

const Output = (props) => {
  console.log(props.testCases)
  return (
    <div className="relative m-6 flex flex-col">
      <div className='grid grid-cols-8 gap-4'>
        <div className="text-lg font-semibold font-sans text-left">Output</div>
        <div className='col-start-5 col-span-2'>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={props.submitCodeHandler}
          >
            Run Code
          </button>
        </div>
        <div className='col-end-8'>
          <button
            type="button"
            className="bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={props.getMockTestResults}
          >
            <div>
              Submit
            </div>
            <AiFillPlayCircle />
          </button>
        </div>
      </div>
      <div className='mt-4 flex-1 overscroll-y-auto overflow-auto'>
        <TestCaseContainer testCases={props.testCases} />
      </div>
    </div>
  );
};
export default Output;
