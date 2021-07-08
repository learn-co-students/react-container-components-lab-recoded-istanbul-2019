import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"></input>
        </form>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }

  handleSubmit = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        reviews: data.results,
      })
    })
  }

}