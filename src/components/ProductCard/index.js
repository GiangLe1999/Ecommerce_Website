import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import styles from "./ProductCard.module.scss";

function ProductCard(props) {
  const location = useLocation();
  let columnWidth = 2;
  if (location.pathname === "/store") {
    switch (props.gridColumns) {
      case 4:
        columnWidth = 3;
        break;
      case 3:
        columnWidth = 4;
        break;
      case 2:
        columnWidth = 6;
        break;
      case 1:
        columnWidth = 12;
        break;
      default:
        columnWidth = 3;
    }
  }

  const isAtProductPage = location.pathname === "/store/:productId";

  if (isAtProductPage) {
    columnWidth = 2;
  }

  return (
    <div
      className={`col-${columnWidth} ${
        isAtProductPage
          ? styles[`storeGrid${columnWidth}`]
          : styles[`grid${columnWidth}`]
      }`}
    >
      {/* Normal Product */}
      {props.normalProduct && (
        <Link
          to="/store/:productId"
          className={`${styles["product-card"]} bg-white shadow rounded-3 position-relative`}
        >
          <div className={`${styles["wishlist-icon"]} position-absolute`}>
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="Wishlist" />
            </button>
          </div>
          <div className={`${styles["product-image"]} position-relative`}>
            <img
              className={`${styles["bottom-img"]} img-fluid`}
              src="/images/featured-watch.jpg"
              alt="Product"
            />
            <img
              className={`${styles["top-img"]} img-fluid`}
              src="/images/featured-watch-2.webp"
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
            {columnWidth === 12 && (
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, ridens audiam cu ius, ius eros nihil
                oratio ei, vix ea sonet iisque dissentiunt. Sed at probo
                invidunt, ad graece cetero vel, ius cu clita praesent
                deterruisset. Putent everti legimus vix te, consul ubique
                vituperatoribus ne per. Cu sed mediocrem qualisque similique,
                posse graeci sensibus quo ut. Habeo ceteros petentium mea id.
              </p>
            )}
            <p className={`${styles["price"]}`}>$100.00</p>
            <div className={`${styles["action-bar"]} position-absolute`}>
              <div className="d-flex flex-column gap-2">
                <button className="bg-transparent border-0" to="">
                  <img src="/images/add-cart.svg" alt="Add to Cart" />
                </button>
                <button className="bg-transparent border-0" to="">
                  <img src="/images/prodcompare.svg" alt="Compare Product" />
                </button>
                <button className="bg-transparent border-0" to="">
                  <img src="/images/view.svg" alt="View Product" />
                </button>
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
