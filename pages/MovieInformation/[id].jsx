import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const MovieInformation = () => {

      
  const router = useRouter();
  const { id } = router.query;

  const [info, setInfo] = useState([])
  const key = 'f15b445d91e7afb9a98d71e98d21d410';

  useEffect(()=>{
    const popo = async ()=>{
    await  axios.get(`https://api.themoviedb.org/3/movie/${id}/?api_key=${key}&language=en-US`)
       setInfo(res.data.results)
     

    }
    popo()
  },[])
console.log(info);
  return (
    <div>

    </div>
  )
}

export default MovieInformation;