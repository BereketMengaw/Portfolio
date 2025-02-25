import React from "react";
import Card from "./Card"; // Import the reusable Card component
import img1 from "../pubilc/assets/img/projectOne.jpg";
import img2 from "../pubilc/assets/img/projectTwo.jpg";
import img3 from "../pubilc/assets/img/projectTwo.jpg";
import img4 from "../pubilc/assets/img/projectThree.jpg";
import img5 from "../pubilc/assets/img/projectThree.jpg";

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
      title: "Project One",
      githubLink: "https://github.com/yourusername/project-one",
      liveLink: "https://project-one.com",
      techLogos: [faReact, faJs, faDocker],
    },
    {
      image: img2,
      title: "Project Two",
      githubLink: "https://github.com/yourusername/project-two",
      liveLink: "https://project-two.com",
      techLogos: [faNodeJs, faJs, faAws],
    },
    {
      image: img3,
      title: "Project Three",
      githubLink: "https://github.com/yourusername/project-three",
      liveLink: "https://project-three.com",
      techLogos: [faPython, faDocker, faAws],
    },
    {
      image: img4,
      title: "Project Four",
      githubLink: "https://github.com/yourusername/project-four",
      liveLink: "https://project-four.com",
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
    <div className="flex flex-col mt-20 mx-16">
      {/* First Row */}
      <div className="flex flex-row">
        {cardsData.slice(0, 3).map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            githubLink={card.githubLink}
            liveLink={card.liveLink}
            techLogos={card.techLogos}
          />
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-row">
        {cardsData.slice(3).map((card, index) => (
          <Card
            key={index + 3} // Ensure unique keys
            image={card.image}
            title={card.title}
            githubLink={card.githubLink}
            liveLink={card.liveLink}
            techLogos={card.techLogos}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
