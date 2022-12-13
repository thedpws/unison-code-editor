import { useState } from "react";
import TestCase from "./TestCase";

const Output = (props) => {
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">Output</div>
      <div className="mt-3 grid grid-cols-4 auto-rows-auto overscroll-y-auto overflow-auto bg-gray-400">
        {props.testCases?.map((testcase) => {
          return (
            <TestCase
              key={testcase.key}
              number={testcase.number}
              result={testcase.result}
              stdout={testcase?.stdout}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Output;
