import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
export default class SearchableMovieReviews extends Component{
  constructor() {
     super();
     this.state = {
       reviews: [],
       searchTerm: "",
     };
   }

   constructUrl = () => {
     return URL + `&query=${this.state.searchTerm}`;
   };

   fetchData = (e) => {
     e.preventDefault();
     const url = this.constructUrl();

     fetch(url)
       .then((data) => data.json())
       .then((data) => {
         this.setState({
           reviews: data.results,
         });
         console.log(this.state.reviews);
       });
   };

   render() {
     return (
       <div className="searchable-movie-reviews">
         <form
                className="form-inline my-2 my-lg-0"
                onSubmit={this.fetchData}
              >
                <input
                  onChange={(e) => this.setState({ searchTerm: e.target.value })}
                  value={this.state.searchTerm}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>


            </div>
     );
   }
    }
