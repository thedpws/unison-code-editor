import React from 'react'
import AceEditor from 'react-ace'
import Split from 'react-split'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/ext-language_tools'



const Editor = (props) => {
  const themes = {'Dark Mode': 'twilight', 'Light Mode': 'textmate', 'Blue Tone': 'solarized_dark'}

  return (
    <AceEditor
      placeholder='Insert Code Here'
      width='100%'
      height='100%'
      mode={props.currentLanguage}
      theme={themes[props.editorTheme]}
      name='editor1'
      onChange={(value) => {
        props.setEditorValue(value)
      }}
      wrapEnabled={true}
      onLoad={(editorInstance) => {
        editorInstance.container.style.resize = "both";
        document.addEventListener("mouseup", () => editorInstance.resize());
      }}
      fontSize={14}
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      defaultValue={`public static void main(String[] args){
  System.out.println("hello world");
}`}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}
export default Editor
