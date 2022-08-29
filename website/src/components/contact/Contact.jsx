import React, {useState} from 'react';
import './Contact.scss';
import {MdOutlineMail} from "react-icons/md";
import {FiYoutube} from "react-icons/fi";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [success, setSuccess] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r7xuzws', 'template_5zogql2', form.current, 'XEuwFfHW06MlB8g6j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

    };

    const alertFunc = () => {
        return setSuccess('Thank you for submitting!')
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    {/*=========== EMAIL ==============*/}
                    <article className="contact_option">
                        <MdOutlineMail className='contact_option_icon'/>
                        <h4>Email</h4>
                        <h5>peidongfullstack@gmail.com</h5>
                        <a href="mailto:peidongfullstack@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    {/*=========== YOUTUBE CHANNEL ==============*/}
                    <article className="contact_option">
                        <FiYoutube className='contact_option_icon'/>
                        <h4>Youtube</h4>
                        <h5>PEIDONG HE</h5>
                        <a href="https://www.youtube.com/channel/UCrs_RN_QteNtzQSt0ebY-QA" target='_blank'>My channel</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required/>
                    <input type="text" name='email' placeholder='Email' required/>
                    <textarea name="message" placeholder='Message' cols="30" rows="10"></textarea>
                    <button type='submit' className='btn btn-primary' onClick={alertFunc}>Send Message</button>
                    <div className='success_container'><h3>{success}</h3></div>
                </form>
            </div>
        </section>
    );
};

export default Contact;