import { useState } from "react";
import {BsXCircle} from 'react-icons/bs'
import {BsCheckCircle} from 'react-icons/bs'
const TestCase = (props) => {
  return (
    // <div className="relative m-6 flex flex-col">
    <div>
      {/* <div className="text-lg font-semibold font-sans text-left">
      </div> */}

      {props.result === "Pass" ? (
        // <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-green-400">
        //   Test Case {props.number}
        // </div>
        <button class="flex flex-row bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4">
          Test Case {props.number}
          <BsCheckCircle/>
        </button>

      ) : (
        // <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-red-400">
        //   Test Case {props.number}
        // </div>
        <button class="flex flex-row bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 ">
          Test Case {props.number}
          <BsXCircle/>
        </button>
      )}
    </div>
  );
};
export default TestCase;
