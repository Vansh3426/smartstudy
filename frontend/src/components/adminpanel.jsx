import React, { useState } from 'react'
import { NavLink } from "react-router-dom"





const Adminpanel = () => {
 




  return (
    <div className='bg-gradient-to-l  to-gray-800 h-full'>
      <ul  className='flex flex-col  space-y-2 fixed left-6 top-2 font-bold '>
        <li className='list-disc hover:scale-110 hover:drop-shadow-[0_0_8px_gold]'><NavLink to='/upload'>UPLOAD FILES</NavLink></li>
        <li className='list-disc hover:scale-110 hover:drop-shadow-[0_0_8px_gold]'><NavLink to='/delete'>DELETE FILES</NavLink> </li>
        <li className='list-disc hover:scale-110 hover:drop-shadow-[0_0_8px_gold]'><NavLink to='/edit'>EDIT FILES</NavLink>   </li>
      </ul> 
      
      
    </div>

    
  )
}
  

export default Adminpanel
