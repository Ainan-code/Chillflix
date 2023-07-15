import React from "react";
import MovieCard from "../components/movieCard";
import PopulateApi from "../components/popularmovies";



function Homepage() {

    return(
        <div>
   <PopulateApi></PopulateApi>
        </div>
    )
}



export default Homepage;