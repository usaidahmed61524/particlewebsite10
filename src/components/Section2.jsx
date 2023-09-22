import React from "react";

const Section2 = () => {
  return (
    <>
      <section
        className="pa-cta-v1"
        data-parallax="scroll"
        data-speed="0.2"
        data-image-src="./assets/images/service-item.jpg"
      >
        <div className="container">
          <h1 className="pa-h1-v1 pa-bright fadeInLeftDelay03Duration10">
            <strong>Coolest HTML Theme Yet?</strong>
          </h1>
          <h4 className="pa-h4-v1 pa-bright fadeInLeftDelay03Duration10">
            Open Particle today, why not!
          </h4>
          <div className="mt-4"></div>
          <a
            className="pa-button-primary pa-hvr-sweep-to-right fadeInRightDelay11Duration10"
           href="#"
          >
            Get it Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Section2;
