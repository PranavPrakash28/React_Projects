import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter , setCounter] = useState(15)



  const  addValue = () =>
  {
    if(counter+1 < 21){
    setCounter(counter + 1)
    console.log(counter);
    }
    return;
  } 


  const removeValue = () =>{
    if(counter+1 > 1)  {
      setCounter(counter-1)
      console.log(counter); 
    }
    return;
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}
export default App
