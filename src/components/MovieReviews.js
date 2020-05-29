// Code MovieReviews Here
import React, { Component } from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const  MovieReviews = ({reviews}) => {
       const revs =  reviews.map((movie , index) => { 
           return( 
              <div className ="review">
                <h3>{movie.display_title}</h3>
                <img src ={movie.multimedia.src} alt = "img" />
             </div>
           )
        })
     return (
        <div  className ="review-list">
         {revs}
        </div>
    )
   
}


export default MovieReviews

