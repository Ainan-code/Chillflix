import React,{ useEffect, useState } from "react";
import MovieCard from "./movieCard";



function MoviesList() {

   const [movies, setMovies] = useState([]);
   



  useEffect(() => {
  
   function fetchMovieData() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c038e70cdfdbed8af02ed279af5eec1")
          .then(response => {
            return response.json();
         
          
          })
          .then(data => {
            setMovies(data.results)
            console.log(data)
          });
       
          
      }

      fetchMovieData()
    
  }, []);
 

    return(
        <div className="api">
          
            { 
              
            
              movies ?     movies.map((item) => {

                return <MovieCard  movie={item} key={item.id} {...item} ></MovieCard>
             }): "no data"
             }   
      
    
        </div>
    )
}


export default MoviesList;