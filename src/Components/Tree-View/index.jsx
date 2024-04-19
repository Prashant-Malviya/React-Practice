import React from 'react'
import MenuList from './MenuList'

function TreeView({menus=[]}) {
  return (
    <div className="flex min-h-[100vh] w-[350px] bg-blue-700 text-white">
         <MenuList list={menus} />
    </div>
  )
}

export default TreeView
