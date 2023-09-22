import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="pa-skills">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1 text-center">
              <h5 className="pa-h1-v3 pa-bright pt-4 pb-1 mb-4 fadeInDelay03Duration10">
                Let <strong>Our Skills</strong> speak for Us
              </h5>
              <p className="pa-p-v1 pa-bright fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>

          <div className="row pa-skills-row">
            <div className="col-12">
              <div className="pa-skill-warp">
                <p className="pa-skill-name pa-skill-el">
                  Adobe Creative Cloud
                </p>
                <div className="pa-skill-area pa-skill-el">
                  <div
                    className="pa-skill-bar progressBar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="pa-skill-number pa-skill-el">
                  <span className="pa-counterskills">75</span>
                  <span className="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div className="pa-skill-warp">
                <p className="pa-skill-name pa-skill-el">Wordpress</p>
                <div className="pa-skill-area pa-skill-el">
                  <div
                    className="pa-skill-bar progressBar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p className="pa-skill-number pa-skill-el">
                  <span className="pa-counterskills">80</span>
                  <span className="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div className="pa-skill-warp">
                <p className="pa-skill-name pa-skill-el">Drupal</p>
                <div className="pa-skill-area pa-skill-el">
                  <div
                    className="pa-skill-bar progressBar"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <p className="pa-skill-number pa-skill-el">
                  <span className="pa-counterskills">50</span>
                  <span className="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div className="pa-skill-warp">
                <p className="pa-skill-name pa-skill-el">Graphic Design</p>
                <div className="pa-skill-area pa-skill-el">
                  <div
                    className="pa-skill-bar progressBar"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <p className="pa-skill-number pa-skill-el">
                  <span className="pa-counterskills">70</span>
                  <span className="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div className="pa-skill-warp">
                <p className="pa-skill-name pa-skill-el">
                  HTML / CSS / JAVASCRIPT
                </p>
                <div className="pa-skill-area pa-skill-el">
                  <div
                    className="pa-skill-bar progressBar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="pa-skill-number pa-skill-el">
                  <span className="pa-counterskills">60</span>
                  <span className="fadeInDelay10Duration10">%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
