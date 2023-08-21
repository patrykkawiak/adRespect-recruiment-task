import Masonry from "masonry-layout";

const masonryModule = () => {
  const gallery = document.querySelector(".gallery");
  const masonry = new Masonry(gallery, {
    itemSelector: ".gallery-item",
    originCenter: true,
    horizontalOrder: true,
    containerStyle: null,
    gutter: 43,
  });
};

export default masonryModule;