import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaMinus, FaPlus } from 'react-icons/fa';

function MenuItem({item}) {

    const [displayCurrentChildren,setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel){
       setDisplayCurrentChildren({
        ...displayCurrentChildren,
        [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
       })

    }

    console.log(displayCurrentChildren);

  return (
    <li >
    <div className='flex items-center justify-center gap-5 cursor-pointer  text-white'>
        <p>{item.label}</p>
    {
        item && item.children && item.children.length > 0 ? <span onClick={()=>handleToggleChildren(item.label)}>

            {
                displayCurrentChildren[item.label] ? <FaPlus color='white' size={16} /> : <FaMinus color='white' size={16} />
            }
        </span> : null
    }

      
    </div>

      {
        item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
        <MenuList list={item.children} />
        :null
      }
    </li>
  )
}

export default MenuItem
