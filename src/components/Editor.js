import React from 'react'
import AceEditor from 'react-ace'
import Split from 'react-split'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/ext-language_tools'

const Editor = (props) => {
  return (
    <AceEditor
      placeholder='Insert Code Here'
      width='100%'
      height='100%'
      mode='java'
      theme='twilight'
      name='editor1'
      onChange={(value) => {
        props.setEditorValue(value)
      }}
      wrapEnabled='true'
      fontSize={14}
      showPrintMargin={true}
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
