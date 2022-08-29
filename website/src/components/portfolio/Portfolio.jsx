import React from 'react';
import './Portfolio.scss';
import {portfolio_data} from "../helper";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    portfolio_data.map(({id, image, title, github, website }) => {
                        return (
                            <article className="portfolio_item" key={id}>
                                <div className="portfolio_item_img">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={website} className='btn btn-primary' target='_blank'>Website</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
};



export default Portfolio;