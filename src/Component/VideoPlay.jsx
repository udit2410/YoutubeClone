import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { isClosed } from '../utility/appSlice';
import { useSearchParams } from 'react-router-dom';
import Shimmer from './Shimmer'
import { comment_API, channel_Info, channel_ID } from '../utility/Links';
import Comments from './Comments';
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
 
import {PiShareFatThin} from 'react-icons/pi'
import LiveChat from './LiveChat';




const VideoPlay = () => {
       const dispatch=useDispatch();
       const [searchParams]=useSearchParams();
       const [commentSection,setcommentSection]=useState([])
       const [videoInfo,setVideoInfo]=useState([])
       const [vLikes,setvLikes]=useState(Math.floor(Math.random()*1000));
  
       const [Subscribed,setSubscribe]=useState("Subscribe");
       const  [Joined,setJoin]=useState("Join");

  



      useEffect(()=>{
               


       comments();
       videoDetails()

        dispatch(isClosed());


      },[])

      const comments= async ()=>{
         const data= await fetch(`${comment_API}${searchParams.get("v")}&maxResults=100`);
         const json=await data.json();
         
         setcommentSection(json.items);
         
      }
      const videoDetails= async ()=>{
        const data= await fetch(`${channel_Info}${searchParams.get("v")}&key=AIzaSyA5upE9DVZMpRPxpzRfjjmO2rXWnFOGRjA`);
        const json=await data.json();
        console.log(json)
        setVideoInfo(json.items);
        
     }
  {
    if(commentSection.length==0){
      return <Shimmer></Shimmer>
    }
  }

  return (
    <div className="videoPage">
    <div className='flex justify-start mt-10 ' >
        <iframe width="750"
         height="400"
          src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=EH_4q5M2zv_dJKRy"}
           title="YouTube video player" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowFullScreen>

           </iframe>
           <div className='w-80   ' >
           <LiveChat></LiveChat>
           </div>
    </div>
    <div>
      <h1 className='font-medium  mt-2 text-lg w-2/3'>{videoInfo[0].snippet.title}</h1>

       <div className='mt-3 flex items-center gap-3'>
       <img className='w-11 h-11 rounded-full  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpaYRdQlEKeKvc2PuTVTNM8eOcqbqkzKDOZDUTC-jIKRWQ_a-UwHPqIG8vpSU9DHXIEU&usqp=CAU" alt="" />
          <h1 className='font-bold'>{videoInfo[0].snippet.channelTitle}</h1>
                <div className='flex mx-4 gap-3'>
                  <button className='border border-gray-400 px-4 py-2 rounded-2xl hover:bg-gray-200'
                  
                     onClick={()=>{
                      if(Joined=="Join"){
                        setJoin("Joined")
                      }
                      else{
                        setJoin("Join")
                      }
                     }}
                  
                  >{Joined}</button>
                  <button className='bg-black text-white px-5 py-2 rounded-2xl'
                  
                    
                  onClick={()=>{
                      if(Subscribed=="Subscribe"){
                        setSubscribe("Subscribed")
                      }
                      else{
                        setSubscribe("Subscribe")
                      }
                     }}


                  
                  >{Subscribed}</button>
                </div>
                <div className='flex ml-16 '>
                       
                       <button className='bg-gray-200 flex gap-1 px-6 py-2 rounded-l-full border-r border-black'
                        
                        onClick={()=>{
                          setvLikes(vLikes+1);
                        }}
                               

                       ><AiOutlineLike size={22}></AiOutlineLike>{vLikes}</button>
                       <button  className='bg-gray-200 px-4 py-2 rounded-r-full'><BiDislike size={22}></BiDislike></button>

                </div>

                <div>

                     <button className='flex items-center bg-gray-200 rounded-full px-3 py-2'> <PiShareFatThin size={22}></PiShareFatThin>Share</button>
                     

                        


                </div>

                

       </div>    

    </div>

  
      <div className="comments mt-5 ">
                 {
                  <h1>{commentSection.length} Comments</h1>
                 }
                <ul>
                  {
                    commentSection.map((comment)=>{
                         return  <li className='py-2'><Comments  commentData={comment}></Comments></li>
                    })
                  }
                     
                </ul>     

      </div>

    </div>
  )
}

export default VideoPlay