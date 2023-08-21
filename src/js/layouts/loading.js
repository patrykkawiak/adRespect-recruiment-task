const loadingScreenModule = () => {
    const loadingModal = document.querySelector(".loading");
    setTimeout(() => {
      loadingModal.classList.add("active-loading");
    }, 400);
};

  export default loadingScreenModule;