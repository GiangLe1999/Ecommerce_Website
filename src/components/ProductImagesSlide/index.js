import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original: "images/tab.jpg",
  },
  {
    original: "images/tab1.jpg",
    thumbnail: "images/tab1.jpg",
  },
  {
    original: "images/tab2.jpg ",
    thumbnail: "images/tab2.jpg",
  },
];

function ProductImagesSlider() {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={true}
      showNav={false}
    />
  );
}

export default ProductImagesSlider;
