import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub and External Link icons
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Import the link icon

const Card = ({ image, title, githubLink, liveLink, techLogos }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <div className="icon relative">
              {/* Project Image */}
              <Image
                src={image}
                alt={title}
                width={300}
                height={200}
                className="shadow-lg w-full h-auto"
              />

              {/* Technology Logos */}
              <div className="flex space-x-2 mt-4 flex-row justify-center">
                {techLogos.map((icon, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={icon}
                    className="w-6 h-6 text-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="slide slide2">
          <div className="content flex flex-col items-center text-center">
            <p className="text-sm md:text-base">{title}</p>

            {/* GitHub and Live Website Links */}
            <div className="absolute bottom-2 flex space-x-2 z-10 ">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 p-1 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 p-1 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 mt-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
