import React from 'react'

export default function movieieReviews(props){
        return (
            <div className="review-list" >
                {
                props.reviews.map(movie=>{
                    return <div className="review">
                    <img src={movie.multimedia.src} alt=""/>
                    <p>{movie.display_title}</p>
                    </div>
                })
                }
            </div>
        )
}
