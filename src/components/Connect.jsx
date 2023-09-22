import React from "react";

const Connect = () => {
  return (
    <>
      <section
        id="contact-us"
        className="pa-contact-us"
        data-parallax="scroll"
        data-speed="0"
        data-image-src="assets/images/contact-hero.jpg"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-xl-10 offset-xl-1">
              <h1 className="pa-h1-v2 pa-bright fadeInDelay00Duration10">
                Let's <strong>Connect</strong>
              </h1>
              <p className="pa-p-v1 pa-white fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <div className="pt-0 pt-sm-3 pt-md-3 pt-lg-4 pt-xl-5"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-1 pa-contact-info d-flex">
              <div className="pa-glass pa-left">
                <h1 className="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                  Our office <strong>info</strong>
                </h1>
                <p className="pa-p-v1 pa-white fadeInDelay03Duration10">
                  <span>
                    <i className="material-icons">mail_outline</i>
                  </span>
                  particle@yoursite.com
                </p>
                <p className="pa-p-v1 pa-white fadeInDelay06Duration10">
                  <span>
                    <i className="material-icons">call</i>
                  </span>
                  +381 (0) 21 555 4597
                </p>
                <p className="pa-p-v1 pa-white fadeInDelay10Duration10">
                  <span>
                    <i className="material-icons">business</i>
                  </span>
                  555 Downing st. Suite 1000
                </p>
                <p className="pa-p-v1 pa-white fadeInDelay10Duration10">
                  <span>
                    <i className="material-icons">location_on</i>
                  </span>
                  New York, NY 10010
                </p>
                <div className="pa-social-section">
                  <h1 className="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                    <strong>Connect</strong> with us
                  </h1>
                  <a className="pa-social-icons" href="#">
                    <span className="fadeInDelay03Duration10">
                      <i className="fa fa-facebook"></i>
                    </span>
                  </a>
                  <a className="pa-social-icons" href="#">
                    <span className="fadeInDelay03Duration10">
                      <i className="fa fa-behance"></i>
                    </span>
                  </a>
                  <a className="pa-social-icons" href="#">
                    <span className="fadeInDelay03Duration10">
                      <i className="fa fa-dribbble"></i>
                    </span>
                  </a>
                  <a className="pa-social-icons" href="#">
                    <span className="fadeInDelay03Duration10">
                      <i className="fa fa-instagram"></i>
                    </span>
                  </a>
                  <p className="pa-p-v1 pa-white pa-contact-lastline fadeInDelay03Duration10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5 pa-contact-form d-flex justify-content-end">
              <div className="pa-glass pa-right">
                <h1 className="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                  Send us a <strong>Message</strong>
                </h1>

                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="the_name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="the_email" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="the_message"></textarea>
                  </div>
                  <button type="submit" className="pa-hvr-sweep-to-right">
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
