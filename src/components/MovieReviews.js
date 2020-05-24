import React, { Component } from "react";

const MovieReviews = (props) => {
  console.log(props.reviews);
  const reviews = props.reviews.map((review, index) => {
    console.log(review);
    return (
      <div
        className="review col-4 col-md-4 mt-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
        key={index}
      >
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
      <div className="row mx-lg-n5 ">{reviews}</div>
    </div>
  );
};

export default MovieReviews;
