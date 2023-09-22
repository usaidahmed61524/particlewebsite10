import React from "react";

const Header = () => {
  return (
    <>
      <div className="pa-page-transition pa-page-transition-1 is-active"></div>
      <div
        className="pa-overlay"
        // style="position: fixed; top: 0; left: 0; z-index: 10002; width: 100vw; height: 100vh; pointer-events: none; background: #091019;"
      ></div>

      <a className="pa-mobile-main-logo" href="#">
        <img alt="" src="assets/images/logo-normal.png" />
      </a>

      <nav
        id="main-nav"
        className="pa-menu navbar pa-navbar navbar-expand-lg navbar-dark bg-transparent static-top"
      >
        <a className="navbar-brand" href="#">
          <img alt="" src="assets/images/logo-normal.png" />
        </a>

        <ul className="navbar-nav ml-auto">
          <li
            data-nav-custom-content
            className="custom-content pa-mobile-menu-logo"
          >
            <a className="pa-mobile-navbar-brand" href="#">
              <img alt="" src="assets/images/logo-mobile.png" />
            </a>
          </li>

          <li className="nav-item menu-item-has-children">
            <a className="nav-link hvr-underline-from-center" href="#">
              Home
            </a>
            <ul className="pa-submenu-ul">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Light (<em>default</em>)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Light Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Light YT Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home Dark
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Dark Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Dark YT Video
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item menu-item-has-children">
            <a className="nav-link hvr-underline-from-center" href="#">
              Our Work
            </a>
            <ul className="pa-submenu-ul">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project Inner Page 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project Inner Page 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project Inner Page 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project Inner Page 4
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="#about-us">
              About Us
            </a>
          </li>

          <li className="nav-item menu-item-has-children">
            <a className="nav-link hvr-underline-from-center" href="#">
              Services
            </a>
            <ul className="pa-submenu-ul">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  All Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service Inner Page 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service Inner Page 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service Inner Page 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service Inner Page 4
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="#skills">
              Our Skills
            </a>
          </li>

          <li className="nav-item menu-item-has-children">
            <a className="nav-link hvr-underline-from-center" href="#">
              <strong>NEW</strong> / Blog
            </a>
            <ul className="pa-submenu-ul">
              <li className="nav-item menu-item-has-children">
                <a className="nav-link" href="#">
                  Magazine Style Blog
                </a>
                <ul className="pa-sub-submenu-ul">
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Right (<em>default</em>)
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog No Sidebar
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog No Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-item-has-children">
                <a className="nav-link" href="#">
                  Casual Style Blog
                </a>
                <ul className="pa-sub-submenu-ul">
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog No Sidebar
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Dark Blog No Sidebar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-item-has-children">
                <a className="nav-link" href="#">
                  Classic Blog
                </a>
                <ul className="pa-sub-submenu-ul">
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Blog No Sidebar (<em>Big</em>)
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link"
                      href="#"
                    >
                      Dark Blog No Sidebar (<em>Big</em>)
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-item-has-children">
                <a className="nav-link" href="#">
                  Post / Single
                </a>
                <ul className="pa-sub-submenu-ul">
                  <li>
                    <a className="nav-link" href="#">
                      Post Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Post Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Post No Sidebar
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Dark Post Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Dark Post Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Dark Post No Sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="#contact-us">
              Contact Us
            </a>
          </li>

          <li data-nav-custom-content className="custom-content pa-menu-socials">
            <div className="pa-social-section">
              <h1 className="pa-h1-v3 pa-bright fadeInDelay03Duration10">
                <strong>Connect</strong> with us
              </h1>
              <a
                className="pa-social-icons"
                href="#"
                
              >
                <span className="fadeInDelay03Duration10">
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
              <a
                className="pa-social-icons"
                href="#"
                
              >
                <span className="fadeInDelay03Duration10">
                  <i className="fa fa-behance"></i>
                </span>
              </a>
              <a
                className="pa-social-icons"
                href="#"
                
              >
                <span className="fadeInDelay03Duration10">
                  <i className="fa fa-dribbble"></i>
                </span>
              </a>
              <a
                className="pa-social-icons"
                href="#"
                
              >
                <span className="fadeInDelay03Duration10">
                  <i className="fa fa-instagram"></i>
                </span>
              </a>
              <p className="pa-p-v1 pa-white pa-contact-lastline fadeInDelay03Duration10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
