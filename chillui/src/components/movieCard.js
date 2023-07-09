import React from "react";
import './moviecard.css';


function MovieCard () {

    return(
        <div>
      <section class="content">
  <main class="card">
    <div class="breaking-bad">
     <div> 
     <h1 class="title">Breaking Bad</h1>
     </div>
      <div>
      <ul class="meta">
        <li>9.5/10</li>
        <li>TV Series</li>
        <li>Crime, Drama, Thriller</li>
      </ul>
      <p class="description">A chemisty teacher diagnosed with a terminal lung cancer teams up with his former student to cook and sell crystal meth.</p>
      <hr class="break"/>
      </div>
      
      <div class="bottom-info"><a class="watch">Watch Trailer</a><a class="plus">+</a><a class="add-to">Add to Watchlist</a><span class="add-meta">546 of your friends have watched this</span></div>
    </div>
  </main>
</section>
        </div>
    )
}



export default MovieCard;