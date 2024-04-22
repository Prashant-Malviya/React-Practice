import { useState } from 'react'
import './App.css'
import GithubProfileFinder from './Components/Github Profile Finder'
import ModalTest from './Components/Custom-Modal-Popup/ModalTest'
import TabTest from './Components/Custome-Tabs/TabTest'
// import LightAndDarkMode from './Components/Light-Dark-Mode'
// import ScrollIndicator from './Components/Scroll-Indicator'
// import QRCodeGenerator from './Components/QR Code Generator'
// import LoadMoreData from './Components/Load More Data/LoadMoreData'
// import TreeView from './Components/Tree-View'
// import menus from './Components/Tree-View/data'
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

    {/* <LoadMoreData /> */}

    {/* Tree View Component/ Menu UI Component / recursive navigation menu */}

    {/* <TreeView menus={menus} /> */}

    {/* QR Generator */}
    {/* <QRCodeGenerator /> */}


    {/* light and dark mode theme */}

    {/* <LightAndDarkMode /> */}

    {/* Scroll Indiactor */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Custome Tab Component  */}
      <TabTest />

      {/* Custome Modal Component  */}
      <ModalTest />

      {/* Github Profile Viewer  */}
      <GithubProfileFinder />

    </div>
  )
}


export default App
