import Split from "react-split";
import Editor from "./Editor";
import { useState } from "react";
import Instructions from "./Instructions";
import Output from "./Output";

const Panels = (props) => {
  const [collapsedIndex, setCollapsedIndex] = useState(null);
  console.log(props.testCases)
  return (
    <Split
      collapsed={collapsedIndex}
      direction="vertical"
      sizes={[60, 40]}
      style={{ height: `calc(100vh - 4rem)` }}
    >
      <Split className="flex">
        <div className="bg-gray-300">
          <Instructions text={props.instructions} examples={props.examples} />
        </div>
        <div className="bg-gray-300">
          <Editor
            setEditorValue={props.setEditorValue}
            currentLanguage={props.currentLanguage}
            editorTheme={props.editorTheme}
            />
        </div>
      </Split>
      <div className="bg-gray-400 flex">
        <Output
          testCases={props.testCases}
          submitCodeHandler={props.submitCodeHandler}
          getMockTestResults={props.getMockTestResults}

          />
      </div>
    </Split>
  );
};
export default Panels;
