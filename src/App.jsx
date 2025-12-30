import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [multiply , setMultiply]  = useState(0);

const   multiplyVal=()=> {
  setMultiply(multiply + 1 )}
const divideVal= ()=>{
  setMultiply(multiply - 1)}

return(
  <div>
   <h1> Counter App : {multiply}</h1>

   <button
   onClick={multiplyVal}>Add Value  </button>
   <br />
   <button
   onClick={divideVal}>Remove Value </button>

  </div>
)
}
export default App

