import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'N43rrrJdSzRlNVhzq0GOhAf1flRqxjX9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends 
Component {
    constructor(props) {
        super(props)
    
        this.state = {
            reviews : []
        }
    }
    
    componentWillMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews : data.results
        }))
    }


    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
