import React, { useEffect, useState } from 'react'
import { youtube_API } from '../utility/Links'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
 const [videos,setvideos]=useState([]);
  useEffect(()=>{
    fetchVideo();
  },[])

  const fetchVideo= async ()=>{
    const data= await fetch(youtube_API);
    const json =await data.json();
    
    setvideos(json.items)
  }

  if(videos.length==0){
    
    return <Shimmer></Shimmer>
  }


  return (
    <div className="mt-8 flex justify-center gap-4 flex-wrap">
        {
          videos.map((video)=>{
            return <Link to={"/video?v="+ video.id } key={video.id}><VideoCard items={video}></VideoCard></Link> 
          })
        }

        {/* <VideoCard items={videos[0]}></VideoCard> */}
      
    </div>
  )
}

export default VideoContainer