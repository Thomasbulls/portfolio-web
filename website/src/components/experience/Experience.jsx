import React from 'react';
import './Experience.scss';
import {GiCheckMark} from "react-icons/gi";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                {/*================Front End=======================*/}
                <div className="experience_frontend">
                    <h3>Front End Development</h3>
                    <div className="experience_content">

                        <article className="experience_details">
                              
                            <h4>HTML 5 / CSS 3</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>Javascript ES6</h4>
                            <small className='text-light'>Advanced</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>React 17/18 + Redux</h4>
                            <small className='text-light'>Advanced</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>Unit testing / Web Optimization</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>Git / Webpack / Babel</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                    </div>
                </div>

                {/*================Back End=======================*/}
                <div className="experience_backend">
                    <h3>Back End Development</h3>
                    <div className="experience_content">

                        <article className="experience_details">
                              
                            <h4>Node JS / Next JS</h4>
                            <small className='text-light'>experienced</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>TypeScript / JAVA</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>TypeORM / Redis / MySQL</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>JWT</h4>
                            <small className='text-light'>Basic</small>
                        </article>

                        <article className="experience_details">
                              
                            <h4>RESTful API</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                    </div>
                </div>

                {/*================Computer =======================*/}
                <div className="Related_skills">
                    <h3>Related Skills</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                              
                            <h4>UI/UX</h4>
                            <small className='text-light'>experienced</small>
                        </article>
                        <article className="experience_details">
                              
                            <h4>Analysis of Algorithm</h4>
                            <small className='text-light'>Advanced</small>
                        </article>
                        <article className="experience_details">
                              
                            <h4>Data Structure</h4>
                            <small className='text-light'>Advanced</small>
                        </article>
                        <article className="experience_details">
                          
                        <h4>OOP</h4>
                        <small className='text-light'>Advanced</small>
                        </article>
                        <article className="experience_details">
                              
                            <h4>Design Patterns / Software Design</h4>
                            <small className='text-light'>Basic</small>
                        </article>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Experience;