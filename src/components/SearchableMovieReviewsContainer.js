import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
        };

    
    createURL= (searchTerm)=>{
        const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+ `query=${searchTerm}`
                + `api-key=${NYT_API_KEY}`;
        return URL; 
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        fetch(this.createURL(this.state.searchTerm))
          .then(response => response.json())
          .then(reviewsData => this.setState({reviews : reviewsData.results }))
          
    }
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label> Search Movie Reviews: </label>
                        <input type="text" value={this.state.searchTerm} onChange={e=>this.setState({searchTerm: e.target.value})} />
                    
                    <input type="submit" value="Submit"/>
                </form>
                    {typeof this.state.reviews === 'object' &&
                    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                    <MovieReviews reviews={this.state.reviews}/>   
            </div>
           
        )
    }
}

