import AOS from "aos";
import "aos/dist/aos.css";
import masonryModule from "./layouts/masonry";
import navModule from "./layouts/nav";
import yearModule from "./layouts/year";
import cookieModalModule from "./layouts/cookie";
import loadingScreenModule from "./layouts/loading";
import parallaxModule from "./layouts/parallax";
import sliderModule from "./layouts/slider";
import galeryModule from "./layouts/galery";

const loadedModules = () => {
  AOS.init();
  navModule();
  yearModule();
  cookieModalModule();
  loadingScreenModule();
  parallaxModule();
  sliderModule();
  setTimeout(() => {
    galeryModule();
    masonryModule();
  }, 400);
};

window.addEventListener("DOMContentLoaded", loadedModules);
