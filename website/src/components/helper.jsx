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
        review: `" His interpersonal and communication skills have allowed him to develop productive working relationships with both our clients and our staffs... "`
    },
    {
        id: 2,
        portrait: Portrait2,
        name: "Lihang Ying",
        job_title: "Senior Computer Vision Engineer, Peloton Interactive",
        review: `" I have known Peidong for many years since he was a junior college student. I have been consistently impressed by his positive attitude whenever he encountered problems. His resilience makes me believe that he will be able to tackle any obstacles in his life... "`
    },
    {
        id: 3,
        portrait: Portrait3,
        name: "Junchao Wang",
        job_title: "Morgan Stanley Developer (Associate)",
        review: `" I can feel that he really wants to be a good developer. As one of his best friend, I have seen him failed in the past, but he stood up from failure every single time. He truly has a strong mentality...  "`
    }
]
