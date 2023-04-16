import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import Button from "../Button";
import ProductImagesSlider from "../ProductImagesSlide";

import styles from "./SpecialProduct.module.scss";

function SpecialProduct() {
  return (
    <div className="col-6">
      <div
        className={`${styles["special-product-card"]} shadow bg-white rounded-3`}
      >
        <div className="d-flex justify-content-between">
          <div
            className={`${styles["avatar-card"]} position-relative bg-white rounded-3`}
          >
            <div
              className={`${styles["avatar-badge"]} badge position-absolute`}
            >
              -50%
            </div>
            <div className={`${styles["wishlist-icon"]} position-absolute`}>
              <Link to="">
                <img src="images/wish.svg" alt="Wishlist" />
              </Link>
            </div>
            <ProductImagesSlider />
          </div>
          <div
            className={`${styles["special-product-content"]} bg-white rounded-3`}
          >
            <h5 className={`${styles["brand"]}`}>Huawei</h5>
            <h6 className={`${styles["title"]}`}>
              HONOR ViewPad V6 with 10.4-inch WUXGA+ display, Kirin 985, 5G,
              7250mAh battery announced
            </h6>
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
            <p className={`${styles["price"]}`}>
              <span className={`${styles["red-p"]}`}>$100.00</span> &nbsp;
              <span className="text-decoration-line-through">$200.00</span>
            </p>
            <div
              className={`${styles["days-left"]} d-flex align-items-center gap-2`}
            >
              <p>
                <b>51 </b> &nbsp; Days
              </p>
              <div className="d-flex gap-2 align-items-center">
                <span
                  className={`${styles["time-badge"]} ms-2 badge rounded-circle bg-danger`}
                >
                  05
                </span>
                :{" "}
                <span
                  className={`${styles["time-badge"]} badge rounded-circle bg-danger`}
                >
                  21
                </span>
                :{" "}
                <span
                  className={`${styles["time-badge"]} badge rounded-circle bg-danger`}
                >
                  10
                </span>
              </div>
            </div>
            <div className={styles["quantity-left"]}>
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Button to="/">OPTION</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
