import Editor from './components/Editor'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='title'>
        Unison Live Code Editor
      </div>
      <div className='window'>
        <div className='left-panel'>
          <h2 className = 'instructions'>
            Instructions:

          </h2>
        </div>
        <div className='right-panel'>
          <Editor />

        </div>

      </div>
    </div>
  )
}

export default App
