// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
    //console.log(props.reviews)
    // const reviews = props.reviews.map((review, index) => {
    //     return (
    //         <div className="review-list" key={index}>
    //             <h2>{review.headline}</h2>
    //             <a href={review.link.url} target="_blank">Read the review</a>
    //         </div>
    //     )
    // })
    return (
        <div className="review-list">
            {/* <div className="review">{reviews}</div> */}
            <ul>
                {props.reviews.map((review, index) => {
                    return (
                        <li key={index} className="review">
                            {review.summary_short}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
    

export default MovieReviews;