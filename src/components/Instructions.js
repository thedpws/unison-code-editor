import { useState } from "react";

const Instructions = (props) => {
  return (
    <div className="relative m-6 flex flex-col">
      <div className="text-lg font-semibold font-sans text-left">
        Instructions
      </div>
      <div className="space-y-8">
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-neutral-200 text-black dark:bg-zinc-900 dark:text-gray-200">
          {props.text}
        </div>
        <div>
          {props.examples.map((example) => {
            return <div key={example}>{example}</div>;
          })}
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-neutral-200 text-black dark:bg-zinc-900 dark:text-gray-200">
          Input Format
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-neutral-200 text-black dark:bg-zinc-900 dark:text-gray-200">
          Output Format
        </div>
        <div className="mt-3 p-2 flex-1 overscroll-y-auto overflow-auto bg-neutral-200 text-black dark:bg-zinc-900 dark:text-gray-200">
          {props.output}
        </div>
      </div>
    </div>
  );
};
export default Instructions;
