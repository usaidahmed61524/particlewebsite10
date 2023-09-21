import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        id="top"
        className="pa-hero bg-hero pa-centered-section pa-full-height pa-image-back pushable-content"
        // style="background-image: url(assets/images/hero-dark.jpg);"
      >
        <div
          className="pa-absolute-fill pa-gradient-back-v1"
          // style="opacity: 0;"
        ></div>
        <div id="particles-js"></div>

        <div className="container pa-hero-content text-center">
          <div className="row pa-hero-typed-text">
            <div className="col-12">
              <div className="typed-text mega-typed">
                <span className="animated-text-effect">
                  <span className="typed-cursor">|</span>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-12" style="max-width: 976px; margin: 0 auto;"> */}
            <div className="col-12">
              <h2 className="pa-h2-v2-hero-subhead pa-white">
                The Coolest Modern HTML Template is Here! Welcome to{" "}
                <strong>Particle</strong> by Skilltech Web Design
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
