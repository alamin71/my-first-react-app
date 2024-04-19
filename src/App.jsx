import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Students grade="8" score="99"> </Students>
      <Developer></Developer>
      <Todo task='learn react'
        isDone={true}></Todo>
      <Todo task='core concept'
        isDone={false}></Todo>
      <Todo task='Try JSX'
        isDone={true}></Todo>

    </>
  )
}
function Students(props) {
  console.log(props);
  return (
    <div className='Student'>
      <h1>Alamin</h1>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '5px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h3>devo devo</h3>
      <p>Name:</p>
    </div>
  )
}
export default App
