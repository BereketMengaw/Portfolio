import React from "react";

const JourneyBlock = ({ title, gradient }) => {
  return (
    <a href="#" className="block" style={{ "--bg": `var(${gradient})` }}>
      <div className="block__item">{title}</div>
    </a>
  );
};

const JourneyTimeline = () => {
  const milestones = [
    { title: "Born", gradient: "--gradient-1" },
    { title: "First Code", gradient: "--gradient-2" },
    { title: "University", gradient: "--gradient-3" },
    { title: "Freelancing", gradient: "--gradient-4" },
    { title: "Full-Stack Dev", gradient: "--gradient-5" },
  ];

  return (
    <nav className="blocks">
      {milestones.map((milestone, index) => (
        <JourneyBlock key={index} {...milestone} />
      ))}
    </nav>
  );
};

export default JourneyTimeline;
