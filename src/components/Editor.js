import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/ext-language_tools'

function onChange(newValue) {
  console.log('change', newValue)
}

export default class Editor extends Component {
  render() {
    return (
      <AceEditor
        placeholder="Placeholder Text"
        mode="java"
        theme="solarized_dark"
        name="main_editor"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`void onLoad(editor) {
  console.log("i've loaded");
}`}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }} />

    )
  }
}
