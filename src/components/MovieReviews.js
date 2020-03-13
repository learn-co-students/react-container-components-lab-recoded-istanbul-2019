// Code MovieReviews Here
import React,{Component} from 'react';
import Review from './Review'
//const MovieReviews = ({ Reviews }) =>(
   // <div className="review-list">  
    //  { Reviews.map(review => <Review title ={review.display_title} img_url={review.multimedia.src} link={review.link.url} summary={review.summary_short} />) }
  //  </div>
// )
 function MovieReviews(props){
      return(
            <div className="review-list" >
              {console.log(props.Reviews)}
             {props.reviews.map((review)=>{return <div className="review"><img src={review.multimedia.src} alt=""/><p>{review.display_title}</p></div>})}
            </div>
        )
 }  
  export default MovieReviews;