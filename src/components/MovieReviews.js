// Code MovieReviews Here
import React from 'react';

export default function MovieReviews ({reviews}) {
    const x =  reviews.map((movie , index) => { 
        return( 
           <div className ="review">
             <h3>{movie.display_title}</h3>
             <img src= {movie.multimedia.src} alt= "img" />
          </div>
        )
     })
  return (
     <div  className ="review-list">
      {x}
     </div>
 )

}