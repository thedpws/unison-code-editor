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
        mode='java'
        theme='twilight'
        onChange={onChange}
        name='UNIQUE_ID_OF_DIV'
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}
