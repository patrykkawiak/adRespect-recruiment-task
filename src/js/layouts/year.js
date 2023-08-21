const yearModule = () => {
  const footerYear = document.querySelector(".year");
  const date = new Date();
  const year = date.getFullYear();
  footerYear.textContent = year;
};

export default yearModule;