import Split from 'react-split'
import Editor from './Editor'
import { useState } from 'react'
import Instructions from './Instructions'
import Output from './Output'

const Panels = (props) => {
    const [collapsedIndex, setCollapsedIndex] = useState(null)

    return (
        <Split 
            collapsed = {collapsedIndex}
            direction='vertical'
            sizes={[60,40]}
            style={{ height: `calc(100vh - 4rem)` }}
        >
            <Split className='flex'>
                <div className='bg-gray-300'>
                    <Instructions
                        text = "Insert Instructions Here..."
                    />
                </div>
                <div className='bg-gray-300'>
                    <Editor></Editor>
                </div>
            </Split>
            <div className='bg-gray-400 flex'>
                <Output
                    text='Recieve Output Here...'
                />
            </div>
        </Split>
    )
}
export default Panels