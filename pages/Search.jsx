import React, {useState} from 'react'
import axios from 'axios';
import requests from '@/Requests';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {

    const [movies, setMovies] = useState([]);

    const searchMovieByTitle = async (title) => {
        try {
            const response = await axios.get(`${requests.requestSearch}&query=${title}`);
            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };



  return (
    <div className='w-full h-screen flex items-start justify-center'>
    <div className='max-w-[1240px] mx-auto px-2'>
        <div className='mt-[25%] flex flex-col items-center justify-center w-[100%] h-[20%] '>
        <h1 className='text-white text-6xl py-4'>Search your favorite movie</h1>
        <div className='w-full h-full flex items-center justify-center'>
        <input 
        type="text" 
        placeholder="Search...." 
        className='mt-5 block w-[360px] px-2 py-2 bg-white border-slate-300 rounded-full text-sm placeholder-slate-400 focus:outline-none'/>
        <AiOutlineSearch style={{color:"white", marginTop: "17px", marginLeft: "12px"}} size={33}/>
        </div>
        </div>
        <div>

        </div>
    </div>
    </div>
  )
}

export default Search