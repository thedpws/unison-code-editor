import { useState } from 'react'

import Editor from './components/Editor'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [value, setValue] = useState('hello world')

  const submitCodeHandler = () => {
    console.log(value)
    if (value) {
      const newComment = {
        createdBy: 'edtest',
        description: value,
        userId: 1,
      }
      fetch(
        'https://3a393c2d-28a1-46b9-80fc-a9118884b42a.mock.pstmn.io/submit',
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
      <div className='title'>Unison Live Code Editor</div>
      <div className='window'>
        <div className='left-panel'>
          <h2 className='instructions'>Instructions:</h2>
        </div>
        {/* TODO: fix this right-panel div */}
        <div className=''>
          <Editor setValue={setValue} />
          <button
            type='button'
            className='btn submit-button'
            onClick={submitCodeHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
