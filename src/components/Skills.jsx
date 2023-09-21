import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" class="pa-skills">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1 text-center">
              <h5 class="pa-h1-v3 pa-bright pt-4 pb-1 mb-4 fadeInDelay03Duration10">
                Let <strong>Our Skills</strong> speak for Us
              </h5>
              <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>

          <div class="row pa-skills-row">
            <div class="col-12">
              <div class="pa-skill-warp">
                <p class="pa-skill-name pa-skill-el">Adobe Creative Cloud</p>
                <div class="pa-skill-area pa-skill-el">
                  <div
                    class="pa-skill-bar progressBar"
                    // style="width: 75%;"
                  ></div>
                </div>
                <p class="pa-skill-number pa-skill-el">
                  <span class="pa-counterskills">75</span>
                  <span class="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div class="pa-skill-warp">
                <p class="pa-skill-name pa-skill-el">Wordpress</p>
                <div class="pa-skill-area pa-skill-el">
                  <div
                    class="pa-skill-bar progressBar"
                    // style="width: 80%;"
                  ></div>
                </div>
                <p class="pa-skill-number pa-skill-el">
                  <span class="pa-counterskills">80</span>
                  <span class="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div class="pa-skill-warp">
                <p class="pa-skill-name pa-skill-el">Drupal</p>
                <div class="pa-skill-area pa-skill-el">
                  <div
                    class="pa-skill-bar progressBar"
                    // style="width: 50%;"
                  ></div>
                </div>
                <p class="pa-skill-number pa-skill-el">
                  <span class="pa-counterskills">50</span>
                  <span class="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div class="pa-skill-warp">
                <p class="pa-skill-name pa-skill-el">Graphic Design</p>
                <div class="pa-skill-area pa-skill-el">
                  <div
                    class="pa-skill-bar progressBar"
                    // style="width: 70%;"
                  ></div>
                </div>
                <p class="pa-skill-number pa-skill-el">
                  <span class="pa-counterskills">70</span>
                  <span class="fadeInDelay10Duration10">%</span>
                </p>
              </div>
              <div class="pa-skill-warp">
                <p class="pa-skill-name pa-skill-el">HTML / CSS / JAVASCRIPT</p>
                <div class="pa-skill-area pa-skill-el">
                  <div
                    class="pa-skill-bar progressBar"
                    // style="width: 60%;"
                  ></div>
                </div>
                <p class="pa-skill-number pa-skill-el">
                  <span class="pa-counterskills">60</span>
                  <span class="fadeInDelay10Duration10">%</span>
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
