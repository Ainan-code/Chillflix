import React from "react";




function MovieCard ({original_title, overview, poster_path}) {
   const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return(
      <div className="main">
        
      <div className="cards">
        <div className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={IMG_API + poster_path}></img>
               </div>
            <div className="card_content">
              <h2 className="card_title">{original_title}</h2>
              <p className="card_text">{overview}</p>
              <button className="btn card_btn">Watch Now</button>
            </div>
          </div>
       </div>
      </div>
    </div>
    
   
    )
}



export default MovieCard;