import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import Project1 from '../assets/p1.png'
import Project2 from '../assets/Project2.png'

export const Skills = [
    {
        id: 0,
        tech: "React JS",
        icon: <FaReact />
    },
    {
        id: 1,
        tech: "HTML",
        icon: <FaHtml5 />
    },
    {
        id: 2,
        tech: " CSS",
        icon: <FaCss3 />
    },
    {
        id: 3,
        tech: "Javascript ",
        icon: <SiJavascript />
    }
];

export const projectDetails=[
    {
        id:0,
        project_git:'https://github.com/Sana-yoosuf/restaurent-design',
        project_name:"Restaurant App",
        project_desc: "This is a restaurant landing page with great UI made with ReactJs. It typically includes features such as a menu with prices,images and achivements",
        tech_stack:['HTML','CSS','React JS'],
        project_img: Project1,
        project_url:'https://techmedia-gerich-restaurant.netlify.app',
        reverse:false
    },


    {
        id:1,
        project_git:'https://github.com/Sana-yoosuf/gym_app',
        project_name:"Fitness App",
        project_desc: "Modern fitness exercise App with functionality to choose exercise categories and specific muscle groups.Browse more than 1000 exercises with example and also displays related videos from youtube",
        tech_stack:['HTML','Material UI','React JS'],
        project_img: Project2,
        project_url:'https://techmedia-gym.netlify.app',
        reverse:true
    },

    {
        id:2,
        project_git:'https://github.com/Sana-yoosuf/e-shop',
        project_name:"E-commerce Website",
        project_desc: "This is e-commerce website where we can place order",
        tech_stack:['HTML','CSS','React JS'],
        project_img: Project1,
        project_url:'https://techmedia-gerich-restaurant.netlify.app',
        reverse:false
    },

]

export const navLinks=[
    {
        id:0,
        name:"Home",
        href:'Home',
        offset:'-100'
    },

    {
        id:1,
        name:"My skills",
        href:'Skills',
      
    },
    {
        id:2,
        name:"My Projects",
        href:'Projects',
        
    },
    {
        id:3,
        name:"My Contact ",
        href:'Contact',
        offset:'-100'
    },

]