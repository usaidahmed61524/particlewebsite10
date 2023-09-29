import * as React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import {
  Box,
  CircularProgress,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import TokenIcon from "@mui/icons-material/Token";

function SimpleDialog(props) {
  const { onClose, open } = props;
  const [domain, setDomain] = React.useState("");
  const [token, setToken] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const [loader, setloader] = React.useState(false);

  const handleClose = () => {
    onClose(false);
  };

  const onfinished = async () => {
    if (!domain || !token) {
      setInputError("Please fill in these fields! ");
      return;
    }
    setloader(true);
    const regex = /\.mmit$/;
    if (!regex.test(domain)) {
      // setLoading(false);
      // setInputError("Please enter a valid .mmit domain address.");
      setInputError("Please enter a valid .mmit domain address.");
      setloader(false);
      return;
    } else {
      try {
       
        const response = await axios.get(
          `https://dog-eight-phi.vercel.app/login?username=${domain}&tokenid=${token}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
        setInputError("Credentials are not valid."); 
      }
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Login With MMIT Domain</DialogTitle>
      <Box variant="standard" component={"form"}>
        <FormControl>
          <Input
            id="input-with-icon-adornment"
            placeholder="Domain:"
            startAdornment={
              <InputAdornment position="start">
                <DomainVerificationIcon />
              </InputAdornment>
            }
            onChange={(e) => {
              setDomain(e.target.value);
              setInputError("");
            }}
          />
        </FormControl>
        <FormControl>
          <Input
            id="input-with-icon-adornment"
            placeholder="Token Id:"
            type="number"
            startAdornment={
              <InputAdornment position="start">
                <TokenIcon />
              </InputAdornment>
            }
            onChange={(e) => {
              setToken(e.target.value);
              setInputError("");
            }}
          />
        </FormControl>
        <p className="errorMessage">{inputError}</p>
        <Button
          variant="contained"
          color="secondary"
          startIcon={
            loader && <CircularProgress color="inherit" size={"20px"} />
          }
          onClick={onfinished}
          sx={{
            margin: "5px 0px",
          }}
        >
          Login
        </Button>
      </Box>
    </Dialog>
  );
}

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
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

          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="#about-us">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link hvr-underline-from-center" href="#skills">
              Our Skills
            </a>
          </li>

          {/* <li className="nav-item menu-item-has-children">
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
                    <a className="nav-link" href="#">
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
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
                    <a className="nav-link" href="#">
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
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
                    <a className="nav-link" href="#">
                      Dark Blog Sidebar Right
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
                      Dark Blog Sidebar Left
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#">
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
          </li>*/}

          <li className="nav-item">
            <a
              className="nav-link hvr-underline-from-center"
              href="#contact-us"
            >
              Contact Us
            </a>
          </li>

          <li className="nav-item">
            <div className="nav-link hvr-underline-from-center">
              <Typography variant="subtitle1" component="div">
                Login Account:
              </Typography>
            </div>
          </li>

          <li className="nav-item">
            {/* <a
              className="nav-link hvr-underline-from-center"
              href="#contact-us"
            >
              Contact Us
            </a> */}

            <div className="nav-link hvr-underline-from-center">
              <Button
                variant="contained"
                color="secondary"
                endIcon={<LoginIcon />}
                onClick={handleClickOpen}
              >
                Login
              </Button>
              <SimpleDialog open={open} onClose={handleClose} />
            </div>
          </li>

          <li
            data-nav-custom-content
            className="custom-content pa-menu-socials"
          >
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
