import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonilDtls from './TestimonialDtls'
import './Testimonial.css'

const Testimonial = () => {
    const [review, setReview] = useState([]) 
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
        
    },[])
    return (
        <div className="testimonial py-5">
            <div className="section-title text-center mb-5">
                <h2>What Our Client Say</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        review.map(reviews => <TestimonilDtls review={reviews}></TestimonilDtls>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Testimonial;