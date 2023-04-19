import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

function ProductImagesSlider(props) {
  return (
    <ImageGallery
      items={props.images}
      showPlayButton={props.showPlayButton}
      showFullscreenButton={props.showFullscreenButton}
      showBullets={true}
      showNav={props.showNav}
      showIndex={props.showIndex}
      autoPlay={props.autoPlay}
      slideInterval={3000}
      slideOnThumbnailOver={true}
    />
  );
}

export default ProductImagesSlider;
