import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;
class LatestMovieReviewsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            headlines: []
        }
    }

    componentDidMount() {
        const doFetch = async () => {
            const response = await fetch(URL);
            const { results } = await response.json();
            return this.getFetch(results);
        };
        doFetch();
    };
    getFetch = (results) => {
        results.map((item) => {
            const { headline, summary_short } = item;
            this.setState({
                reviews: [
                    ...this.state.reviews,
                    summary_short],
                headlines: [
                    ...this.state.headlines,
                    headline
                ]
            })
        })
    };
    render() {
        return (
            <div className='latest-movie-reviews'>
               <MovieReviews reviewProp={this.state} />
            </div>
        )
    }
}
export default LatestMovieReviewsContainer;