import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {


    state = {
        reviews: "",
        searchTerm: ""
    }

    handelSubmit(){
        fetch(URL)
        .then(response => response.json())
        .then(({movies}) => this.setState({
            reviews: movies,
            searchTerm: movies

        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                <MovieReviews reviews={this.state.reviews}/>
                <MovieReviews reviews={this.state.searchTerm}/>
                </form>
                
            </div>
        )
    }
}