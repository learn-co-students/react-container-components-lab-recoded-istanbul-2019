import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oKwO508XMtwoaUGeYCJh0C0ODIG2EgKu';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super(); 
    this.state = {
      reviews: [],
      searchTerm:''
    }
  }
submit=()=> {
    const Url = URL+`&query=${this.state.searchTerm}`
    fetch(Url)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }))
  }
 
  render() {
    return (<div className="searchable-movie-reviews">
             <form onSubmit={this.submit}>
                    <input type="text" 
                    onChange={(e)=>this.setState({searchTerm:e.target.value})}
                    value={this.setState.searchTerm}
                    />
                </form>
                 <MovieReviews reviews={this.state.reviews}/></div>)
  }
}
 
export default SearchableMovieReviewsContainer;