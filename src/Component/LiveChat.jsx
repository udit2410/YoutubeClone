import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utility/chatSlice'
import { generaterandom } from '../utility/Helper'
const LiveChat = () => {
  const dispatch= useDispatch()
 
  const chatMessages= useSelector((store)=>store.chat.messages)

   useEffect(()=>{
  
    
     const interval=   setInterval(()=>{
              
          dispatch(addMessage({
            Name:generaterandom(),
            Message:"Hello i  am under the water"
          }))

          

        },700)

       return ()=>{
             clearInterval(interval);
       }
 

   },[])


  return (
    <div>
    
       <div className=' mt-3 ml-2 py-3 border border-gray-400 w-72 rounded-xl h-96 overflow-y-scroll'>

       <div className='px-2'>Top Chat</div>
        {chatMessages.map((c,i)=>{
          return <ChatMessage Name={c.Name} Message={c.Message} key={i} ></ChatMessage>
        })}
           
           
           

       </div>

    
    
    
    
    </div>
  )
}

export default LiveChat