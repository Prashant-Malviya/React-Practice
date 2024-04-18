import { useState } from 'react'
import './App.css'
import LoadMoreData from './Components/Load More Data/LoadMoreData'
// import ImageSlider from './Components/Image-Slider'
// import Accordian from './Components/Accordion'
// import RandomColor from './Components/Random Color'
// import StarRating from './Components/Star-Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

    {/* Accordian Component */}

    {/* <Accordian/> */}
    {/* <RandomColor /> */}
    {/* <StarRating noOfStars={10} /> */}

    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={'1'} /> */}

    <LoadMoreData />

    </div>
  )
}


export default App
