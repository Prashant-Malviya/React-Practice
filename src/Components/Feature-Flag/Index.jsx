import LightAndDarkMode from '../Light-Dark-Mode'
import TicTacToe from '../Tic-Tac-Toe/Index'
import RandomColor from '../Random Color'
import Accordian from '../Accordion'
import menus from '../Tree-View/data'
import TreeView from '../Tree-View'
import TabTest from '../Custome-Tabs/TabTest'
import { useContext } from 'react'
import { FeatureFlagsContext } from './Context/Index'



export default function FeatureFlags() {
    
    const {loading,enalbeFlags} = useContext(FeatureFlagsContext);


    const componentToRender = [
        {
            key : 'showLightAndDarkMode',
            component : <LightAndDarkMode />
        },
        {
            key : 'showTiTacBoard',
            component : <TicTacToe />
        },
        {
            key : 'showRandomColorGenerator',
            component : <RandomColor />
        },
        {
            key : 'showAccordian',
            component : <Accordian/>
        },
        {
            key : 'showTreeview',
            component : <TreeView menus={menus} /> 
        },
        {
            key : 'showTabs',
            component : <TabTest /> 
        }
    ]

    function checkEnabledFlags(getCurrentKey){
        return enalbeFlags[getCurrentKey];
    }

    if(loading) return <h1>lading....</h1>

  return (
    <div className='space-y-7'>
      <h1 className='flex justify-center items-center font-bold text-4xl text-red-500'>Feature Flags  </h1>
      <div className='mx-auto w-56 h-1.5 bg-blue-500 rounded-md relative bottom-5'></div>
      {
        componentToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null )
      }
    </div>
  );
}
