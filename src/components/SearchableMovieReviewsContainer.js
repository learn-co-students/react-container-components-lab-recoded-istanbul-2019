import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {
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
      .then((renderd) => {
        this.setState({
          reviews: renderd.results,
        });
        console.log(this.state.reviews);
      });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Movie Reviews
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={this.fetchData}
            >
              <input
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                value={this.state.searchTerm}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
