import React from "react";
import { channel_ID } from "../utility/Links";

const VideoCard = (props) => {
  const { items } = props;
 
 
  return (
    <div className=" w-80" >
      <img className="rounded-lg w-full" src={items.snippet.thumbnails.medium.url} alt="abc"></img>
        <ul className="">
            
           
            <li className="font-semibold text-lg ">{items.snippet.title}</li>

           
            <li className="text-gray-600">{items.snippet.channelTitle}</li>
            <li className="text-gray-600">{items.statistics.viewCount} views</li>
        </ul>
     
    </div>
  );
};

export default VideoCard;
