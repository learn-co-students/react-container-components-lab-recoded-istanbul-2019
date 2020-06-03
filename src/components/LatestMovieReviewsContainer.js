import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state ={
            reviews:[],
        }
    }
    async componentDidMount(){

        fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }));
    //  const fetchRev= await  fetch(URL);
    //     const revRes= fetchRev.json();
    //     // .then(res=>console.log(res)
    //     console.log(revRes.has_more)
    //     this.setState({
    //         reviews:revRes
    //     })  
    }
    render() {
        return (
            <div className="latest-movie-reviews">
                {/* {this.state.reviews} */}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;