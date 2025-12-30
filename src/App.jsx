import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [value , setValue]  = useState(0);

const   addVal=()=> {
  setValue(value + 1 )}
const removeVal= ()=>{
  setValue(value - 1)}

return(
  <div>
   <h1> Counter App : {value}</h1>

   <button
   onClick={addVal}>Add Value By One  </button>
   <br />
   <button
   onClick={removeVal}>Remove Value  By One </button>

  </div>
)
}
export default App

