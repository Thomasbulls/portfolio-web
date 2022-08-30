import React, {useState} from 'react';
import './Nav.scss';
import {BiHomeHeart} from 'react-icons/bi';
import {MdOutlineComputer} from "react-icons/md";
import {IoPersonOutline} from "react-icons/io5";
import {GiSmartphone} from "react-icons/gi";
import {categories} from "../helper";
import {FiPaperclip} from "react-icons/fi";
import {BsChatSquareQuote} from "react-icons/bs";

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    const changeNav = (cat) => {
        return setActiveNav(cat)
    }

    return (
       <nav>
           {/****** Home *********/}
           <a href={categories.HOME}
              onClick={() => changeNav(categories.HOME)}
              className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>

           {/****** ABOUT *********/}
           <a href={categories.ABOUT}
              onClick={() => changeNav(categories.ABOUT)}
              className={activeNav === categories.ABOUT ? 'active' : ''}><IoPersonOutline/></a>

           {/****** Experience *********/}
           <a href={categories.EXPERIENCE}
              onClick={() => changeNav(categories.EXPERIENCE)}
              className={activeNav === categories.EXPERIENCE ? 'active' : ''}><MdOutlineComputer/></a>
           {/****** Portfolio *********/}
           <a href={categories.PORTFOLIO}
               onClick={() => changeNav(categories.PORTFOLIO)}
               className={activeNav === categories.PORTFOLIO ? 'active' : ''}><FiPaperclip/></a>

           {/****** Testimonials *********/}
           <a href={categories.TESTIMONIALS}
              onClick={() => changeNav(categories.TESTIMONIALS)}
              className={activeNav === categories.TESTIMONIALS ? 'active' : ''}><BsChatSquareQuote/></a>

           {/****** CONTACT *********/}

           <a href={categories.CONTACT}
              onClick={() => changeNav(categories.CONTACT)}
              className={activeNav === categories.CONTACT ? 'active' : ''}><GiSmartphone/></a>


       </nav>
    );
};

export default Nav;