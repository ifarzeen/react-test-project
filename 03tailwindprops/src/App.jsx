import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: "Farzeen",
    age: 23
  }
  return (
    <>
     <h1 className='bg-green-400 mb-4'>tailwind test</h1>
     <Card test="testvalue"/>
     <Card test ="farzeen"/>
    </>
  )
}

export default App
