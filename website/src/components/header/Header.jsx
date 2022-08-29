import React from 'react';
import './Header.scss';
import Cta from "./Cta";
import ME from "../../assets/web-thomas.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Peidong He</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <h5 className="text-light">Videographer</h5>

                {/* Call in Action button: Download */}
                <Cta/>
                <a href="#contact" className='scroll_down'>Scroll Down</a>

                <HeaderSocials/>
                {/* Personal picture */}
                <div className="me">
                    <img src={ME} width={'120%'} height={'120%'} alt="me"/>
                </div>
            </div>
        </header>

    );
};

export default Header;