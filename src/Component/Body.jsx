import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { search_API } from '../utility/Links'
const Body = () => {
   



  return (
    <div className=' gap-4 grid  grid-flow-col '>
       
    
    <Sidebar className="col-span-1 "></Sidebar>
    
    <Outlet className="col-span-11"></Outlet>
    
    
    </div>
  )
}

export default Body