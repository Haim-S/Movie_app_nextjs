'use client'

import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'




const MovieInformation = () => {
  
  const router = useRouter();
  const { id } = router.query;

  
  const [info, setInfo] = useState([])
  

  const handleTvShowClick = async (tvShowId) => {
    try {
        window.open(`https://api.themoviedb.org/3/trending/movie/${tvShowId}?api_key=f15b445d91e7afb9a98d71e98d21d410`, '_blank');
    } catch (error) {
        console.error(error);
    }
};

  useEffect(()=>{
    const key = 'f15b445d91e7afb9a98d71e98d21d410';
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
     
    axios.get(url).then((res) =>  setInfo(res.data)).catch((err)=> console.log(err));
   
   
      //  setInfo(res.data.results)
      
// console.log(id);
   
   
  },[id])
console.log(info);
  return (
    <div className='w-full h-screen'>
     <div className='w-full h-[850px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[850px] bg-gradient-to-r from-black'> </div>
            <img className='pt-[5%]  w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${info?.backdrop_path}`} alt={info?.title}/>
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold py-4'>{info?.title}</h1>
                <div className='my-4'>
                    <buttom onClick={()=>handleTvShowClick(info.id)} className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</buttom>
                    <buttom className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch later</buttom>
                </div>
                <p className='text-gray-400 text-sm'>Released: {info?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>Released:{info?.overview}</p>
            </div>
        </div>
    </div>
 
    </div>
  )
}

export default MovieInformation;