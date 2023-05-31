import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/dist/client/image';
import axios from 'axios';
import requests from '@/Requests';
import { AiOutlineSearch } from 'react-icons/ai';
import Movie from '@/components/common/Movie';
import Link from 'next/link';

const Search = () => {

    const srvvidoe = `https://api.themoviedb.org/3/movie/385687/videos`

    const SearchInputRef = useRef();

    const [movies, setMovies] = useState([]);

    const searchMovieByTitle = async (title) => {
        try {   
            const response = await axios.get(`${requests.requestSearch}&query=${title}`);
            console.log(response.data.results);
            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
if(SearchInputRef.current.value === ""){
    setMovies([""])

}
      console.log(SearchInputRef.current);

    },[])

console.log(movies);

  return (
    <div className='w-full h-screen flex items-start justify-center'>
    <div className='max-w-[1240px] mx-auto px-2'>
        <div className='mt-[25%] flex flex-col items-center justify-center w-[100%] h-[20%] '>
          <form >
            <h1 className='text-white text-6xl py-4'>Search your favorite movie</h1>
              <div className='w-full h-full flex items-center justify-center'>
                <input 
                ref={SearchInputRef}
                type="text" 
                placeholder="Search...." 
                className='mt-5 block w-[360px] px-2 py-2 bg-white border-slate-300 rounded-full text-sm placeholder-slate-400 focus:outline-none'/>
                <AiOutlineSearch onClick={()=>searchMovieByTitle(SearchInputRef.current.value)} style={{color:"white", marginTop: "17px", marginLeft: "12px"}} size={33}/>
              </div>
          </form>
        </div>
        <div className='grid grid-cols-3 gap-4 my-8'>
            {movies.map((movie)=> {
                if(movie?.backdrop_path !== null)
                return(
                //    <Image
                //    src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} height={300} width={200}
                //    alt={"/"}
                //    className="h-[300px] rounded-sm"
                //   />
                <Link href={`MovieInformation/${movie.id}`}>
                <Movie item={movie}/>
                </Link>
                )
            }
            )}
            
        </div>
    </div>
    </div>
  )
}

export default Search