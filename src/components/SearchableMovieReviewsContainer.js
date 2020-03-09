import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = () => {
        fetch(URL)
          .then(response => response.json())
          .then(newsData => this.setState({ reviews: newsData.results }))
    }

    render () {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input></input>
                </form>
                <div className="searcable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}
