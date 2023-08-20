import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

const handleNav = () => {
  burger.classList.toggle("active-burger");
  navList.classList.toggle("active-list");
};

burger.addEventListener("click", handleNav);

const btn = document.querySelector(".gallery-btn");
const gallery = document.querySelector(".gallery-ctn");

const showAllImg = () => {
  gallery.classList.toggle("gallery-active");
};

btn.addEventListener("click", showAllImg);

const popUp = document.querySelector(".pop-up");
const popUpImg = document.querySelector(".pop-up_img");
const images = document.querySelectorAll(".gallery-item img");
const closeBtn = document.querySelectorAll(".mark");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let objectBg;
let imgIndex;
let IsPopUpActive = false;
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

const wrapper = document.querySelector(".slider");
const sliderItem = document.querySelector(".slider-item");
const sliderItems = document.querySelectorAll(".slider-item");

const sliderNextBtn = document.querySelector(".slider-next");
const sliderPrevBtn = document.querySelector(".slider-prev");
const singleSlideWidth = sliderItem.offsetWidth;
const dots = document.querySelector('.dots')



let index = 0;
let slide = 0;

const prepareSliderItems = () => {
  wrapper.style.width = `${4 * 100}%`
  for(let i = 0; i < sliderItems.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dots.append(dot);
  }
  const allDots = document.querySelectorAll('.dot');
  allDots[0].classList.add('dot-active')
}
const handleChangeImg = () => {
  const singleSlideWidth = sliderItem.offsetWidth;
  wrapper.style.transform = `translateX(${-slide * singleSlideWidth}px)`;
};

const handleNextSlide = () => {
	if(index === sliderItems.length - 1) {
		return
	}
  const allDots = document.querySelectorAll('.dot');
  allDots[index].classList.remove('dot-active')
  allDots[index + 1].classList.add('dot-active')
	index++;
	slide++;
	handleChangeImg();
}

const handlePrevSlide = () => {
	if(index === 0) {
		return
	}
  const allDots = document.querySelectorAll('.dot');
  allDots[index].classList.remove('dot-active')
  allDots[index - 1].classList.add('dot-active')
	index--;
	slide--;
	handleChangeImg();
}
prepareSliderItems()

sliderNextBtn.addEventListener("click", handleNextSlide);
sliderPrevBtn.addEventListener("click", handlePrevSlide);


const aboutUs = document.querySelector('.parallax');
const handlePrallaxAboutUs = () => {
	if (window.innerWidth < 768) return;
  let scrollValue = window.scrollY;
  const observer = scrollValue - aboutUs.offsetTop + window.innerHeight;
  const rate = observer / 6;
  if (scrollValue > aboutUs.offsetTop) {
    return
  } else {
    aboutUs.style.transform = `translateY(calc(30% - ${rate}px))`;
  }
};


window.onscroll = () => {
  handlePrallaxAboutUs();
}


const loading = () => {
  const loadingModal = document.querySelector('.loading');
  setTimeout(()=> {
    console.log('siema');
loadingModal.classList.add('active-loading')
  },400);

}
window.onload = () => {
  loading();
}

const closeInfoModal = () => {
  const modal = document.querySelector('.info-modal');
  modal.classList.add('info-close');
}

const infoBtn = document.querySelector('.info-btn');
infoBtn.addEventListener('click', closeInfoModal)

const setCurrentDate = () => {
	const footerYear = document.querySelector('.year');
	const date = new Date();
	const year = date.getFullYear();
	footerYear.textContent = year;

};
setCurrentDate();