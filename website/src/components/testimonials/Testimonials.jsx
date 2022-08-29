import React from 'react';
import './Testimonials.scss';
import {testimonials_reviews} from "../helper";
import 'swiper/css';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from others</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
                {
                    testimonials_reviews.map(({portrait, name, job_title, review},index) => {
                        return (
                            <div key={index} className="testimonials">
                                <div className="reviews">
                                    <img src={portrait} alt={name}/>
                                </div>
                                <h3>{name}</h3>
                                <h5>{job_title}</h5>
                                <small className="review">
                                    {review}
                                </small>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Testimonials;