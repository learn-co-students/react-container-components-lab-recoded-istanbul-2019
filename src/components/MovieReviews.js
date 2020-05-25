import React from 'react';

const MovieReviews = (props) => {
    // console.log(props.reviews)
    return (

        < div className="review-list" >
            {
                props.reviews.map(review => {
                    return (
                        <div className="review">
                            <p>Headline: {review.headline} </p>
                            <img
                                src={review.multimedia.src}
                                width={review.multimedia.width}
                                height={review.multimedia.height}
                            ></img>
                        </div>
                    )
                })
            }
        </div >
    );
}

export default MovieReviews;