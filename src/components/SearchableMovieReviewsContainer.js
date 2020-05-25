import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
    "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
    `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    };

    submitHandler = event => {
        event.preventDefault();
        const query = this.state.searchTerm;
        const newURL = `${URL}&query=${query}`
        fetch(newURL)
            .then(response => response.json())
            .then(data => this.setState({ reviews: data.results }));
    };

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <input onChange={(event) => this.setState({ searchTerm: event.target.value })} />
                </form>
                <div className="latest-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;