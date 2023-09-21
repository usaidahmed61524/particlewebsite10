import React from "react";

const Connect = () => {
  return (
    <>
      <section
        id="contact-us"
        class="pa-contact-us"
        data-parallax="scroll"
        data-speed="0"
        data-image-src="assets/images/contact-hero.jpg"
      >
        <div class="container">
          <div class="row text-center">
            <div class="col-12 col-xl-10 offset-xl-1">
              <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
                Let's <strong>Connect</strong>
              </h1>
              <p class="pa-p-v1 pa-white fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <div class="pt-0 pt-sm-3 pt-md-3 pt-lg-4 pt-xl-5"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-xl-5 offset-xl-1 pa-contact-info d-flex">
              <div class="pa-glass pa-left">
                <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                  Our office <strong>info</strong>
                </h1>
                <p class="pa-p-v1 pa-white fadeInDelay03Duration10">
                  <span>
                    <i class="material-icons">mail_outline</i>
                  </span>
                  particle@yoursite.com
                </p>
                <p class="pa-p-v1 pa-white fadeInDelay06Duration10">
                  <span>
                    <i class="material-icons">call</i>
                  </span>
                  +381 (0) 21 555 4597
                </p>
                <p class="pa-p-v1 pa-white fadeInDelay10Duration10">
                  <span>
                    <i class="material-icons">business</i>
                  </span>
                  555 Downing st. Suite 1000
                </p>
                <p class="pa-p-v1 pa-white fadeInDelay10Duration10">
                  <span>
                    <i class="material-icons">location_on</i>
                  </span>
                  New York, NY 10010
                </p>
                <div class="pa-social-section">
                  <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                    <strong>Connect</strong> with us
                  </h1>
                  <a
                    class="pa-social-icons"
                    href="https://www.facebook.com/SkilltechWebDesign"
                    target="_blank"
                  >
                    <span class="fadeInDelay03Duration10">
                      <i class="fa fa-facebook"></i>
                    </span>
                  </a>
                  <a
                    class="pa-social-icons"
                    href="https://www.facebook.com/SkilltechWebDesign"
                    target="_blank"
                  >
                    <span class="fadeInDelay03Duration10">
                      <i class="fa fa-behance"></i>
                    </span>
                  </a>
                  <a
                    class="pa-social-icons"
                    href="https://www.facebook.com/SkilltechWebDesign"
                    target="_blank"
                  >
                    <span class="fadeInDelay03Duration10">
                      <i class="fa fa-dribbble"></i>
                    </span>
                  </a>
                  <a
                    class="pa-social-icons"
                    href="https://www.facebook.com/SkilltechWebDesign"
                    target="_blank"
                  >
                    <span class="fadeInDelay03Duration10">
                      <i class="fa fa-instagram"></i>
                    </span>
                  </a>
                  <p class="pa-p-v1 pa-white pa-contact-lastline fadeInDelay03Duration10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-5 pa-contact-form d-flex justify-content-end">
              <div class="pa-glass pa-right">
                <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                  Send us a <strong>Message</strong>
                </h1>

                <form>
                  <div class="form-group">
                    <label for="the_name">Name</label>
                    <input type="text" name="the_name" tabindex="1" />
                  </div>
                  <div class="form-group">
                    <label for="the_email">Email</label>
                    <input type="email" name="the_email" tabindex="2" />
                  </div>
                  <div class="form-group">
                    <label for="the_message">Message</label>
                    <textarea name="the_message" tabindex="3"></textarea>
                  </div>
                  <button
                    type="submit"
                    class="pa-hvr-sweep-to-right"
                    tabindex="4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
