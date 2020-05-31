import { Component } from "react";// Code MovieReviews Here
import latestMovieReviewContainer from './latestMovieReviewContainer ';
import searchableMoviewReviewContainer from './searchableMoviewReviewContainer';
const MovieReviews = ({reviews})=>{
    const rev = reviews.map((movie , index )=>{
        return (
            <div className = 'review'>
                <h2>{movie.display_title}</h2>
                <img src = {movie.multimedia.src} alt='img'/>
            </div>)
    })
    return (
        <div className = "review-list">
            {rev}
        </div>
    )
}
export default MovieReviews