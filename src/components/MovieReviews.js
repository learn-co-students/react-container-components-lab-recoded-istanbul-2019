// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
   // console.log(data)
    return (
    <div  className='review-list' >
     {props.reviews.map(review => <div className="review"><h2>{review.display_title}</h2></div>)}
            
    </div>
    )
}


export default MovieReviews;


/**
 * <div  className='review-list' >
      {props.data.map(r => {
       return (
           <div className='review' key={r.display_title}> 
           <img src={r.multimedia.src} alt-={r.display_title}></img>
           <h1>{r.display_title}</h1>
           <h3>{r.headline}</h3>
           <p>{r.summary_short}</p>
           </div>
           );
      })
      }
            
    </div>
 */