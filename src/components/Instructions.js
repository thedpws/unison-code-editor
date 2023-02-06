import { useState } from "react";

const Instructions = (props) => {
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">
        Instructions
      </div>
      <div className="space-y-8">
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-gray-400">
          {props.text}
        </div>
        <div>
          {props.examples.map((example) => {
            return <div key={example}>{example}</div>;
          })}
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-gray-400">
          Input Format
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-gray-400">
          Output Format
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-gray-400">
          {props.output}
        </div>
      </div>
    </div>
  );
};
export default Instructions;
