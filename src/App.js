import { useState } from 'react'
import './index.css'
import Result from './components/Result/Result'
import KeyPad from './components/KeyPad/KeyPad'

function App() {
  const [result, setResult] = useState('')

  const calculate = () => {
    let checkResult = ''
    if (result.includes('--')) {
      checkResult = result.replace('--', '+')
    } else {
      checkResult = result
    }
    try {
      // eslint-disable-next-line no-eval
      setResult(`${eval(checkResult) || ''}`)
    } catch (e) {
      setResult('error')
    }
  }

  const reset = () => {
    setResult('')
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const handleClick = (button) => {
    if (button === '=') {
      calculate()
    } else if (button === 'C') {
      reset()
    } else if (button === 'CE') {
      backspace()
    } else {
      setResult(result + button)
    }
  }

  return (
    <div 
      className="flex items-center bg-gradient-to-r from-indigo-200 to-pink-200 h-screen"
    >
      <div 
        className="bg-gradient-to-r from-pink-200 to-indigo-200 border-gray-700 border-2 max-w-2xl m-auto rounded-3xl"
      >
        <div 
          className="flex flex-col m-6 bg-gradient-to-r from-purple-200 to-purple-500 rounded-xl"
        >
          <Result result={result} />
          <KeyPad onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default App

