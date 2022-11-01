import { useState } from 'react'

import Editor from './components/Editor'
import './App.css'
import Split from 'react-split'
import Panels from './components/Panels'
import './styles/styles.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [value, setValue] = useState('hello world')
  const [instructionText, setInstructionText] = useState('')
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
      <div className='my-4 font-sans text-2xl font-bold'>Unison Live Code Editor</div>
      <Panels/>
    </div>
  )
}

export default App
