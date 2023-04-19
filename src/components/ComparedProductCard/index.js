import classNames from "classnames/bind";

import styles from "./ComparedProductCard.module.scss";

const cx = classNames.bind(styles);

function ComparedProductCard() {
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
        <ul>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>Brand:</h5>
            <p>Havels</p>
          </li>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>Type:</h5>
            <p>Tablet Computers</p>
          </li>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>SKU:</h5>
            <p>SKU033</p>
          </li>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>Availability:</h5>
            <p>In stock</p>
          </li>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>Colors:</h5>
            <p>
              <span style={{ backgroundColor: "#b81e1e" }}></span>
              <span style={{ backgroundColor: "#006dd7" }}></span>
              <span style={{ backgroundColor: "#717166" }}></span>
            </p>
          </li>
          <li className={`${cx("mainInfo")} d-flex justify-content-between`}>
            <h5>Size:</h5>
            <p>S &nbsp; M &nbsp; L</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComparedProductCard;
