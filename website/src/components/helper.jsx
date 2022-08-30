import Img1 from '../assets/portfolio1.jpg';
import Img2 from '../assets/portfolio2.jpg';
import Portrait1 from '../assets/chen.jpeg';
import Portrait2 from '../assets/lihang.jpeg';
import Portrait3 from '../assets/wang.jpeg';


export const github = 'https://github.com/Thomasbulls?tab=repositories';
export const linkedin = "https://www.linkedin.com/in/peidong-he";
export const youtube = "https://www.youtube.com/channel/UCrs_RN_QteNtzQSt0ebY-QA";

export const categories = {
    HOME: '#',
    ABOUT: '#about',
    EXPERIENCE: '#experience',
    PORTFOLIO: '#portfolio',
    SERVICES: '#services',
    CONTACT: '#contact',
    TESTIMONIALS: '#testimonials'
}

export const portfolio_data = [
    {
        id: 1,
        image: Img1,
        title: 'E-commerce Website',
        github: github,
        website: 'https//google.com',
    },
    {
        id: 2,
        image: Img2,
        title: 'Title',
        github: github,
        website: 'https//google.com',
    }
]

export const testimonials_reviews = [
    {
        id: 1,
        portrait: Portrait1,
        name: "Chen Deng",
        job_title: "Co-founder, LAMOSE",
        review: "lorem........"
    },
    {
        id: 2,
        portrait: Portrait2,
        name: "Lihang Ying",
        job_title: "Senior Computer Vision Engineer, Peloton Interactive",
        review: "lorem........"
    },
    {
        id: 3,
        portrait: Portrait3,
        name: "Junchao Wang",
        job_title: "Morgan Stanley Developer (Associate)",
        review: "lorem........"
    }
]
