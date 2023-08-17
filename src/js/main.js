const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

const handleNav = () => {
	burger.classList.toggle('active-burger');
	navList.classList.toggle('active-list');
};

burger.addEventListener('click', handleNav);
