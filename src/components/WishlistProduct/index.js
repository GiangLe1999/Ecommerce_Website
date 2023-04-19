import classNames from "classnames/bind";

import styles from "./WishlistProduct.module.scss";

const cx = classNames.bind(styles);

function WishlistProduct() {
  return (
    <div
      className={`${cx(
        "wrapper"
      )} position-relative col-3 rounded-3 shadow bg-white`}
    >
      <img
        src="images/cross.svg"
        className={`${cx("closeIcon")} img-fluid position-absolute`}
        alt="Close icon"
      />
      <div className={cx("productImage")}>
        <img src="images/tab.jpg" className="img-fluid w-100" alt="Product" />
      </div>
      <div className={cx("productDetails")}>
        <h5 className={cx("title")}>
          Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet (Silver)
        </h5>
        <p className={cx("price")}>
          <span className={cx("red-p")}>$100.00</span> &nbsp;
          <span className="text-decoration-line-through">$200.00</span>
        </p>
      </div>
    </div>
  );
}
export default WishlistProduct;
