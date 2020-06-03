import React from 'react';

const Review = ({headline,summary_short}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
          {headline}
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;