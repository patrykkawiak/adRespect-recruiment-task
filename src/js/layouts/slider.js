const sliderModule = () => {
  const slider = document.querySelector(".slider");
  const sliderItem = document.querySelector(".slider-item");
  const sliderItems = document.querySelectorAll(".slider-item");

  const sliderNextBtn = document.querySelector(".slider-next");
  const sliderPrevBtn = document.querySelector(".slider-prev");
  const dots = document.querySelector(".dots");

  let index = 0;
  

  const prepareSliderItems = () => {
    const sliderLength = sliderItems.length;
    slider.style.width = `${sliderLength * 100}%`;
    for (let i = 0; i < sliderItems.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.append(dot);
    }
    const allDots = document.querySelectorAll(".dot");
    allDots[0].classList.add("dot-active");
  };

  const handleChangeImg = () => {
    const singleSlideWidth = sliderItem.offsetWidth;
    slider.style.transform = `translateX(${-index * singleSlideWidth}px)`;
  };

  const handleNextSlide = () => {
    if (index === sliderItems.length - 1) {
      return;
    }
    const allDots = document.querySelectorAll(".dot");
    allDots[index].classList.remove("dot-active");
    allDots[index + 1].classList.add("dot-active");
    index++;
    handleChangeImg();
  };

  const handlePrevSlide = () => {
    if (index === 0) {
      return;
    }
    const allDots = document.querySelectorAll(".dot");
    allDots[index].classList.remove("dot-active");
    allDots[index - 1].classList.add("dot-active");
    index--;
    handleChangeImg();
  };
  prepareSliderItems();

  sliderNextBtn.addEventListener("click", handleNextSlide);
  sliderPrevBtn.addEventListener("click", handlePrevSlide);
};

export default sliderModule;