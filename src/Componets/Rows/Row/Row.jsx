import React from 'react'
import { useEffect, useState } from 'react'
import './row.css'
import axios from '../../../utils/axios'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'



const Row = ({title,fetchUrl,isLarge}) => {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');

        }
        else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));

    
    }
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };



      
      


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
    },[fetchUrl]);
            

  return (
    <>
        <div className='row'>
            <h1> {title} </h1>
            <div className='row_posters'>
                {movies?.map((movie,index)=>( 
                    <img
                        onClick={() => handleClick(movie)}  
                        key={index}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}    
            
              
        </div>
    </>
  )
}

export default Row
