// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className='review-list'>
            {props.reviews.map((review, key) => <div key={key} className='review' > {review.display_title} </div>)}
        </div>
    )
}