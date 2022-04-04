import React, { createContext } from 'react';
import './Home.css'
import cover from '../../img/cover.png'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

// export const ReviewContext = createContext([reviews, setReviews])//-----------------

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home-section'>
            <div className='home-container'>
                <div className='home-details'>
                    <h1>Enjoy your drink If you like this picture</h1>
                    <p>A drink is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks. Traditionally warm beverages include coffee, tea, and hot chocolate.</p>
                    <button>Live Demo</button>
                </div>
                <div className='home-img'>
                    <img src={cover} alt="" />
                </div>
            </div>

            <div className='review-container'>
                <h1>Customer Review</h1>
                <div className='home-review'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        >
                        </Review>
                        )
                    }
                </div>
                <a href="/reviews">See All Reviews</a>
            </div>
           
        </div>
    );
};

export default Home;