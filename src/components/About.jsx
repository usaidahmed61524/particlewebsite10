import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about-us"
        className="pa-about-us pa-standard-section text-center pa-dark"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1">
              <h1 className="pa-h1-v2 pa-bright fadeInDelay00Duration10">
                <strong>About</strong> Particle Company
              </h1>
              <p className="pa-p-v1 pa-bright fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
            </div>
          </div>
          <div className="row">
            <ul className="pa-icon-list-horizontal-dark">
              <li>
                <span className="pa-icon-list-icon fadeInDelay03Duration10">
                  <i className="material-icons">beenhere</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay03Duration10">
                  Super fast & reliable
                </p>
              </li>
              <li>
                <span className="pa-icon-list-icon fadeInDelay06Duration10">
                  <i className="material-icons">comment</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay06Duration10">
                  24 Hour Support
                </p>
              </li>
              <li>
                <span className="pa-icon-list-icon fadeInDelay10Duration10">
                  <i className="material-icons">insert_chart</i>
                </span>
                <p className="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay10Duration10">
                  We Get the Results
                </p>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-12 pa-about-us-bottom-images">
              <img
                alt=""
                className="pa-about-img-left fadeInRight--Custom"
                src="assets/images/ipads-left.png"
              />
              <img
                alt=""
                className="pa-about-img-center slideup"
                src="assets/images/ipads-center.png"
              />
              <img
                alt=""
                className="pa-about-img-right fadeInLeft--Custom"
                src="assets/images/ipads-right.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
