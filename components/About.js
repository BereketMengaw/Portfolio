import React from "react";

function About() {
  return (
    <div id="about">
      <div className="content h-1/2 mb-4">
        <h1 className="title handwritten">
          My Journey
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </h1>
        <p className="subtitle handwritten text-2xl m md:mx-32">
          My journey as a full-stack developer at Addis Ababa University has
          been driven by a deep passion for blending technology and business. I
          am fascinated by how digital solutions create opportunities, and I
          constantly explore ways to bridge the gap between innovation and
          entrepreneurship. At 23, I dedicate my time to mastering both fields,
          studying relentlessly to understand their intersection. This is why I
          created DaguLearn—an initiative to provide monetization access for
          Ethiopian creators, as YouTube has not yet introduced monetization in
          Ethiopia. Technology isn't just a tool for me; it's a means to create
          impactful change and empower others.
        </p>
      </div>
    </div>
  );
}

export default About;
