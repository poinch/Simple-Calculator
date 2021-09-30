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
    <div className="max-w-md m-auto">
      <p className="text-3xl text-center text-blue-500 mt-10">Calculator</p>
      <Result result={result} />
      <KeyPad onClick={handleClick} />
    </div>
  )
}

export default App

