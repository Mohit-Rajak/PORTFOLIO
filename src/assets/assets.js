import zync from "./zync.png";
import chat from "./chatApp.png";
import airbnb from "./airbnb.png";
import AiCode from "./AiCode.png";
import food from "./food.png";
import pizza from "./pizza.png";
import Swiggy from "./Swiggy.png";
import portfolio from "./portfolio.png";
import Haker from "./haker.png";
import Stock from "./stock.png";
import password from "./password.png";
import cake from "./cake.png";
import HealthCare from "./HealthCare.png";
import analog from "./analog.png";
import music from "./music.png";
import Education from "./Education.png";
import Gym from "./Gym.png";


export const assets = {
  zync,
  Stock,
  chat,
  food,

};

// assets.js
export const projects = [
  {
    id: 1,
    name: "E-Commerce Website (MERN, Tailwind)",
    description:
      "A full-stack e-commerce web application built using the MERN stack. It includes user authentication, product listing, cart functionality, order management, and an admin panel for managing products.",
    image: [zync],
    liveLink: "https://fashion-frontend-two.vercel.app/",
    githubLink: "https://github.com/mohitrajak/fashion-store",
  },
  {
    id: 2,
    name: "Chat Application (MERN, Socket.IO)",
    description:
      "A real-time chat application developed using the MERN stack with Socket.IO integration. It supports user authentication, one-to-one and group chats, real-time messaging, notifications, and a fully responsive user interface for seamless communication.",
    image: [chat],
    liveLink: "https://chat-frontend-zeta-ecru.vercel.app/signin",
    githubLink: "https://github.com/Mohit-Rajak/chat-frontend",
  },
  {
    id: 3,
    name: "Food Delivery App (React, CSS)",
    description:
      "A modern food delivery web application featuring restaurant listings, menu browsing, and a smooth ordering interface. Designed with a clean UI and responsive layout to provide users with an intuitive and engaging food ordering experience.",
    image: [food],
    liveLink: "https://chatapp.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/FoodApp",
  },
  {
    id: 4,
    name: "Airbnb Website (Node, Express, MongoDB)",
    description:
      "A full-stack Airbnb clone that allows users to explore listings, view property details, and manage bookings. The project focuses on backend architecture, REST APIs, authentication, and database management with a structured server-side approach.",
    image: [airbnb],
    liveLink: "https://chatapp.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/AirbnbWebsite",
  },
  {
    id: 5,
    name: "Personal Portfolio (React, Tailwind)",
    description:
      "A personal portfolio website showcasing skills, projects, and experience. Built with React and Tailwind CSS, it features a modern design, smooth navigation, responsive layout, and serves as a professional online presence.",
    image: [portfolio],
    liveLink: "https://myportfolio-three-olive.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/My_Portfolio",
  },
  {
    id: 6,
    name: "Swiggy Clone (React, API)",
    description:
      "A Swiggy-inspired food ordering application with restaurant listings, dynamic menus, and cart functionality. Built to practice real-world UI patterns, API handling, and responsive design principles in modern frontend development.",
    image: [Swiggy],
    liveLink: "https://swiggy-clone-ashen-eta.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Swiggy_Clone",
  },
  {
    id: 7,
    name: "Stock Sphere (MERN, Bootstrap)",
    description:
      "A stock portfolio management application built using the MERN stack. It allows users to track stocks, manage portfolios, view dashboards, and securely authenticate while maintaining a scalable backend architecture.",
    image: [Stock],
    liveLink: "https://chatapp.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/StockSphere",
  },
  {
    id: 8,
    name: "AI Code Reviewer (MERN, Gemini AI)",
    description:
      "An AI-powered code review platform that analyzes source code and provides feedback on best practices, performance, and quality. Built using the MERN stack and integrated with Gemini AI for intelligent analysis.",
    image: [AiCode],
    liveLink: "https://chatapp.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/AI_Code_Reviewer",
  },
  {
    id: 9,
    name: "Pizza Landing Page (HTML, CSS, JS)",
    description:
      "A visually appealing pizza landing page designed with HTML, CSS, and JavaScript. It features interactive sections, responsive design, and smooth animations to enhance user engagement and browsing experience.",
    image: [pizza],
    liveLink: "https://pizza-landing-page-phi.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Pizza-Landing-page",
  },
  {
    id: 10,
    name: "Education Website (HTML, CSS, JS)",
    description:
      "A responsive education platform designed to showcase courses, features, and learning content. Built with a focus on accessibility, clean UI, and adaptability across devices for a better learning experience.",
    image: [Education],
    liveLink: "https://education-website-ten-rust.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/EducationWebsite",
  },
  {
    id: 11,
    name: "Password Generator (HTML, CSS, JS)",
    description:
      "A simple and secure password generator that allows users to generate random passwords based on selected length. Built to demonstrate JavaScript logic, UI interaction, and basic security concepts.",
    image: [password],
    liveLink: "https://password-generator-eta-beige.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Password_Generator",
  },
  {
    id: 12,
    name: "Analog Clock (HTML, CSS, JS)",
    description:
      "A functional analog clock that displays real-time updates using JavaScript. This project demonstrates DOM manipulation, CSS styling, and basic time-based logic in a clean visual format.",
    image: [analog],
    liveLink: "https://analog-clock-rho-sooty.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Analog-Clock",
  },
  {
    id: 13,
    name: "Cake Shop Website (HTML, CSS)",
    description:
      "A cake shop website designed to showcase different cake categories and services. It features a clean layout, easy navigation, and responsive design suitable for small business representation.",
    image: [cake],
    liveLink: "https://analog-clock-rho-sooty.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/CakeShopWebsite",
  },
  {
    id: 14,
    name: "HealthCare Website (HTML, CSS)",
    description:
      "A healthcare information website built with a focus on clarity and accessibility. It presents health services, information sections, and a structured layout using modern HTML and CSS practices.",
    image: [HealthCare],
    liveLink: "https://health-care-website-silk.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/HealthCareWebsite",
  },
  {
    id: 15,
    name: "Gym Landing Page (HTML, CSS, JS)",
    description:
      "A gym landing page showcasing fitness services, plans, and highlights. Built with a responsive layout and interactive elements to attract users and improve visual engagement.",
    image: [Gym],
    liveLink: "https://gym-e-commerse-website.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/GYM-E-commerse-Website-",
  },
  {
    id: 16,
    name: "Spotify Web Clone (HTML, CSS, Bootstrap)",
    description:
      "A Spotify-inspired web clone that replicates the look and feel of the original platform. This project focuses on UI design, layout structuring, and responsiveness using Bootstrap.",
    image: [music],
    liveLink: "https://spotify-web-clone-gamma.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Spotify-Web-Clone",
  },
  {
    id: 17,
    name: "HackerRank Login Page (HTML, CSS)",
    description:
      "A HackerRank-style login page designed using HTML and CSS. The project focuses on UI replication, form styling, responsiveness, and clean layout structure for frontend practice.",
    image: [Haker],
    liveLink: "https://spotify-web-clone-gamma.vercel.app/",
    githubLink: "https://github.com/Mohit-Rajak/Spotify-Web-Clone",
  },
];

