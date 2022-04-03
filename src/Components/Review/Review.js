import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, img, fedback, ratings} = review;
    return (
            <div className='review-details'>
                <div>   
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2> {name}</h2>
                    <p><strong>Feedback:</strong> {fedback}</p>
                    <p><strong>Ratings:</strong> <small>{ratings} Star</small></p>
                </div>
            </div>
    );
};

export default Review;