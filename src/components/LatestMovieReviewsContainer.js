import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        // this.fetchData()
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            }, ()=>console.log(this.state.reviews))
        })
        
    }

    // fetchData = async () => {
    //     // const fecthFunc = await fetch(URL)
    //     // const data = (await fecthFunc).json()
    //     // console.log(data)
    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             reviews: data.results
    //         }, ()=>console.log(this.state.reviews))
    //     })
        
    // }


    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}


export default LatestMovieReviewsContainer;