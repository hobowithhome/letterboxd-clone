import arabia from './images/arabia.jpg';
import moonlight from './images/moonlight.png';
import godfather from './images/godfather.jpg';
import parasite from './images/parasite.jpg';
import pulp from './images/pulp.jpg';
import scarface from './images/scarface.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const MovieCards = ({ movies }) => {
    
    if(movies==null){
        return (<div>no movies</div>)
    }
    
    else {

    return ( 
        <div className="movie-cards">
            
            { movies && movies.map(movie => (
                <div className="movie-1" key={ movie.id }>
                    <Link to={{
                        pathname:"/moviedetails/"+ movie.id,
                        aboutProps:{
                            movie
                    }}}>
                         <img src={ movie.poster } className="movie-poster" />
                         <p className="img__description">Rating</p>
                    </Link>
                </div>
                ))}
                
        </div>
     );
}
}
 
export default MovieCards;