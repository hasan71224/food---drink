import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, img, ratings} = review;
    return (
            <div className='review-details'>
                <div>   
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2> {name}</h2>
                    <p>{}</p>
                    <p><small>{ratings} Star</small></p>
                </div>
            </div>
    );
};

export default Review;