import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import Section2 from "./components/Section2";
import About from "./components/About";
import Section6 from "./components/Section6";
import Patience from "./components/Patience";
import GetParticle from "./components/GetParticle";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pa-homepage pa-dark">
        <Header />
        <HeroSection />
        <Section2 />
        <Portfolio />
        <About />
        <Section6 />
        <Patience />
        <GetParticle />
        <Skills />
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default App;

// <div class="pa-page-transition pa-page-transition-1 is-active"></div>
//         <div
//           class="pa-overlay"
//         ></div>

//         <a class="pa-mobile-main-logo" href="#">
//           <img alt="" src="assets/images/logo-normal.png" />
//         </a>

//         <nav
//           id="main-nav"
//           class="pa-menu navbar pa-navbar navbar-expand-lg navbar-dark bg-transparent static-top"
//         >
//           <a class="navbar-brand" href="#">
//             <img alt="" src="assets/images/logo-normal.png" />
//           </a>

//           <ul class="navbar-nav ml-auto">
//             <li
//               data-nav-custom-content
//               class="custom-content pa-mobile-menu-logo"
//             >
//               <a class="pa-mobile-navbar-brand" href="#">
//                 <img alt="" src="assets/images/logo-mobile.png" />
//               </a>
//             </li>

//             <li class="nav-item menu-item-has-children">
//               <a class="nav-link hvr-underline-from-center" href="#">
//                 Home
//               </a>
//               <ul class="pa-submenu-ul">
//                 <li class="nav-item">
//                   <a class="nav-link" href="index.html">
//                     Home Light (<em>default</em>)
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="index-video.html">
//                     Home Light Video
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="index-yt-video.html">
//                     Home Light YT Video
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link active" href="#">
//                     Home Dark
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="dark-index-video.html">
//                     Home Dark Video
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="dark-index-yt-video.html">
//                     Home Dark YT Video
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li class="nav-item menu-item-has-children">
//               <a class="nav-link hvr-underline-from-center" href="#">
//                 Our Work
//               </a>
//               <ul class="pa-submenu-ul">
//                 <li class="nav-item">
//                   <a class="nav-link" href="#portfolio">
//                     Portfolio
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="portfolio-item.html">
//                     Project Inner Page 1
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="portfolio-item.html">
//                     Project Inner Page 2
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="portfolio-item.html">
//                     Project Inner Page 3
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="portfolio-item.html">
//                     Project Inner Page 4
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link hvr-underline-from-center" href="#about-us">
//                 About Us
//               </a>
//             </li>

//             <li class="nav-item menu-item-has-children">
//               <a class="nav-link hvr-underline-from-center" href="#">
//                 Services
//               </a>
//               <ul class="pa-submenu-ul">
//                 <li class="nav-item">
//                   <a class="nav-link" href="#services">
//                     All Services
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="service-item.html">
//                     Service Inner Page 1
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="service-item.html">
//                     Service Inner Page 2
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="service-item.html">
//                     Service Inner Page 3
//                   </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="service-item.html">
//                     Service Inner Page 4
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link hvr-underline-from-center" href="#skills">
//                 Our Skills
//               </a>
//             </li>

//             <li class="nav-item menu-item-has-children">
//               <a class="nav-link hvr-underline-from-center" href="#">
//                 <strong>NEW</strong> / Blog
//               </a>
//               <ul class="pa-submenu-ul">
//                 <li class="nav-item menu-item-has-children">
//                   <a class="nav-link" href="#">
//                     Magazine Style Blog
//                   </a>
//                   <ul class="pa-sub-submenu-ul">
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="blog-magazine-sidebar-right.html"
//                       >
//                         Blog Sidebar Right (<em>default</em>)
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="blog-magazine-sidebar-left.html"
//                       >
//                         Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="blog-magazine-no-sidebar.html">
//                         Blog No Sidebar
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-magazine-sidebar-right.html"
//                       >
//                         Dark Blog Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-magazine-sidebar-left.html"
//                       >
//                         Dark Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-magazine-no-sidebar.html"
//                       >
//                         Dark Blog No Sidebar
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="nav-item menu-item-has-children">
//                   <a class="nav-link" href="#">
//                     Casual Style Blog
//                   </a>
//                   <ul class="pa-sub-submenu-ul">
//                     <li>
//                       <a class="nav-link" href="blog-casual-sidebar-right.html">
//                         Blog Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="blog-casual-sidebar-left.html">
//                         Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="blog-casual-no-sidebar.html">
//                         Blog No Sidebar
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-casual-sidebar-right.html"
//                       >
//                         Dark Blog Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-casual-sidebar-left.html"
//                       >
//                         Dark Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-casual-no-sidebar.html"
//                       >
//                         Dark Blog No Sidebar
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="nav-item menu-item-has-children">
//                   <a class="nav-link" href="#">
//                     Classic Blog
//                   </a>
//                   <ul class="pa-sub-submenu-ul">
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="blog-classic-sidebar-right.html"
//                       >
//                         Blog Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="blog-classic-sidebar-left.html">
//                         Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="blog-classic-no-sidebar.html">
//                         Blog No Sidebar (<em>Big</em>)
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-classic-sidebar-right.html"
//                       >
//                         Dark Blog Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-classic-sidebar-left.html"
//                       >
//                         Dark Blog Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         class="nav-link"
//                         href="dark-blog-classic-no-sidebar.html"
//                       >
//                         Dark Blog No Sidebar (<em>Big</em>)
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li class="nav-item menu-item-has-children">
//                   <a class="nav-link" href="#">
//                     Post / Single
//                   </a>
//                   <ul class="pa-sub-submenu-ul">
//                     <li>
//                       <a class="nav-link" href="single-sidebar-right.html">
//                         Post Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="single-sidebar-left.html">
//                         Post Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="single-no-sidebar.html">
//                         Post No Sidebar
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="dark-single-sidebar-right.html">
//                         Dark Post Sidebar Right
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="dark-single-sidebar-left.html">
//                         Dark Post Sidebar Left
//                       </a>
//                     </li>
//                     <li>
//                       <a class="nav-link" href="dark-single-no-sidebar.html">
//                         Dark Post No Sidebar
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>

//             <li class="nav-item">
//               <a class="nav-link hvr-underline-from-center" href="#contact-us">
//                 Contact Us
//               </a>
//             </li>

//             <li data-nav-custom-content class="custom-content pa-menu-socials">
//               <div class="pa-social-section">
//                 <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
//                   <strong>Connect</strong> with us
//                 </h1>
//                 <a
//                   class="pa-social-icons"
//                   href="https://www.facebook.com/SkilltechWebDesign"
//                   target="_blank"
//                 >
//                   <span class="fadeInDelay03Duration10">
//                     <i class="fa fa-facebook"></i>
//                   </span>
//                 </a>
//                 <a
//                   class="pa-social-icons"
//                   href="https://www.facebook.com/SkilltechWebDesign"
//                   target="_blank"
//                 >
//                   <span class="fadeInDelay03Duration10">
//                     <i class="fa fa-behance"></i>
//                   </span>
//                 </a>
//                 <a
//                   class="pa-social-icons"
//                   href="https://www.facebook.com/SkilltechWebDesign"
//                   target="_blank"
//                 >
//                   <span class="fadeInDelay03Duration10">
//                     <i class="fa fa-dribbble"></i>
//                   </span>
//                 </a>
//                 <a
//                   class="pa-social-icons"
//                   href="https://www.facebook.com/SkilltechWebDesign"
//                   target="_blank"
//                 >
//                   <span class="fadeInDelay03Duration10">
//                     <i class="fa fa-instagram"></i>
//                   </span>
//                 </a>
//                 <p class="pa-p-v1 pa-white pa-contact-lastline fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </nav>

//         <section
//           id="top"
//           class="pa-hero pa-centered-section pa-full-height pa-image-back pushable-content"
//         >
//           <div
//             class="pa-absolute-fill pa-gradient-back-v1"
//           ></div>
//           <div id="particles-js"></div>

//           <div class="container pa-hero-content text-center">
//             <div class="row pa-hero-typed-text">
//               <div class="col-12">
//                 <div class="typed-text mega-typed">
//                   <span class="animated-text-effect">
//                     <span class="typed-cursor">|</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-12">
//                 <h2 class="pa-h2-v2-hero-subhead pa-white">
//                   The Coolest Modern HTML Template is Here! Welcome to
//                   <strong>Particle</strong> by Skilltech Web Design
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           class="pa-cta-v1"
//           data-parallax="scroll"
//           data-speed="0.2"
//           data-image-src="assets/images/image-section.jpg"
//         >
//           <div class="container">
//             <h1 class="pa-h1-v1 pa-bright fadeInLeftDelay03Duration10">
//               <strong>Coolest HTML Theme Yet?</strong>
//             </h1>
//             <h4 class="pa-h4-v1 pa-bright fadeInLeftDelay03Duration10">
//               Open Particle today, why not!
//             </h4>
//             <div class="mt-4"></div>
//             <a
//               class="pa-button-primary pa-hvr-sweep-to-right fadeInRightDelay11Duration10"
//               href="https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech"
//               target="_blank"
//             >
//               Get it Now
//             </a>
//           </div>
//         </section>

//         <section id="portfolio" class="pa-portfolio">
//           <div class="container-fluid text-center p-0">
//             <div class="row m-0">
//               <div class="col-12 p-0">
//                 <div class="pa-stripe-heading">
//                   <h1 class="pa-h1-v1 pa-bright fadeInLeftDelay03Duration10">
//                     <strong>See our work</strong>
//                   </h1>
//                 </div>
//                 <div class="pa-stripe-subheading">
//                   <p class="pa-p-v2 pa-bright fadeInLeftDelay03Duration10">
//                     The new Style for 2021 is here. Like it?
//                     <a
//                       href="https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech"
//                       target="_blank"
//                     >
//                       BUY THEME NOW!
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="container-fluid">
//             <div class="row pa-row-max2560">
//               <div class="col-12 col-sm-6 col-lg-3 p-0">
//                 <div
//                   class="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10"
//                 >
//                   <div class="pa-portfolio-thumb-background-overlay"></div>
//                   <div class="pa-portfolio-thumb-deco-1"></div>
//                   <div class="pa-portfolio-thumb-deco-2"></div>
//                   <div class="pa-portfolio-thumb-centered-content w-100">
//                     <a
//                       href="portfolio-item.html"
//                       class="pa-portfolio-thumb-icon-link"
//                     >
//                       <span class="pa-portfolio-thumb-hover-icon">
//                         <i class="fa fa-eye"></i>
//                       </span>
//                     </a>
//                     <a href="portfolio-item.html">
//                       <h4 class="pa-portfolio-thumb-heading">
//                         Amazing Hover Effect
//                       </h4>
//                     </a>
//                     <p class="pa-portfolio-thumb-desc">
//                       Pure CSS Instant Hover
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-12 col-sm-6 col-lg-3 p-0">
//                 <div
//                   class="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10"
//                 >
//                   <div class="pa-portfolio-thumb-background-overlay"></div>
//                   <div class="pa-portfolio-thumb-deco-1"></div>
//                   <div class="pa-portfolio-thumb-deco-2"></div>
//                   <div class="pa-portfolio-thumb-centered-content w-100">
//                     <a
//                       href="portfolio-item.html"
//                       class="pa-portfolio-thumb-icon-link"
//                     >
//                       <span class="pa-portfolio-thumb-hover-icon">
//                         <i class="fa fa-eye"></i>
//                       </span>
//                     </a>
//                     <a href="portfolio-item.html">
//                       <h4 class="pa-portfolio-thumb-heading">
//                         Superb Image Styles
//                       </h4>
//                     </a>
//                     <p class="pa-portfolio-thumb-desc">
//                       Pure CSS Instant Hover
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-12 col-sm-6 col-lg-3 p-0">
//                 <div
//                   class="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10"
//                 >
//                   <div class="pa-portfolio-thumb-background-overlay"></div>
//                   <div class="pa-portfolio-thumb-deco-1"></div>
//                   <div class="pa-portfolio-thumb-deco-2"></div>
//                   <div class="pa-portfolio-thumb-centered-content w-100">
//                     <a
//                       href="portfolio-item.html"
//                       class="pa-portfolio-thumb-icon-link"
//                     >
//                       <span class="pa-portfolio-thumb-hover-icon">
//                         <i class="fa fa-eye"></i>
//                       </span>
//                     </a>
//                     <a href="portfolio-item.html">
//                       <h4 class="pa-portfolio-thumb-heading">
//                         Particle Design Theme
//                       </h4>
//                     </a>
//                     <p class="pa-portfolio-thumb-desc">
//                       Pure CSS Instant Hover
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-12 col-sm-6 col-lg-3 p-0">
//                 <div
//                   class="pa-portfolio-thumb m-0 text-center fadeInDelay00Duration10"
//                 >
//                   <div class="pa-portfolio-thumb-background-overlay"></div>
//                   <div class="pa-portfolio-thumb-deco-1"></div>
//                   <div class="pa-portfolio-thumb-deco-2"></div>
//                   <div class="pa-portfolio-thumb-centered-content w-100">
//                     <a
//                       href="portfolio-item.html"
//                       class="pa-portfolio-thumb-icon-link"
//                     >
//                       <span class="pa-portfolio-thumb-hover-icon">
//                         <i class="fa fa-eye"></i>
//                       </span>
//                     </a>
//                     <a href="portfolio-item.html">
//                       <h4 class="pa-portfolio-thumb-heading">
//                         Thumb Hover Superb
//                       </h4>
//                     </a>
//                     <p class="pa-portfolio-thumb-desc">
//                       Pure CSS Instant Hover
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           id="about-us"
//           class="pa-about-us pa-standard-section text-center pa-dark"
//         >
//           <div class="container">
//             <div class="row">
//               <div class="col-12 col-xl-10 offset-xl-1">
//                 <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
//                   <strong>About</strong> Particle Company
//                 </h1>
//                 <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer nec odio. Praesent libero. Sed cursus ante dapibus
//                   diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
//                   Duis sagittis ipsum. Praesent mauris.
//                 </p>
//               </div>
//             </div>
//             <div class="row">
//               <ul class="pa-icon-list-horizontal-dark">
//                 <li>
//                   <span class="pa-icon-list-icon fadeInDelay03Duration10">
//                     <i class="material-icons">beenhere</i>
//                   </span>
//                   <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay03Duration10">
//                     Super fast & reliable
//                   </p>
//                 </li>
//                 <li>
//                   <span class="pa-icon-list-icon fadeInDelay06Duration10">
//                     <i class="material-icons">comment</i>
//                   </span>
//                   <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay06Duration10">
//                     24 Hour Support
//                   </p>
//                 </li>
//                 <li>
//                   <span class="pa-icon-list-icon fadeInDelay10Duration10">
//                     <i class="material-icons">insert_chart</i>
//                   </span>
//                   <p class="pa-icon-list-text pa-p-v1 pa-bright fadeInDelay10Duration10">
//                     We Get the Results
//                   </p>
//                 </li>
//               </ul>
//             </div>

//             <div class="row">
//               <div class="col-12 pa-about-us-bottom-images">
//                 <img
//                   alt=""
//                   class="pa-about-img-left fadeInRight--Custom"
//                   src="assets/images/ipads-left.png"
//                 />
//                 <img
//                   alt=""
//                   class="pa-about-img-center slideup"
//                   src="assets/images/ipads-center.png"
//                 />
//                 <img
//                   alt=""
//                   class="pa-about-img-right fadeInLeft--Custom"
//                   src="assets/images/ipads-right.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section class="pa-stripe-tagline">
//           <div class="container-fluid text-center p-0">
//             <div class="row m-0">
//               <div class="col-12 p-0">
//                 <div class="pa-stripe-heading py-2 py-sm-4">
//                   <h5 class="pa-h5-v1 pa-bright pt-4 pb-1 mb-4 fadeInDelay03Duration10">
//                     We are here to <strong>make things Better</strong>
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           class="pa-quote"
//           data-parallax="scroll"
//           data-speed="0.2"
//           data-image-src="assets/images/quote-background.jpg"
//         >
//           <div class="container text-center">
//             <div class="row">
//               <div class="col-12 col-xl-10 offset-xl-1">
//                 <h2 class="pa-h2-quote pa-bright fadeInDelay03Duration10">
//                   <q>
//                     Patience, persistence and perspiration make an unbeatable
//                     combination for <strong>success</strong>.
//                   </q>
//                 </h2>
//                 <p class="pa-quote-author pa-bright fadeInDelay03Duration10">
//                   Napoleon Hill
//                   <span class="pa-author-role">&nbsp;- Author</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           id="services"
//           class="pa-what-we-do pa-standard-section text-center"
//         >
//           <div class="container">
//             <div class="row">
//               <div class="col-12 col-xl-10 offset-xl-1">
//                 <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
//                   What We do, We do <strong>Best!</strong>
//                 </h1>
//                 <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer nec odio. Praesent libero. Sed cursus ante dapibus
//                   diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
//                   Duis sagittis ipsum. Praesent mauris.
//                 </p>
//               </div>
//             </div>
//             <div class="row pa-services text-center">
//               <div class="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-0 offset-lg-0 col-lg-4 order-2 order-md-1 text-center">
//                 <ul class="pa-services-ul pa-right text-md-right text-left">
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay03Duration10">
//                         <i class="material-icons">create</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay03Duration10">
//                         Graphic Design
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay06Duration10">
//                         <i class="material-icons">screen_share</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay06Duration10">
//                         Web Design
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay06Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay10Duration10">
//                         <i class="material-icons">phonelink</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay10Duration10">
//                         Social Media
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay10Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div class="col-12 col-md-4 order-1 order-md-2">
//                 <img
//                   alt=""
//                   class="pa-services-image"
//                   src="assets/images/iphone-services.png"
//                 />
//               </div>
//               <div class="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-0 offset-lg-0 col-lg-4 order-3 order-md-3 text-center">
//                 <ul class="pa-services-ul pa-left text-left">
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay03Duration10">
//                         <i class="material-icons">linked_camera</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay03Duration10">
//                         Photography
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay06Duration10">
//                         <i class="material-icons">mic</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay06Duration10">
//                         Marketing
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay06Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="service-item.html">
//                       <span class="pa-serv-list-icon fadeInDelay10Duration10">
//                         <i class="material-icons">play_circle_filled</i>
//                       </span>
//                       <h3 class="pa-h3-v1 pa-bright fadeInDelay10Duration10">
//                         Video Production
//                       </h3>
//                       <p class="pa-p-v1 pa-bright fadeInDelay10Duration10">
//                         Lorem ipsum dolor sit amet, consecte adipiscing elit.
//                         Integer nec odio.
//                       </p>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           class="pa-cta-v2 pa-centered-section pa-image-back"
//         >
//           <div class="pa-absolute-fill pa-gradient-back-v1"></div>

//           <div class="container">
//             <div class="row">
//               <div class="col-12 col-xl-10 offset-xl-1 text-center">
//                 <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
//                   Like what You see? <strong>Get Particle</strong> Now!
//                 </h1>
//                 <p class="pa-p-v1 pa-white fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer nec odio. Praesent libero. Sed cursus ante dapibus
//                   diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
//                   Duis sagittis ipsum. Praesent mauris.
//                 </p>
//                 <a
//                   class="pa-button-secondary pa-hvr-sweep-to-right fadeInRightDelay11Duration10"
//                   href="https://themeforest.net/item/particle-modern-tech-startup-html-template/20078383?ref=Skilltech"
//                   target="_blank"
//                 >
//                   Get it Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="skills" class="pa-skills">
//           <div class="container">
//             <div class="row">
//               <div class="col-12 col-xl-10 offset-xl-1 text-center">
//                 <h5 class="pa-h1-v3 pa-bright pt-4 pb-1 mb-4 fadeInDelay03Duration10">
//                   Let <strong>Our Skills</strong> speak for Us
//                 </h5>
//                 <p class="pa-p-v1 pa-bright fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer nec odio. Praesent libero. Sed cursus ante dapibus
//                   diam.
//                 </p>
//               </div>
//             </div>

//             <div class="row pa-skills-row">
//               <div class="col-12">
//                 <div class="pa-skill-warp">
//                   <p class="pa-skill-name pa-skill-el">Adobe Creative Cloud</p>
//                   <div class="pa-skill-area pa-skill-el">
//                     <div
//                       class="pa-skill-bar progressBar"
//                     ></div>
//                   </div>
//                   <p class="pa-skill-number pa-skill-el">
//                     <span class="pa-counterskills">75</span>
//                     <span class="fadeInDelay10Duration10">%</span>
//                   </p>
//                 </div>
//                 <div class="pa-skill-warp">
//                   <p class="pa-skill-name pa-skill-el">Wordpress</p>
//                   <div class="pa-skill-area pa-skill-el">
//                     <div
//                       class="pa-skill-bar progressBar"
//                     ></div>
//                   </div>
//                   <p class="pa-skill-number pa-skill-el">
//                     <span class="pa-counterskills">80</span>
//                     <span class="fadeInDelay10Duration10">%</span>
//                   </p>
//                 </div>
//                 <div class="pa-skill-warp">
//                   <p class="pa-skill-name pa-skill-el">Drupal</p>
//                   <div class="pa-skill-area pa-skill-el">
//                     <div
//                       class="pa-skill-bar progressBar"
//                     ></div>
//                   </div>
//                   <p class="pa-skill-number pa-skill-el">
//                     <span class="pa-counterskills">50</span>
//                     <span class="fadeInDelay10Duration10">%</span>
//                   </p>
//                 </div>
//                 <div class="pa-skill-warp">
//                   <p class="pa-skill-name pa-skill-el">Graphic Design</p>
//                   <div class="pa-skill-area pa-skill-el">
//                     <div
//                       class="pa-skill-bar progressBar"
//                     ></div>
//                   </div>
//                   <p class="pa-skill-number pa-skill-el">
//                     <span class="pa-counterskills">70</span>
//                     <span class="fadeInDelay10Duration10">%</span>
//                   </p>
//                 </div>
//                 <div class="pa-skill-warp">
//                   <p class="pa-skill-name pa-skill-el">
//                     HTML / CSS / JAVASCRIPT
//                   </p>
//                   <div class="pa-skill-area pa-skill-el">
//                     <div
//                       class="pa-skill-bar progressBar"
//                     ></div>
//                   </div>
//                   <p class="pa-skill-number pa-skill-el">
//                     <span class="pa-counterskills">60</span>
//                     <span class="fadeInDelay10Duration10">%</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section
//           id="contact-us"
//           class="pa-contact-us"
//           data-parallax="scroll"
//           data-speed="0"
//           data-image-src="assets/images/contact-hero.jpg"
//         >
//           <div class="container">
//             <div class="row text-center">
//               <div class="col-12 col-xl-10 offset-xl-1">
//                 <h1 class="pa-h1-v2 pa-bright fadeInDelay00Duration10">
//                   Let's <strong>Connect</strong>
//                 </h1>
//                 <p class="pa-p-v1 pa-white fadeInDelay03Duration10">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer nec odio. Praesent libero. Sed cursus ante dapibus
//                   diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
//                   Duis sagittis ipsum. Praesent mauris.
//                 </p>
//                 <div class="pt-0 pt-sm-3 pt-md-3 pt-lg-4 pt-xl-5"></div>
//               </div>
//             </div>
//             <div class="row">
//               <div class="col-12 col-md-6 col-xl-5 offset-xl-1 pa-contact-info d-flex">
//                 <div class="pa-glass pa-left">
//                   <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
//                     Our office <strong>info</strong>
//                   </h1>
//                   <p class="pa-p-v1 pa-white fadeInDelay03Duration10">
//                     <span>
//                       <i class="material-icons">mail_outline</i>
//                     </span>
//                     particle@yoursite.com
//                   </p>
//                   <p class="pa-p-v1 pa-white fadeInDelay06Duration10">
//                     <span>
//                       <i class="material-icons">call</i>
//                     </span>
//                     +381 (0) 21 555 4597
//                   </p>
//                   <p class="pa-p-v1 pa-white fadeInDelay10Duration10">
//                     <span>
//                       <i class="material-icons">business</i>
//                     </span>
//                     555 Downing st. Suite 1000
//                   </p>
//                   <p class="pa-p-v1 pa-white fadeInDelay10Duration10">
//                     <span>
//                       <i class="material-icons">location_on</i>
//                     </span>
//                     New York, NY 10010
//                   </p>
//                   <div class="pa-social-section">
//                     <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
//                       <strong>Connect</strong> with us
//                     </h1>
//                     <a
//                       class="pa-social-icons"
//                       href="https://www.facebook.com/SkilltechWebDesign"
//                       target="_blank"
//                     >
//                       <span class="fadeInDelay03Duration10">
//                         <i class="fa fa-facebook"></i>
//                       </span>
//                     </a>
//                     <a
//                       class="pa-social-icons"
//                       href="https://www.facebook.com/SkilltechWebDesign"
//                       target="_blank"
//                     >
//                       <span class="fadeInDelay03Duration10">
//                         <i class="fa fa-behance"></i>
//                       </span>
//                     </a>
//                     <a
//                       class="pa-social-icons"
//                       href="https://www.facebook.com/SkilltechWebDesign"
//                       target="_blank"
//                     >
//                       <span class="fadeInDelay03Duration10">
//                         <i class="fa fa-dribbble"></i>
//                       </span>
//                     </a>
//                     <a
//                       class="pa-social-icons"
//                       href="https://www.facebook.com/SkilltechWebDesign"
//                       target="_blank"
//                     >
//                       <span class="fadeInDelay03Duration10">
//                         <i class="fa fa-instagram"></i>
//                       </span>
//                     </a>
//                     <p class="pa-p-v1 pa-white pa-contact-lastline fadeInDelay03Duration10">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-12 col-md-6 col-xl-5 pa-contact-form d-flex justify-content-end">
//                 <div class="pa-glass pa-right">
//                   <h1 class="pa-h1-v3 pa-bright fadeInDelay03Duration10">
//                     Send us a <strong>Message</strong>
//                   </h1>

//                   <form>
//                     <div class="form-group">
//                       <label for="the_name">Name</label>
//                       <input type="text" name="the_name" tabindex="1" />
//                     </div>
//                     <div class="form-group">
//                       <label for="the_email">Email</label>
//                       <input type="email" name="the_email" tabindex="2" />
//                     </div>
//                     <div class="form-group">
//                       <label for="the_message">Message</label>
//                       <textarea name="the_message" tabindex="3"></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       class="pa-hvr-sweep-to-right"
//                       tabindex="4"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <footer>
//           <div class="container">
//             <div class="row">
//               <div class="col-12 text-center my-2 pt-5 pb-4">
//                 <p>
//                   Copyright © 2021 -
//                   <a href="http://www.skilltechwebdesign.com/" target="_blank">
//                     SkilltechWebDesign.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div class="pa-back-to-top-wrap">
//             <a class="pa-back-to-top" href="#top">
//               <span class="pa-back-to-top"></span>
//             </a>
//           </div>
//         </footer>
