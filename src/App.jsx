import { useState } from 'react'
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
   onClick={addVal}>Add Value  </button>
   <br />
   <button
   onClick={removeVal}>Remove Value </button>

  </div>
)
}
export default App

