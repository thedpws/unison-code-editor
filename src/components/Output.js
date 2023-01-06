import { useState } from "react";
import TestCase from "./TestCase";
import TestCaseContainer from "./TestCaseContainer";
import { AiFillPlayCircle } from "react-icons/ai";
import {BsCheckCircleFill} from 'react-icons/bs';

const Output = (props) => {
  console.log(props.testCases)
  return (
    <div className="relative m-6 flex flex-col" style={{ width: '100%' }}>
      <div className='flex-1 grid grid-cols-8 gap-4'>
        <div className="text-lg font-semibold font-sans text-left">Output</div>
        <div className='col-start-7'>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={props.submitCodeHandler}
          >
            <div className="flex items-center gap-2 ">
              <div>
                Run
              </div>
              <AiFillPlayCircle />
            </div>
          </button>
        </div>
        <div className='col-start-8'>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            onClick={props.getMockTestResults}
          >
            <div className="flex items-center gap-2 ">
              <div>
                Submit
              </div>
              <BsCheckCircleFill />
            </div>
          </button>
        </div>
      </div>
      {/* To put the scroll bar on the right */}
      {/* <div className='mt-4 flex-1 overscroll-y-auto overflow-auto'> */}
      <div className='mt-4 flex overscroll-y-auto overflow-auto' >
        <TestCaseContainer testCases={props.testCases} />
      </div>
    </div>
  );
};
export default Output;
