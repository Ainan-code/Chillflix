import React,{ useEffect, useState } from "react";
import MovieCard from "./movieCard";



function PopulateApi() {

   const [movies, setMovies] = useState([]);
   



  useEffect(() => {
  
   function fetchMovieData() {
        fetch("https://api.themoviedb.org/3/person/popular?api_key=aff3cbd8c193d4c7fe349064ab052728")
          .then(response => {
            return response.json()
          
          })
          .then(data => {
            setMovies(data.results)
          });
       
          
      }

      fetchMovieData()
    
  }, []);


    return(
        <div className="api">
            {
              
                
            movies ? movies.map((item) => {

               return <MovieCard  movie={item} key={item.id} ></MovieCard>
            }): "no data"}
    
        </div>
    )
}


export default PopulateApi;