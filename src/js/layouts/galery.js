const galeryModule = () => {
  const btn = document.querySelector(".gallery-btn");
  const gallery = document.querySelector(".gallery-ctn");
  const popUp = document.querySelector(".pop-up");
  const popUpImg = document.querySelector(".pop-up_img");
  const images = document.querySelectorAll(".gallery-item img");
  const closeBtn = document.querySelectorAll(".mark");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let objectBg;
  let imgIndex;
  let IsPopUpActive = false;

  const showAllImg = () => {
    gallery.classList.toggle("gallery-active");
  };
  btn.addEventListener("click", showAllImg);

  const handlePopUp = (e, index) => {
    objectBg = e.target.getAttribute("src");
    popUp.classList.add("show-pop-up");
    popUpImg.style.backgroundImage = `url(${objectBg})`;
    popUp.classList.remove("close-animation");
    imgIndex = index;
    IsPopUpActive = true;
    console.log(index);
  };
  images.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      handlePopUp(e, index);
    });
  });

  const handleClosePopUp = () => {
    IsPopUpActive = false;
    popUp.classList.add("close-animation");
    setTimeout(() => {
      popUp.classList.remove("show-pop-up");
      popUpImg.classList.remove(`${objectBg}`);
    }, 300);
  };

  const handleImageChange = (index) => {
    popUpImg.style.backgroundImage = `url("./src/assets/img/projects/project${index}.png")`;
  };

  const handleNextImg = () => {
    if (imgIndex < images.length - 1) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
    handleImageChange(imgIndex);
  };
  const handlePrevImg = () => {
    if (imgIndex > 1) {
      imgIndex--;
    } else {
      imgIndex = images.length - 1;
    }
    handleImageChange(imgIndex);
  };

  const handleClickOutside = (e) => {
    if (IsPopUpActive) {
      if (e.target.classList.contains("pop-up")) {
        handleClosePopUp();
      }
    }
  };

  nextBtn.addEventListener("click", handleNextImg);
  prevBtn.addEventListener("click", handlePrevImg);

  closeBtn.forEach((btn) => btn.addEventListener("click", handleClosePopUp));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && IsPopUpActive) {
      handleClosePopUp();
    }
  });
  window.addEventListener("click", handleClickOutside);
};

export default galeryModule