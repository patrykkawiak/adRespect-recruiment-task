const parallaxModule = () => {
  const parallaxItem = document.querySelector(".parallax");
  const handlePrallax = () => {
    if (window.innerWidth < 768) return;
    let scrollValue = window.scrollY;
    const observer = scrollValue - parallaxItem.offsetTop + window.innerHeight;
    const rate = observer / 6;
    if (scrollValue > parallaxItem.offsetTop) {
      return;
    } else {
      parallaxItem.style.transform = `translateY(calc(30% - ${rate}px))`;
    }
  };

  window.onscroll = () => {
    handlePrallax();
  };
};

export default parallaxModule;
