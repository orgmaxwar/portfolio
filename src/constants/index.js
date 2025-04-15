import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

import tkaLogo from "../assets/company/tka.png"; // still using the same image

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "TKA",
    icon: tkaLogo,
    iconBg: "#112B3C",
    date: "2024 - Present",
    points: [
      "Building web apps using MERN stack.",
      "Working on user authentication and file sharing systems.",
      "Deploying and maintaining projects on PythonAnywhere and Glitch.",
      "Designing intuitive UIs and integrating Telegram bots into web services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mahmoud is an exceptional developer with great attention to detail. His web projects are always clean and efficient.",
    name: "Akmal Khozhiev",
    designation: "Father",
    company: "Private Client",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I worked with Mahmoud on a Telegram bot project — he's fast, smart, and professional.",
    name: "Bot Client",
    designation: "Founder",
    company: "CDN Telegraph",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Mahmoud's dedication to quality and learning is admirable. He delivers results every time.",
    name: "Mentor",
    designation: "Instructor",
    company: "TKA",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "CDN Telegraph Bot",
    description:
      "A Telegram bot built with Flask and Python that allows users to upload and retrieve files through Telegram, using a secure and stylish UI.",
    tags: [
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "telegrambot",
        color: "blue-text-gradient",
      },
      {
        name: "pythonanywhere",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Telegram-Like Chat App",
    description:
      "A sleek real-time web messaging platform where users can register, sign in with Google, and chat. Built with React and Flask backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "white-text-gradient",
      },
      {
        name: "google-oauth",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
