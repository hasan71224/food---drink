import React from 'react';
import './Home.css'
import cover from '../../img/cover.png'

const Home = () => {
    return (
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
    );
};

export default Home;