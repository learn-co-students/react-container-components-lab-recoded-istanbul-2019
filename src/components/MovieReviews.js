import React, { Component } from "react";

const MovieReviews = (props) => {
  const reviews = props.reviews.map((review, index) => {
    return (
      <div className="review"
        key={index}>
        <h3>{review.headline}</h3>
        <p>{review.summary_short}</p>
        <img
          src={review.multimedia.src}
          width={review.multimedia.width}
          height={review.multimedia.height}
        ></img>
        <h4>Reviewed by :{review.byline}</h4>
        <a href={review.link.url} target="_blank">
          Read the article!
        </a>
      </div>
    );
  });
  return (
    <div className="container review-list">
      <div>{reviews}</div>
    </div>
  );
};
export default MovieReviews;
