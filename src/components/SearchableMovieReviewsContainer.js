import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm : ''
         
    }
  }
  
  
  componentDidMount(){
    fetch(URL+this.state.searchTerm)
    .then(resp=>resp.json())
    .then(json=>this.setState({
      reviews:json.results
    }))
  }
  
  
  handleSubmit = (event)=>{
    event.preventDefault()
    
  }
  
  handleSearch = (event)=>{
    this.setState({
      searchTerm:event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleSearch}>
        </input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer

