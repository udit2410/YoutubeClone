import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
const ChatMessage = ({Name,Message}) => {
  return (
    <div className=''>

  
        <hr className='border-t border-gray-300 my-4' />

        <div className='flex ml-1 '>
            <BiUserCircle size={28}></BiUserCircle>
            <h1 className='mx-4 font-medium'>{Name}</h1>
            <h3>{Message}</h3>
        </div>

    </div>
  )
}

export default ChatMessage;