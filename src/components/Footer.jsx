import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 text-center my-2 pt-5 pb-4">
              <p>
                Copyright © 2021 -{" "}
                <a href="http://www.skilltechwebdesign.com/" target="_blank">
                  SkilltechWebDesign.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="pa-back-to-top-wrap">
          <a class="pa-back-to-top" href="#top">
            <span class="pa-back-to-top"></span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
