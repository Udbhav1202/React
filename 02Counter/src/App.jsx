import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(5)

  // let count = 5;

  const addValue = () => {
    //count = count + 1;
    //console.log(count);
    if(count == 20){
      return;
    }else{
      setCount(count-1);
    }
    setCount(count+1);
  }

  const decValue = () => {
    if(count == 0){
      return;
    }else{
      setCount(count-1);
    }
  }


  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
