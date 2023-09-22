import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-2 pt-5 pb-4">
              <p>
                Copyright © 2021 - <a href="#">UD Designer</a>
              </p>
            </div>
          </div>
        </div>
        <div className="pa-back-to-top-wrap">
          <a className="pa-back-to-top" href="#top">
            <span className="pa-back-to-top"></span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
