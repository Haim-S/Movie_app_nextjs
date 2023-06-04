import React, { useState, useRef, useEffect } from "react";
import Image from "next/dist/client/image";
import axios from "axios";
import requests from "@/Requests";
import { AiOutlineSearch } from "react-icons/ai";
import Movie from "@/components/common/Movie";

const Search = () => {
  const SearchInputRef = useRef();

  const [movies, setMovies] = useState([]);
  const [classMovie, setClass] = useState(false);

  const searchMovieByTitle = async title => {
    try {
      const response = await axios.get(
        `${requests.requestSearch}&query=${title}`,
      );
      setClass(true);
      setMovies(response.data.results);
      SearchInputRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (movies === "") {
      setClass(false);
    }

    if (SearchInputRef.current.value === "") {
      setMovies([""]);
    }
    console.log(SearchInputRef.current);
  }, []);

  console.log(movies);

  return (
    <div className='w-full h-auto flex items-start justify-center'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <div className='mt-[25%] flex flex-col items-center justify-center w-[100%] h-[20%] '>
          <form>
            <h1 className='text-white text-6xl py-4'>
              Search your favorite movie
            </h1>
            <div className='w-full h-full flex items-center justify-center'>
              <input
                ref={SearchInputRef}
                type='text'
                placeholder='Search....'
                className='mt-5 block w-[360px] px-2 py-2 bg-white border-slate-300 rounded-full text-sm placeholder-slate-400 focus:outline-none'
              />
              <AiOutlineSearch
                onClick={() => searchMovieByTitle(SearchInputRef.current.value)}
                style={{
                  color: "white",
                  marginTop: "17px",
                  marginLeft: "12px",
                }}
                size={33}
              />
            </div>
          </form>
        </div>

        <div
          className={
            classMovie
              ? "w-full grid lg:grid-cols-3 md:grid-cols-3 gap-4 my-8 relative"
              : "w-full h-screen grid md:grid-cols-3 gap-4 my-8 relative"
          }
        >
          {movies.map(movie => {
            if (movie?.backdrop_path !== undefined)
              return (
                <Movie item={movie} />
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
