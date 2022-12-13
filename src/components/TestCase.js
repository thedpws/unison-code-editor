import { useState } from "react";

const TestCase = (props) => {
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">
        Test Case {props.number}
      </div>
      {props.result === "Pass" ? (
        <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-green-400">
          {props.result}
        </div>
      ) : (
        <div className="mt-3 flex-1 overscroll-y-auto overflow-auto p-2 bg-red-400">
          {props.result}
          <hr />
          <div>
            <b>Std Out:</b> <br />
            {props.stdout}
          </div>
        </div>
      )}
    </div>
  );
};
export default TestCase;
