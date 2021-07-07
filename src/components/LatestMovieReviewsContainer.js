import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
             reviews:[]
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(data => data.json())
        .then(data =>  {
            this.setState({
           reviews:data.results
       })} )
    }
     
    render() {
      
        return (
            <div   className ='latest-movie-reviews'>
               <MovieReviews reviews = {this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer


/**
     * constructUrl =() =>{
        const url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=sqGc7NYKr1hxoGUxPE4mbDvHI2LcqPqW`;
        this.fetchMovies(url)
    }
    
    fetchMovies = async (url) =>{
        const data = await fetch(url)
        const latestMovies = await data.json();
         this.setState({
            reviews:latestMovies.results
        })
        console.log(this.state.reviews)
    }

     */