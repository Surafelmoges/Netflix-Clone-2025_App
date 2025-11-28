import React from 'react'
import { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../utils/axios'




const Row = ({title,fetchUrl,isLarge}) => {
    const [movies,setMovies]=useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{ 
        async function fetchData(){
            try{
                console.log("Fetch URL:",fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovies(request.data.results);
                return request;
            }catch(error){
                console.log("Error",error);
            }
        }
        fetchData();
    },[]);
            

  return (
    <>
        <div className='row'>
            <h1> {title} </h1>
            <div className='row_posters'>
                {movies?.map((movie,index)=>( 
                    <img
                        key={index}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default Row
