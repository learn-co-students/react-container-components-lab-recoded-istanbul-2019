import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = (api, query) => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${api}&query=${query}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            reviews: [],
            headlines: []
        }
    }
    callFetch = async () => {
        const response = await fetch(URL(NYT_API_KEY, this.state.input));
        const { results } = await response.json();
        return this.getFetch(results);
    }
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
            <div className='searchable-movie-reviews'>
                <input type="text" placeholder='Type a title name of review...'
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={() => this.callFetch(this.state.input)}>Search</button>
                <MovieReviews reviewProp={this.state} />
            </div>
        )
    }
}
