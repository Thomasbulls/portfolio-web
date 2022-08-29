import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FiYoutube} from 'react-icons/fi';
import {github, youtube, linkedin} from "../helper";
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href={linkedin} target='_blank' title='Linkedin'><BsLinkedin/></a>
            <a href={github} target='_blank' title='Github'><BsGithub/></a>
            <a href={youtube} target='_blank' title='Youtube'><FiYoutube/></a>

        </div>
    );
};

export default HeaderSocials;