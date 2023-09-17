import React from 'react'
import {AiFillHome,AiOutlineSetting} from 'react-icons/ai';
import { shorts_URl,studio_URl } from '../utility/Links';
import {MdSubscriptions,MdOutlineVideoLibrary,MdOutlineWatchLater,MdOutlineTrendingUp,MdMovieEdit,MdOutlineFeedback} from 'react-icons/md'
import {AiFillPlayCircle,AiOutlineLike,AiOutlineShoppingCart,AiOutlineTrophy} from 'react-icons/ai';
import {GrHistory} from "react-icons/gr";
import {GoVideo} from  'react-icons/go'
import {LiaDownloadSolid} from 'react-icons/lia'
import {BsMusicNote,BsFlag} from 'react-icons/bs'
import {FcIdea} from 'react-icons/fc'
import {GiHanger} from "react-icons/gi"

import {SiYoutubegaming} from 'react-icons/si'
import {TbBrandYoutubeKids} from 'react-icons/tb'

import {FiHelpCircle} from 'react-icons/fi'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//  import {IoNewspaperOutline} from 'react-icons/io'


const Sidebar = () => {

      const isMenuOpen= useSelector(store=> store.app.isMenuOpen);

      if(!isMenuOpen){
        return (
          <div>
          <ul>
          <Link to="/">  <li className=' flex flex-col mx-3 my-8 items-center text-xs '> <AiFillHome size={21}></AiFillHome> Home</li></Link>
            <li className='flex flex-col mx-3 my-8 items-center text-xs '><img className='w-6 h-6' src={shorts_URl} alt="" /> Shorts</li>
            <li className='flex flex-col mx-3 my-8 items-center text-xs '> <MdSubscriptions size={21}></MdSubscriptions> Subscriptions</li>
            <li className='flex flex-col mx-3 my-8 items-center text-xs '><AiFillPlayCircle size={21}></AiFillPlayCircle> Youtube Mu...</li>
            <li className='flex flex-col mx-3 my-8 items-center text-xs '> <MdOutlineVideoLibrary size={21}></MdOutlineVideoLibrary>  Library</li>
            <li className='flex flex-col mx-3 my-8 items-center text-xs'><LiaDownloadSolid size={21}></LiaDownloadSolid> Downloads</li>
          </ul>
            
          </div>
        )
      }






  return (
    <div className='shadow-lg w-56  font-roboto h-screen  overflow-y-scroll'>
          
          <ul>
          <Link to="/"> <li className='flex gap-6 m-4 '> <AiFillHome size={21}></AiFillHome> Home</li></Link> 
            <li className='flex gap-6 m-4 '><img className='w-6 h-6' src={shorts_URl} alt="" /> Shorts</li>
            <li className='flex gap-6 m-4 '> <MdSubscriptions size={21}></MdSubscriptions> Subscriptions</li>
            <li className='flex gap-6 m-4 '><AiFillPlayCircle size={21}></AiFillPlayCircle> Youtube Music</li>
            
          </ul>
          <hr className="border-t border-gray-300 my-4"></hr>
          <ul>
            <li className='flex gap-6 m-4 '> <MdOutlineVideoLibrary size={21}></MdOutlineVideoLibrary>  Library</li>
            <li className='flex gap-6 m-4 '><GrHistory size={21}></GrHistory> History</li>
            <li className='flex gap-6 m-4 '>  <GoVideo size={21}></GoVideo> Your Video</li>
            <li className='flex gap-6 m-4 '><MdOutlineWatchLater size={21}></MdOutlineWatchLater> Watch Later</li>
            <li className='flex gap-6 m-4'><LiaDownloadSolid size={21}></LiaDownloadSolid> Downloads</li>
            <li className='flex gap-6 m-4'><AiOutlineLike size={21}></AiOutlineLike> Liked Videos</li>
          </ul>
          <hr className="border-t border-gray-300 my-4"></hr>
          <h1 className='m-4'>Explore</h1>
          <ul>
          <li className='flex gap-6 m-4'><MdOutlineTrendingUp size={21}></MdOutlineTrendingUp> Trending</li>
          <li className='flex gap-6 m-4' ><AiOutlineShoppingCart size={21}></AiOutlineShoppingCart> Shopping</li>
          <li className='flex gap-6 m-4'><BsMusicNote size={21}></BsMusicNote> Music</li>
          <li className='flex gap-6 m-4'><MdMovieEdit size={21}></MdMovieEdit> Movies</li>
       
          <li className='flex gap-6 m-4'><SiYoutubegaming size={21}></SiYoutubegaming> Gaming </li>
          {/* <li className='flex gap-6 m-2'><IoNewspaperOutline></IoNewspaperOutline> News</li> */}
          <li className='flex gap-6 m-4'><AiOutlineTrophy size={21}></AiOutlineTrophy> Sports</li>
          <li className='flex gap-6 m-4'><FcIdea size={21}></FcIdea > Learning </li>
          <li className='flex gap-6 m-4'><GiHanger size={21}></GiHanger > Fashion and Beauty</li>
          </ul>
          <hr className="border-t border-gray-300 my-4"></hr>
            <h1 className='m-4'>More From Youtube</h1>
          <ul>
            <li  className='flex gap-6 m-4 ' ><img className='w-8 h-8 ' src={studio_URl} alt="" /> Youtube Studio</li>
            <li  className='flex gap-6 my-4 mx-5 '><AiFillPlayCircle size={21}></AiFillPlayCircle> Youtube Music</li>
            <li  className='flex gap-6 my-4 mx-5 '><TbBrandYoutubeKids size={21}></TbBrandYoutubeKids> Youtube Kids</li>
          </ul>
          <hr className="border-t border-gray-300 my-4"></hr>
          <li className='flex gap-6 m-4'><AiOutlineSetting size={21}></AiOutlineSetting> Flag</li>
          <li className='flex gap-6 m-4' ><BsFlag size={21}></BsFlag> Report History</li>
          <li className='flex gap-6 m-4'><FiHelpCircle size={21}></FiHelpCircle> Help</li>
          <li className='flex gap-6 m-4'><MdOutlineFeedback size={21}></MdOutlineFeedback> Feedback</li>


    </div>
  )
}

export default Sidebar;