// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props){
        return (
            <div className="review-list" >
                {
                props.reviews.map(mov=>{
                    return <div className="review">
                    <img src={mov.multimedia.src} alt=""/>
                    <p>{mov.display_title}</p>
                    </div>
                })
                }
            </div>
        )
}


