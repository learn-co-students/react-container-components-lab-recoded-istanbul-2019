// import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

            

// // Code LatestMovieReviewsContainer Here

// export default class LatestMovieReviewsContainer extends Component {
// constructor(){
//     super();
//     this.state={
//         reviews:[]
//     }
// }
// componentDidMount(){
//     fetch(URL)
//     .then(res=>res.json())
//     .then(movies=>this.setState({reviews:movies.results}))
// }
//     render() {
//         return (
//             <div className="latest-movie-reviews">
//                { this.state.reviews.map(mov=>{
//                 //    console.log(mov)
//                 return  <MovieReviews img={mov.multimedia.src} title={mov.display_title}></MovieReviews>
//                })}
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

            

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
constructor(){
    super();
    this.state={
        reviews:[]
    }
}
componentDidMount(){
    fetch(URL)
    .then(res=>res.json())
    .then(movies=>this.setState({reviews:movies.results}))
}
    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}></MovieReviews>
            </div>
        )
    }
}

