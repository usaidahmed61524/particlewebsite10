import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about-us"
        class="pa-about-us pa-standard-section text-center pa-dark"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
              <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
                <strong>About</strong> Particle Company
              </h1>
              <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
            </div>
          </div>
          <div class="row">
            <ul class="pa-icon-list-horizontal-dark">
              <li>
                <span class="pa-icon-list-icon fadeInDelay03Duration10">
                  <i class="material-icons">beenhere</i>
                </span>
                <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay03Duration10">
                  Super fast & reliable
                </p>
              </li>
              <li>
                <span class="pa-icon-list-icon fadeInDelay06Duration10">
                  <i class="material-icons">comment</i>
                </span>
                <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay06Duration10">
                  24 Hour Support
                </p>
              </li>
              <li>
                <span class="pa-icon-list-icon fadeInDelay10Duration10">
                  <i class="material-icons">insert_chart</i>
                </span>
                <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay10Duration10">
                  We Get the Results
                </p>
              </li>
            </ul>
          </div>

          <div class="row">
            <div class="col-12 pa-about-us-bottom-images">
              <img
                alt=""
                class="pa-about-img-left fadeInRight--Custom"
                src="assets/images/ipads-left.png"
              />
              <img
                alt=""
                class="pa-about-img-center slideup"
                src="assets/images/ipads-center.png"
              />
              <img
                alt=""
                class="pa-about-img-right fadeInLeft--Custom"
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
