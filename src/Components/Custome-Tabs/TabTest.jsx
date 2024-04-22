import React from 'react'
import Tabs from './Tabs'

function RandomComponent(){
  return <h1>Some Random Content</h1>
}

function TabTest() {

  const tabs = [
    {
      label : 'Tab 1',
      content : <div>Hi Tab1 Here</div>
    },
    {
      label : 'Tab 2',
      content : <div>This is content for Tab 2</div>
    },
    {
      label : 'Tab3',
      content: <RandomComponent />
    }
  ]

    function handleChange(currentTabIndex){
      console.log(currentTabIndex);
    }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange}  />
   )
}

export default TabTest
