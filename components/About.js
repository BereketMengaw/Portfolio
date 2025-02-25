import React from "react";

function About() {
  return (
    <div>
      <div className="content h-1/2 mb-4">
        <h1 className="title">
          My Journey
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </h1>
        <p className="subtitle handwritten text-2xl m md:mx-32">
          At 23, I turned challenges into code and dreams into reality. A
          self-taught developer, I build my future line by line, fueled by
          passion and perseverance. My journey is a testament to the strength of
          a dreamer who never stops learning.
        </p>
      </div>
    </div>
  );
}

export default About;
