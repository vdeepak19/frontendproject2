import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend Class in KLU</h1>
      <h2>Today's Topic is Introduction to React</h2>
      <h3>Today's Date is 29.07.25</h3>
      <h3> 2300090137 - Shah</h3>
      <Link to="/page1">Go To Page1</Link>
      <br/><br/><br/>
      <Link to="/page2">Go To Page2</Link>
            <br/><br/><br/>
      <Link to="/page3">Go To Page3</Link>
    </>
  )
}

export default App
