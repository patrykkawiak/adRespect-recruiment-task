const galeryModule = () => {
  const galleryBtn = document.querySelector(".gallery-btn");
  const galleryCtn = document.querySelector(".gallery-ctn");
  const gallery = document.querySelector(".gallery");
  const popUp = document.querySelector(".pop-up");
  const popUpImg = document.querySelector(".pop-up_img");
  const images = document.querySelectorAll(".gallery-item img");
  const closeBtn = document.querySelectorAll(".mark");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let objectBg;
  let imgIndex;
  let IsPopUpActive = false;


  
  const buttonContent = (content) => {
   galleryBtn.textContent = content;
  }

  const showAllImg = () => {
    galleryCtn.classList.toggle("gallery-active");
    if (galleryCtn.classList.contains('gallery-active')) {
      galleryCtn.style.maxHeight = gallery.scrollHeight + 'px';
      buttonContent('Zwiń');
    } else {
      galleryCtn.style.maxHeight = '150rem';
      buttonContent('Rozwiń');
    }
  };

  galleryBtn.addEventListener("click", showAllImg);

  const handlePopUp = (e, index) => {
    objectBg = e.target.getAttribute("src");
    popUp.classList.add("show-pop-up");
    popUpImg.style.backgroundImage = `url(${objectBg})`;
    popUp.classList.remove("close-animation");
    imgIndex = index;
    IsPopUpActive = true;
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
    if (import.meta.env.MODE == "development") {
      popUpImg.style.backgroundImage = `url("./src/assets/img/projects/project${index}.png")`;
    } else {
      popUpImg.style.backgroundImage = `url("./assets/project${index}.png")`;
    }
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

export default galeryModule;
