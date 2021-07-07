import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export class SearchableMovieReviewsContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    fetchSearch = () =>{
        fetch(URL+`?query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data =>  {
            this.setState({
           reviews:data.results,
       })} )
    }
     
    handleSubmit = (e) =>{
        e.preventDefault()
        this.fetchSearch();
    }

    render() {
        return (
            <div className = "searchable-movie-reviews">
                <form onSubmit = {e => this.handleSubmit(e)}>
                    <input onChange = {(e) =>{this.setState({searchTerm:e.target.value})}}/>
                    <button>search</button>
                </form>
                <MovieReviews reviews ={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
