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
        'https://14014203-d71d-4c9c-8f55-8a2f19d818e5.mock.pstmn.io/submit',
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
          console.log('Data recieved post')
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

  const getTestResults = () => {
    fetch(
      // Edward's local mock postman server
      'https://14014203-d71d-4c9c-8f55-8a2f19d818e5.mock.pstmn.io/results'
    )
      .then((response) => {
        response.text()
      })
      .then((text) => {
        console.log('Data recieved get')
        console.log(text)
        setOutputText(text)
        setLoading(false)
        setError(null)
      })
      .catch((error) => {
        setLoading(false)
        setError('Something went wrong, please try again later.')
      })
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
        className='btn right-60 bottom-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={submitCodeHandler}
      >
        Submit
      </button>
      <button
        type='button'
        className='btn right-30 bottom-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={getTestResults}
      >
        Get Test Results
      </button>
    </div>
  )
}

export default App
