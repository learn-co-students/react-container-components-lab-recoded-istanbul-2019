// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
return ( <div className="review-list">
    {props.reviews.map((curr, id) => (
        <div key={id} className="review">
            <h1>{curr.display_title}</h1>
            <img 
                src={curr.multimedia.src}
                height={curr.multimedia.height}
                width={curr.multimedia.width}
                alt=''
            ></img>
        </div>
    ))}
</div>
)
}

export default MovieReviews;
