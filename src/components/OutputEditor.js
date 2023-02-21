import React from 'react'
import AceEditor from 'react-ace'
import Split from 'react-split'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-solarized_dark'
import 'ace-builds/src-noconflict/ext-language_tools'



const OutputEditor = (props) => {

    return (

        <AceEditor
            fontSize={17}
            maxLines={Infinity}
            theme='twilight'
            width='100%'
            value={props.defaultVal}
            readOnly={true}
            onLoad={(editorInstance) => {
                editorInstance.container.style.resize = "both";
                document.addEventListener("mouseup", () => editorInstance.resize());
              }}
        />
    )
}
export default OutputEditor


