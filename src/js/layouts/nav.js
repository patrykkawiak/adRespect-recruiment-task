const navModule = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const search = document.querySelector(".search");
  const searchInput = document.querySelector(".search-input");
  const dropdown = document.querySelector(".dropdown");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const navArrow = document.querySelector(".nav-arrow");
  const navItems = document.querySelectorAll(".nav-item a");

  const handleNav = () => {
    burger.classList.toggle("active-burger");
    navList.classList.toggle("active-list");
  };

  const closeNavAfterClick = () => {
    navList.classList.remove("active-list");
    burger.classList.remove("active-burger");

  }

  const searchCleanUp = () => {
    if (search.classList.contains("search-active")) {
      searchInput.value = "";
    }
  };

  const handleSearch = () => {
    search.classList.toggle("search-active");
    searchCleanUp();
  };

  const handleDropDown = () => {
    dropdown.classList.toggle("dropdown-active");
  };

  const navDOMElements = () => {
    if (window.innerWidth > 768) {
      search.classList.remove("search-active");
      dropdownBtn.removeAttribute("href");
      navArrow.style.display = "flex";
      dropdownBtn.addEventListener("click", handleDropDown);
    } else {
      search.classList.add("search-active");
      dropdownBtn.setAttribute("href", "#offer");
      navArrow.style.display = "none";
      dropdownBtn.removeEventListener();
    }
  };

  document
    .querySelector(".search-icon")
    .addEventListener("click", handleSearch);

  burger.addEventListener("click", handleNav);

  navItems.forEach((item) => item.addEventListener("click", closeNavAfterClick));

  window.onload = () => {
    navDOMElements();
  };
  window.onresize = () => {
    navDOMElements();
  };
};

export default navModule;
