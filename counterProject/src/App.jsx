import { useState } from "react";


function App() {
// const counter = 0;
const [counter, setCounter] = useState(0)

const addValue = () => {
  if(counter < 20){
    setCounter(counter + 1)
  }
}

const subtractValue = () => {
  if(counter > 0){
    setCounter(counter - 1)
  }
}


  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br/>
      <button onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
