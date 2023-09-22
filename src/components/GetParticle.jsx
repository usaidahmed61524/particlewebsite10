import React from "react";

const GetParticle = () => {
  return (
    <>
      <section
        className="pa-cta-v2 pa-centered-section pa-image-back bg-image-color"

        // style="background-image: url(assets/images/low-poly.jpg);"
      >
        <div className="pa-absolute-fill pa-gradient-back-v1 gradient"></div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1 text-center">
              <h1 className="pa-h1-v2 pa-bright fadeInDelay00Duration10">
                Like what You see? <strong>Get Particle</strong> Now!
              </h1>
              <p className="pa-p-v1 pa-white fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <a
                href="#"
                className="pa-button-secondary pa-hvr-sweep-to-right fadeInRightDelay11Duration10"
               
              >
                Get it Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetParticle;
