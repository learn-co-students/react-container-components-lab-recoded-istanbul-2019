// Code MovieReviews Here
import React from 'react'

export default function MovieReviews({ reviewProp, reviewProp: { headlines, reviews } }) {
    const headline_and_reviews = headlines.map((item1, index1) => {
        const matching_review = reviews.find((item2, index2) => index2 === index1);
        return (
            <React.Fragment key={index1}>
                <h2 className='review--headline'>{item1}<br /></h2>
                <p className='review--summary'>{matching_review}</p>
            </React.Fragment>
        )
    });
    return (
        <ul className='review'>
            <li className='review-list'>
                {headline_and_reviews}
            </li>
        </ul>
    )
}