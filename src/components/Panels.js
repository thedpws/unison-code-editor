import Split from "react-split";
import Editor from "./Editor";
import { useState } from "react";
import Instructions from "./Instructions";
import Output from "./Output";

const Panels = (props) => {
  const [collapsedIndex, setCollapsedIndex] = useState(null);
  return (
    <Split
      collapsed={collapsedIndex}
      direction="vertical"
      sizes={[60, 40]}
      style={{ height: `calc(100vh - 4rem)` }}
    >
      <Split className="flex">
        <div className="bg-white dark:bg-zinc-800 dark:text-gray-200 ">
          <Instructions text={props.instructions} examples={props.examples} />
        </div>
        <div className="bg-white dark:bg-zinc-800 dark:text-gray-200">
          <Editor
            setEditorValue={props.setEditorValue}
            currentLanguage={props.currentLanguage}
            editorTheme={props.editorTheme}
            editorValue={props.editorValue}
          />
        </div>
      </Split>
      <div className="bg-white dark:bg-zinc-800 dark:text-gray-200 flex">
        <Output
          testCases={props.testCases}
          output={props.output}
          submitCodeHandler={props.submitCodeHandler}
          getMockTestResults={props.getMockTestResults}
        />
      </div>
    </Split>
  );
};
export default Panels;
