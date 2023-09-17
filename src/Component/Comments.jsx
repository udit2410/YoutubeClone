import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'

const Comments = (props) => {
    const {commentData}=props;

   
   
  return (
    <div className=''>

       <div className="autharInfo flex gap-4 items-center">
        <img className='rounded-full' src={commentData.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />

        <div className=''>
            <div className='flex'>

                 <h1 className='px-3 py-2 font-medium'>@{commentData.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                 <h1 className='py-2'>{Math.floor(Math.random()*13)} Months Ago</h1>
            </div>
           

           <h3 className='px-3'>
             {
            commentData.snippet.topLevelComment.snippet.textDisplay
        } 
           </h3>
           <h3 className='px-3 py-2 flex gap-4'>
               <div className='flex gap-1'>
                    <AiOutlineLike size={22}> </AiOutlineLike> 
                 <div className='text-gray-500'>{commentData.snippet.topLevelComment.snippet.likeCount}</div>
               </div>
           
                 <BiDislike size={22}></BiDislike>
                 
                 </h3>
           
        </div>
          


       </div>  
       
        
    </div>
  )
}

export default Comments