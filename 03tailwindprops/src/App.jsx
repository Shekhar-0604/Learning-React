import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'Shekhar',
    age: 21
  }

  let myArr = [1,2,3,4]
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Card channel= "Chai aur Code" />
    </>
  )
}

export default App
