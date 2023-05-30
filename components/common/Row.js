import React, {useEffect, useState} from 'react'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import Movie from './Movie'
import axios from 'axios'

const Row = ({rowID, title, fetchURL}) => {

    const [movies, setMovie] = useState([]);

    useEffect(()=>{
        axios.get(fetchURL).then((res)=>{
            setMovie(res.data.results)
        })
    },[fetchURL])
    
    const slideLeft = () => {
        const slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }


  return (
    <div>
       <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
       <div className='relative flex items-center group'>
        <MdChevronLeft
        onClick={slideLeft}
        className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
        size={40}
        />
        <div id={'slider' + rowID} className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth relative'>
            {movies.map((item, id)=> (
                <Movie key={id} item={item}/>
            ))}
        </div>
        <MdChevronRight 
            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
            size={40}
            />
       </div>
    </div>
  )
}

export default Row