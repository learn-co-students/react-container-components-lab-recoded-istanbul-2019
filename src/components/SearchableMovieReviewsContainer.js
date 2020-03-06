import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      reviews:null,
    }
  }
  
  componentDidMount(){
    fetch(URL).then(res => res.json())
              .then(reviews => this.setState({
                reviews:reviews
              }))
  }
  render(){
    return(
      <div className="searchable-movie-reviews">
        {this.state.reviews.map(review =>{
           <MovieReviews review={review}/>
        })}
      </div>
      
      
      
      )
  }
}


export default SearchableMovieReviewsContainer;

