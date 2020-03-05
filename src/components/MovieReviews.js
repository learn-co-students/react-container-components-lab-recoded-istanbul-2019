import React from 'react'

export default function MovieReviews(props) {
    return (
        <div className="review-list">
            {
                props.reviews.map((el)=>
                {return <div key={Math.random()} className="review">{el.display_title}</div>}
                )
            }
        </div>
    )
}