import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'P3oYWjgLX8pfcLQWwRxSYvQgGYTh9vgp';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }

    // fetchData = (e) => {
    //     e.preventDefault();
    //     const searchURL = URL + `&query={this.state.searchTerm}`;
    
    //     fetch(searchURL)
    //     .then(res => res.json())
    //     .then(reviews => {
    //         this.setState = {
    //             reviews: reviews.results,
    //         }
    //     })
    // }

    componentDidMount(){
        fetch(URL + this.state.searchTerm)
            .then(res => res.json())
            .then(json => this.setState({
                reviews: json.results
            }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            // <div className="searchable-movie-reviews">
            //     <MovieReviews />
            // </div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleSearch}>
                    </input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
};

export default SearchableMovieReviewsContainer;