import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  //let counter = 15;

  const addValue = () => {
    
    //counter + 1
    if(counter < 20){
      setCounter(counter+1)
    }
    console.log('Value added', counter)
  }
  const minusValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
    console.log('Value minus', counter)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add</button>
      <button
      onClick={minusValue}>Minus</button>
    </>
  )
}

export default App
