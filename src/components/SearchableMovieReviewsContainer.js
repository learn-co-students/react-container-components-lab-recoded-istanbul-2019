import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state={
            reviews : [],
            searchTerm: ""
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const searchURL= URL + `&query=${this.state.searchTerm}`
        fetch(searchURL)
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))
    }
    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    onChange={(e)=>this.setState({searchTerm:e.target.value})}
                    value={this.setState.searchTerm}
                    />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}