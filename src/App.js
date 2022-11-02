import { useState } from 'react'

import Editor from './components/Editor'
import './App.css'
import Split from 'react-split'
import Panels from './components/Panels'
import './styles/styles.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [value, setValue] = useState('hello world')
  const [instructionText, setInstructionText] = useState('Enter Instructions')
  const [outputText, setOutputText] = useState('Enter Output here')
  const [editorValue, setEditorValue] = useState('')

  const submitCodeHandler = () => {
    console.log(editorValue)
    if (value) {
      const newComment = {
        createdBy: 'edtest',
        description: editorValue,
        userId: 1,
      }
      fetch(
        // Edward's local mock postman server
        'https://b7c0c193-c9c6-4488-bad8-52c20c7d7b29.mock.pstmn.io/submit',
        {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(newComment),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setOutputText(data)
          setLoading(false)
          setError(null)
        })
        .catch((error) => {
          setLoading(false)
          setError('Something went wrong, please try again later.')
        })
    }
  }
  return (
    <div className='App'>
      <div className='my-4 font-sans text-2xl font-bold'>
        Unison Live Code Editor
      </div>
      <Panels
        setEditorValue={setEditorValue}
        instructions={instructionText}
        outputText={outputText}
      />
      <button
        type='button'
        className='btn submit-button'
        onClick={submitCodeHandler}
      >
        Submit
      </button>
    </div>
  )
}

export default App
