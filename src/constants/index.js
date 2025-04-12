import p1 from "../assets/projects/1.png";
import p2 from "../assets/projects/2.png";
import p3 from "../assets/projects/3.png";
import p4 from "../assets/projects/5.png";
import p5 from "../assets/projects/6.png";
import p6 from "../assets/projects/7.png";
import b1 from "../assets/projects/5.png";
import b2 from "../assets/projects/1.png";
import b3 from "../assets/projects/2.png";
import b4 from "../assets/projects/7.png";
import sw1 from "../assets/projects/sw1.png";
import sw2 from "../assets/projects/sw2.png";
import sw3 from "../assets/projects/sw3.png";
import c1 from "../assets/projects/c1.png";
import c2 from "../assets/projects/c2.png";
import c3 from "../assets/projects/c3.png";
import po1 from "../assets/projects/po1.png";
import po2 from "../assets/projects/po2.png";
import po3 from "../assets/projects/po3.png";


export const HERO_CONTENT = `I am an enthusiastic MERN stack developer with a strong foundation in building modern web applications using MongoDB, Express.js, React, and Node.js. As a fresher, I am constantly learning and applying new skills to real-world projects. I also have a deep interest in solving Data Structures and Algorithms problems, which helps me write efficient and optimized code. I'm excited to contribute to impactful tech solutions and grow as a full-stack developer.`;


export const PROJECTS = [
  {
    title: "E-Commerce Website (CLOSIFY)",
    siteText:"Visit Cartify",
    live:true,
    link:"",
    git:"https://github.com/siddharthkush12/E-commerce",
    image: [p1,p2,p3,p4,p5,p6],
    description:
      "A fully-featured, responsive e-commerce web application built using the MERN stack with modern UI/UX practices, secure authentication, and robust admin functionality. This project replicates real-world online shopping platforms with features including product listings, search, filtering, cart, wishlist, secure checkout, and admin control over orders, inventory, and users.",

    technologies: ["HTML", "TailwindCSS", "React", "Node.js", "Express.js", "MongoDB", "JWT", "PayPal API", "ShadCn","Redux","Cloudinary"],

  },
  {
    title: "Portfolio Website (MyPortfolio)",
    siteText: "Visit My Portfolio",
    live: true,
    link: "/",
    git: "https://github.com/siddharthkush12/Portfolio", 
    image: [po1, po2, po3], 
    description:
      "A modern, responsive portfolio website showcasing my skills, projects, and achievements. Built with React, Vite, TailwindCSS, and custom API integration for the contact form. The website features a clean UI/UX design, smooth animations, and detailed project displays to give visitors a professional and interactive experience.",
    technologies: ["HTML", "TailwindCSS", "React", "Vite", "EmailJS", "ShadCn"],
  },
 
  {
    title: "DevScribe - Blogging Platform *COMING_SOON",
    siteText: "Visit DevScribe",
    live:true,
    link:"/",
    git:"https://github.com/siddharthkush12/Learning_projects/tree/main/02_megablog",
    image: [b2, b1, b3, b4],
    description:
      "DevScribe is a modern blogging platform built using React and Appwrite that enables users to create, edit, and share their own blog posts. The app supports secure authentication, rich text editing, real-time database updates, and a sleek, responsive UI. It includes user profile management, blog categorization, and a comment system to foster community engagement.",
    technologies: [
      "React",
      "Appwrite",
      "TailwindCSS",
      "Rich Text Editor",
      "Appwrite Database",
      "Appwrite Authentication",
      "Framer Motion"
    ]
  },
  
  {
    title: "Swiggy Clone (Frontend Only)",
    siteText: "Explore on GitHub",
    live:false,
    link:"https://github.com/siddharthkush12/Learning_projects/tree/main/01_swiggy",
    image: [sw1, sw2, sw3],
    description:
      "A visually rich frontend-only clone of Swiggy, built using modern React and TailwindCSS. The app replicates the user interface and key client-side functionalities of a food delivery platform, including restaurant listings, dynamic menus, cart system, and responsive design. Data is mocked to simulate real-world interactions.",
    technologies: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "React Router",
      "Shimmer UI",
      "Mock API",
      "Custom Hooks"
    ]
  },
  {
    title: "Currency Converter App",
    siteText: "Explore on GitHub",
    live:false,
    link:"https://github.com/siddharthkush12/react-js-learning/tree/main/07_currencyconvert",
    image: [c1,c3,c2],
    description:
      "A sleek and simple currency converter web app built with React. It allows users to convert between various currencies using real-time exchange rates. The app features clean UI, responsive design, and intuitive controls for selecting currencies and entering amounts.",
    technologies: [
      "React",
      "TailwindCSS",
      "JavaScript",
      "REST API",
      "Axios",
      "React Hooks"
    ]
  }
];


export const CONTACT = {
  address: "Shiv Encalve, Deep Nagar, Jalandhar-cantt, Punjab",
  phoneNo: "+91 7380339254",
  email: "siddharth5044549.com",
};
