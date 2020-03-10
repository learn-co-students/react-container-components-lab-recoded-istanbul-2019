import React from 'react';

function MovieReviews(props) {
  return (
    <div className='review-list'>
      <ul>{props.reviews.map((rev,idx)=><li key={idx} className='review'>{rev.summary_short}</li>)}</ul>  
    </div>
  )
}

export default MovieReviews;
