import classNames from "classnames/bind";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import ColorPicker from "../ColorPicker";
import styles from "./LeftNavFilter.module.scss";

const cx = classNames.bind(styles);

function LeftNavFilter(props) {
  return (
    <>
      {/* ------SHOP CATEGORIES SECTION------ */}
      {props.hasCategories && (
        <div className={`${cx("card")} bg-white rounded-3 mb-3 shadow`}>
          <h3 className={cx("title")}>{props.categoriesContent.title}</h3>
          <ul className={cx("categoryList")}>
            {props.categoriesContent.list.map((category) => (
              <Link to={category.to}>{category.name}</Link>
            ))}
          </ul>
        </div>
      )}
      {/* ------END SHOP CATEGORIES SECTION------ */}

      {/* -----FILTER PRODUCTS SECTION----- */}

      {/* Filter By Section */}
      {props.hasFilterBy && (
        <div className={`${cx("card")} bg-white rounded-3 mb-3 shadow`}>
          <h3 className={cx("title")}>Filter By</h3>
          {/* Filter by avalability */}
          <div className="pt-2">
            <h5 className={cx("subTitle")}>Availability</h5>
            <div class="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                In stock (1)
              </label>
            </div>
            <div className="form-check d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label className="form-check-label" htmlFor="defaultCheck2">
                Out of stock (0)
              </label>
            </div>
          </div>
          {/* End Filter by avalability */}

          {/* Filter by price */}
          <div className="pt-4">
            <h5 className={cx("subTitle")}>Price</h5>
            <div className="d-flex align-items-center gap-3">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputFrom"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputFrom">From $</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputTo"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputTo">To $</label>
              </div>
            </div>
          </div>
          {/* End Filter by price */}

          {/* Filter by color */}
          <div className="pt-4">
            <h5 className={cx("subTitle")}>Colors</h5>
            <div>
              <ColorPicker />
            </div>
          </div>
          {/* End Filter by color */}

          {/* Filter by size*/}
          <div className="py-4">
            <h5 className={cx("subTitle")}>Size</h5>
            <div>
              <div class="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheckS"
                />
                <label className="form-check-label" htmlFor="defaultCheckS">
                  S (2)
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheckM"
                  disabled
                />
                <label className="form-check-label" htmlFor="defaultCheckM">
                  M (0)
                </label>
              </div>
              <div class="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheckL"
                  disabled
                />
                <label className="form-check-label" htmlFor="defaultCheckL">
                  L (0)
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheckXL"
                  disabled
                />
                <label className="form-check-label" htmlFor="defaultCheckXL">
                  XL (0)
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheckXXL"
                  disabled
                />
                <label className="form-check-label" htmlFor="defaultCheckXXL">
                  XXL (0)
                </label>
              </div>
            </div>
          </div>
          {/* End Filter by size*/}
        </div>
      )}
      {/* End Filter By Section */}

      {/* Product Tags Section */}
      {props.hasTags && (
        <div className={`${cx("card")} bg-white rounded-3 mb-3 pb-4 shadow`}>
          <h3 className={cx("title")}>Product Tags</h3>
          <div className="">
            <div className="d-flex flex-wrap align-items-center">
              <span className={`${cx("productTag")} badge rounded-3`}>
                Headphone
              </span>
              <span className={`${cx("productTag")} badge rounded-3`}>
                Smart Phone
              </span>
              <span className={`${cx("productTag")} badge rounded-3`}>
                Laptop
              </span>
              <span className={`${cx("productTag")} badge rounded-3`}>
                Smart Watch
              </span>
            </div>
          </div>
        </div>
      )}
      {/* End Product Tags Section */}

      {/* ------END FILTER PRODUCTS SECTION------ */}

      {/* ------RANDOM PRODUCT SECTION------ */}
      {props.hasRandom && (
        <div className={`${cx("card")} bg-white rounded-3 mb-3 shadow`}>
          <h3 className={cx("title")}>Random Product</h3>
          <div className={`${cx("randomProductCard")} d-flex py-3 gap-2`}>
            <div className="w-40">
              <img className="img-fluid" src="images/watch.jpg" alt="Watch" />
            </div>
            <div className={`${cx("randomProductInfo")}`}>
              <h5>Smart watch Huawei for all kind of people</h5>
              <div className={cx(styles.star)}>
                <ReactStars
                  value="4"
                  edit={false}
                  count={5}
                  size={18}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <p>$100</p>
            </div>
          </div>
          <div className={`${cx("randomProductCard")} d-flex py-3 gap-2`}>
            <div className="w-40">
              <img className="img-fluid" src="images/watch.jpg" alt="Watch" />
            </div>
            <div className={`${cx("randomProductInfo")} w-60`}>
              <h5>Smart watch Huawei for all kind of people</h5>
              <div className={cx(styles.star)}>
                <ReactStars
                  value="4"
                  edit={false}
                  count={5}
                  size={18}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <p>$100</p>
            </div>
          </div>
        </div>
      )}
      {/* ------END RANDOM PRODUCT SECTION------ */}
    </>
  );
}

export default LeftNavFilter;
