const cookieModalModule = () => {
  const modal = document.querySelector(".cookie-modal");
  const cookies = document.cookie.split(";");
  const isVisited = cookies.find((cookie) =>
    cookie.trim().startsWith("isVisited")
  );
  const cookieBtn = document.querySelector(".cookie-btn");

  const checkIsCookieExist = () => {
    if (isVisited) {
      modal.classList.add("cookie-close");
    } else {
      cookieBtn.addEventListener("click", closeCookieModal);
    }
  };

  const closeCookieModal = () => {
    modal.classList.add("cookie-close");
    const day = 24 * 60 * 60 * 1000;
    const date = new Date();
    date.setTime(date.getTime() + day);
    document.cookie = `isVisited; expires = ${date}`;
  };

    checkIsCookieExist();
  
};

export default cookieModalModule;