import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oKwO508XMtwoaUGeYCJh0C0ODIG2EgKu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super(); 
    this.state = {
      reviews: []
    }
  }
componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }))
  }
 
  render() {
    return (<div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>)
  }
}
 
export default LatestMovieReviewsContainer;