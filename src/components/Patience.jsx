import React from "react";

const Patience = () => {
  return (
    <>
      <section
        className="pa-quote"
        data-parallax="scroll"
        data-speed="0.2"
        data-image-src="assets/images/quote-background.jpg"
        // style="position: relative; z-index: 2;"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-xl-10 offset-xl-1">
              <h2 className="pa-h2-quote pa-bright fadeInDelay03Duration10">
                <q>
                  Patience, persistence and perspiration make an unbeatable
                  combination for <strong>success</strong>.
                </q>
              </h2>
              <p className="pa-quote-author pa-bright fadeInDelay03Duration10">
                Napoleon Hill
                <span className="pa-author-role">&nbsp;- Author</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patience;
