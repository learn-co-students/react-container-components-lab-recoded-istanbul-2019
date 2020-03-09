// Code MovieReviews Here

import React from 'react';
 
const MovieReviews = (props) => {
    return(    
        <div className="review-list">
          {props.reviews.map(review => <div className="review"><p>{review.summary_short}</p></div>)}
        </div>
      )
}


 
export default MovieReviews;