import React from 'react';
import CV from '../../assets/cv.pdf'
import ME from '../../assets/web-thomas.png'

// Call to Action
const Cta = () => {
    return (
        <div className='cta'>
            {/*========= DOWNLOAD RESUME ===========*/}
            <a href={CV} download className='btn'> Download Resume </a>
            <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
    );
};

export default Cta;