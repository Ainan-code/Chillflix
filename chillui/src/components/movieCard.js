import React from "react";
import img1 from './assets/david-lee-2Cirx1WkMvU-unsplash.jpg';



function MovieCard (props) {
   const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return(
      <div className="main">
      <h1>Trending Movies</h1>
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={IMG_API + props.movie.profile_path}></img>
               </div>
            <div className="card_content">
              <h2 className="card_title">{props.movie.name}</h2>
              <p className="card_text">{props.movie.popularity}</p>
              <button className="btn card_btn">Watch Now</button>
            </div>
          </div>
       </li>
      </ul>
    </div>
    
   
    )
}



export default MovieCard;