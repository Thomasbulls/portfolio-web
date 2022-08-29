import React from 'react';
import './About.scss';
import ME from '../../assets/tom.jpg';
import {GrReactjs} from "react-icons/gr";
import {IoSchoolOutline} from "react-icons/io5";
import {FaCodeBranch} from "react-icons/fa";
import {categories} from "../helper";


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_img">
                        <img src={ME} alt="About img"/>
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <GrReactjs className='about_icon'/>
                            <h5>Experience</h5>
                            <small>Fullstack 6+ months</small>
                        </article>

                        <article className='about_card'>
                            <IoSchoolOutline className='about_icon'/>
                            <h5>York University</h5>
                            <small>Bachelor of Computer Science</small>
                        </article>

                        <article className='about_card'>
                            <FaCodeBranch className='about_icon'/>
                            <h5>Group Projects</h5>
                            <small>2 Fullstack projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda expedita officiis pariatur
                        quae. Atque blanditiis facere fugiat illo ipsum iusto laborum, perferendis, possimus, qui quos sequi
                        soluta tenetur totam.
                    </p>

                    <a href={categories.CONTACT} className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    );
};

export default About;