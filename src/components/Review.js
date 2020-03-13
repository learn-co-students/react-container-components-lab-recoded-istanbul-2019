import React from 'react';
 
const Review = ({ title, img_url,link,summary }) => (
  <div className="review">
     <h3>{ title }</h3>
    <img src={ img_url } alt={title}/>
    <p>{summary}</p>
    <a href={link}> Read More</a>
    
  </div>
)
 
export default Review;
