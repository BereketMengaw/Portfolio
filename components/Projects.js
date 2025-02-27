import React from "react";
import Card from "./Card"; // Import the reusable Card component
import img1 from "../pubilc/assets/img/projectTwo.jpg";
import img2 from "../pubilc/assets/img/projectOne.jpg";
import img3 from "../pubilc/assets/img/projectThree.jpg";
import img4 from "../pubilc/assets/img/ProjectFour.png";
import img5 from "../pubilc/assets/img/projectOne.jpg";

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faVuejs,
  faAngular,
  faJs,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

function Projects() {
  // Data for the cards
  const cardsData = [
    {
      image: img1,
      title:
        "Dagu Learn is an Ethiopian-based paid course-sharing platform designed for creators, offering full access control and powerful management tools. ",
      githubLink: "https://github.com/BereketMengaw/dagulearnBackend.git",
      liveLink: "https://dagulearn.vercel.app",
      techLogos: [faReact, faJs, faDocker],
    },
    {
      image: img2,
      title:
        "Misale Tutors is a tutor agency website powered by Google API, optimizing functionality and user experience. It efficiently connects students with qualified tutors using advanced features.",
      githubLink:
        "https://github.com/BereketMengaw/new-misale-tutor-website-.git",
      liveLink: "https://misaletutors.com",
      techLogos: [faNodeJs, faJs, faAws],
    },
    {
      image: img3,
      title:
        "Banchi Delivery is a practice project centered on delivery services. Though still in development, it has been successfully deployed.",
      githubLink: "https://github.com/BereketMengaw/Delivery-Website.git",
      liveLink: "https://banchi-delivery-website.vercel.app/",
      techLogos: [faPython, faDocker, faAws],
    },
    {
      image: img4,
      title:
        "Apple Website replica(Onprogress) : it is react based website which is a clone for apple webite ",
      githubLink:
        "https://github.com/BereketMengaw/Apple-Website-React---replica-.git",

      techLogos: [faVuejs, faJs, faDocker],
    },
    {
      image: img5,
      title: "Project Five",
      githubLink: "https://github.com/yourusername/project-five",
      liveLink: "https://project-five.com",
      techLogos: [faAngular, faJs, faAws],
    },
  ];

  return (
    <div id="projects" className="flex flex-col mt-20 mx-4 md:mx-16">
      <h1 className="md:text-6xl text-4xl hand flex flex-row justify-center text-gray-800 dark:text-white">
        My Projects
      </h1>

      {/* First Row */}
      <div className="flex flex-col md:flex-row md:mx-20">
        {cardsData.slice(0, 3).map((card, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <Card
              image={card.image}
              title={card.title}
              githubLink={card.githubLink}
              liveLink={card.liveLink}
              techLogos={card.techLogos}
            />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row mx-4 md:mx-40">
        {cardsData.slice(3).map((card, index) => (
          <div key={index + 3} className="w-full md:w-1/2 p-4">
            <Card
              image={card.image}
              title={card.title}
              githubLink={card.githubLink}
              liveLink={card.liveLink}
              techLogos={card.techLogos}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
