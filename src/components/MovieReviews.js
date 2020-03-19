import React from 'react'

export default function MovieReviews(props){
    return (
            <div className="review-list" >
                {
                    props.reviews.map(reviews=> {
                        return <div className="review">
                            <h1>{reviews.display_title}</h1>
                            </div>
                    })
                }
            </div>
    )
            }
                      
                  
              