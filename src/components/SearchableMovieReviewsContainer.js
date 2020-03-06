import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state={
            reviews:[],
            searchTerm:""
        }
    }

    handleChange=(event)=>{
        this.setState({
            searchTerm:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        fetch(URL+ `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
        this.setState({
            reviews: data.results,
        })
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" onChange={this.handleChange}></input>
                </form>
                <div className="searchable-movie-reviews">
                     <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}