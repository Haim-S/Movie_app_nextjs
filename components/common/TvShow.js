import React, {useEffect, useState} from 'react'
import Image from 'next/image';





const TvShow = ({id}) => {

    const [genres, setGenres] = useState([]);
const gg = "https://api.themoviedb.org/3/tv/385687?api_key=f15b445d91e7afb9a98d71e98d21d410&language=en-US"

    useEffect(() => {

        const fetchGenres = async () => {
            const key = 'f15b445d91e7afb9a98d71e98d21d410';
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`
          );
          const movieDetails = await response.json();
          const genres = movieDetails.genres?.map((genre) => genre.name);
          setGenres(genres);
        };
    
        fetchGenres();
      }, [id]);

  return (
    <div key={id} className="movie-card">
    <div className="movie-card-image-container">

      {/* {poster_path ? (
        <div className='movie-image'>

          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`} height={300} width={200}
            alt={name}
            className="h-[300px] rounded-sm"
          />

          {!session ? (

            <button type="button"
              className="movie-card-button text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={() => signIn()}
            >
              Add to Notion
            </button>
          )
            : (
              <button type="button"
                className="movie-card-button text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={handleAddToNotion}
              >
                Add to Notion
              </button>
            )
          }
          <Image src="/share.png" className="arrows" alt=""
            onClick={onClick} width={30} height={30} />

        </div>
      ) : */}
       (
        <div className='movie-image'>
          <div className="bg-transparent backdrop-blur-sm"
            style={{
              width: '200px',
              height: '300px',
              borderRadius: '5px'
            }}
            
          ></div>

         

            <button type="button"
              className="movie-card-button text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
             
            >
              Add to Notion
            </button>
          )
            : (
              <button type="button"
                className="movie-card-button text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
               
                >
                Add to Notion
              </button>
            )
       
          <Image src="/share-black.png" className="arrows" alt="" width={30} height={30}
             />
        </div>
    
    </div>
    <h2 className="text-l font-bold text-center text-gray-800">
      
    </h2>

  </div>
  )
}

export default TvShow