import arabia from './images/arabia.jpg';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CommentBox from './CommentBox';
import CommentList from './CommentList';



const MovieDetails = ( props ) => {
    const [movie] = useState(props.location.aboutProps.movie);
    // console.log(props.location.aboutProps);

    return ( 
        <div className="movie-details">
                <div className="movie-list" key= { movie.id }>
                    <h2>{ movie.title }</h2>
                    <h3>Directed by { movie.director }</h3>
                    <h4>{ movie.caption }</h4>
                    <p>{ movie.body }</p>
                    <hr />
                    <div class="movie-info">
                        <div className="movie-1">     
                            <img src={ movie.poster } />             
                        </div> 
                    </div>
                </div>
                <CommentBox />
                <CommentList />
        </div>

            )
    }
 
export default MovieDetails;