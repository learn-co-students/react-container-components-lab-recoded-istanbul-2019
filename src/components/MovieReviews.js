// Code MovieReviews Here
import React from "react";

export default function MovieReviews({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review) => {
        return (
          <div className="review">
            <p>Headline: {review.headline} </p>
            <img
              src={review.multimedia.src}
              width={review.multimedia.width}
              height={review.multimedia.height}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
