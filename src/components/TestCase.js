import { useState } from "react";
import { BsXCircle } from 'react-icons/bs'
import { BsCheckCircle } from 'react-icons/bs'
const TestCase = (props) => {

  return (
    // <div className="relative m-6 flex flex-col">
    <div className='flex' style={{ overflow: 'hidden', whiteSpace: "nowrap" }}>
      {/* <div className="text-lg font-semibold font-sans text-left">
      </div> */}

      {props.result === "Pass" ? (
        // <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-green-400">
        //   Test Case {props.number}
        // </div>
        <button
          className="flex items-center gap-2 bg-green-400 hover:bg-green-700 text-white text-sm font-bold py-2 px-4"
          onClick={() => { props.setSelectedCase(props.number) }}>
          <div>
            Test Case {props.number}
          </div>
          <BsCheckCircle />
        </button>

      ) : (
        // <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-red-400">
        //   Test Case {props.number}
        // </div>
        <button
          class="flex items-center gap-2 bg-red-400 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 "
          onClick={() => { props.setSelectedCase(props.number) }}>
          <div>
            Test Case {props.number}
          </div>
          <BsXCircle />
        </button>
      )}
    </div>
  );
};
export default TestCase;
