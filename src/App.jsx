import { useState } from 'react'
import './App.css'
// import Accordian from './Components/Accordion'
// import RandomColor from './Components/Random Color'
import StarRating from './Components/Star-Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

    {/* Accordian Component */}

    {/* <Accordian/> */}
    {/* <RandomColor /> */}
    <StarRating noOfStars={10} />

    </div>
  )
}


export default App
