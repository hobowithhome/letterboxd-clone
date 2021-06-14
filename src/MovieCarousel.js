import arabia from './images/arabia.jpg';
import moonlight from './images/moonlight.png';
import godfather from './images/godfather.jpg';
import parasite from './images/parasite.jpg';
import pulp from './images/pulp.jpg';
import scarface from './images/scarface.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCards from './MovieCards';

const MovieCarousel = () => {        

    const [ movies, setMovies ] = useState(null);

    useEffect(() => {
            fetch('http://localhost:8000/movies')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            setMovies(data);
        })
    }, []);


    return ( 
        <div className="movie-carousel">
            <h3>Welcome to Atharboxd. Here's what we've been watching.</h3>
             <MovieCards movies= { movies }/> 
        </div>
     );
}
 
export default MovieCarousel;