import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";

function ProductCard(props) {
  return (
    <div className="col-2">
      {/* Normal Product */}
      {props.normalProduct && (
        <Link
          to="/"
          className={`${styles["product-card"]} bg-white shadow rounded-3 position-relative`}
        >
          <div className={`${styles["wishlist-icon"]} position-absolute`}>
            <Link to="">
              <img src="images/wish.svg" alt="Wishlist" />
            </Link>
          </div>
          <div className={`${styles["product-image"]} position-relative`}>
            <img
              className={`${styles["bottom-img"]} img-fluid`}
              src="images/featured-watch.jpg"
              alt="Product"
            />
            <img
              className={`${styles["top-img"]} img-fluid`}
              src="images/featured-watch-2.webp"
              alt="Product"
            />
          </div>
          <div className={`${styles["product-info"]}`}>
            <h6 className={`${styles["brand"]} mb-3`}>Havels</h6>
            <h5 className={`${styles["title"]}`}>
              Kids headphones bulk 10 packs multi colored for students
            </h5>
            <ReactStars
              value="4"
              edit={false}
              count={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className={`${styles["price"]}`}>$100.00</p>
            <div className={`${styles["action-bar"]} position-absolute`}>
              <div className="d-flex flex-column gap-2">
                <Link to="">
                  <img src="images/add-cart.svg" alt="Add to Cart" />
                </Link>
                <Link to="">
                  <img src="images/prodcompare.svg" alt="Compare Product" />
                </Link>
                <Link to="">
                  <img src="images/view.svg" alt="View Product" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Static Banner */}
      {props.staticBanner && (
        <div
          className={`${styles["static-banner"]} position-relative text-white shadow rounded-3`}
        >
          <div>
            <h5>15% OFF</h5>
            <h4>Home Speakers</h4>
            <p>From $399 or $16.62/mo. for 24 mo.*</p>
          </div>
          <div className={`${styles["static-banner-image"]} position-absolute`}>
            <img
              className="img-fluid"
              src="images/home-pod.png"
              alt="Home Pod"
            />
          </div>
        </div>
      )}

      {/* Filter Product */}
      {props.filterProduct && (
        <div
          className={`${styles["filter-product"]} bg-white shadow rounded-3`}
        >
          <div
            className={`${styles["filter-product-wrapper"]} ${styles["active"]} d-flex align-items-center gap-2 mb-3`}
          >
            <div className={`${styles["filter-product-image"]}`}>
              <img
                className="img-fluid"
                src="images/watch.jpg"
                alt="Smartwatch"
              />
            </div>
            <div className="flex-grow-1 ">
              <span>Smart Watch</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className={`${styles["filter-product-image"]}`}>
              <img
                className="img-fluid"
                src="images/speaker.jpg"
                alt="Speaker"
              />
            </div>
            <div className="flex-grow-1 ">
              <span>Speaker</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className={`${styles["filter-product-image"]}`}>
              <img
                className="img-fluid"
                src="images/laptop.jpg"
                alt="Laptops"
              />
            </div>
            <div className="flex-grow-1 ">
              <span>Laptops</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
