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
      className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-red-700 h-screen"
    >
      <h1 className="font-lucky text-center tracking-widest text-4xl mb-10">
        Simple Calculator
      </h1>
      <div 
        className="bg-black max-w-2xl rounded-3xl m-3"
      >
        <div 
          className="flex flex-col m-5 bg-gradient-to-r from-purple-200 to-purple-500 rounded-xl"
        >
          <Result result={result} />
          <KeyPad onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default App

