/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { BsSearch } from "react-icons/bs";
import MiddleHeaderLinks from "./MiddleHeaderLinks";
import BottomHeaderLinks from "./BottomHeaderLinks";
import CategoryLinks from "./CategoryLinks";

function Header() {
  return (
    <>
      {/* TOP HEADER SECTION */}
      <header className={`${styles["top-header"]} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel:+84 962334807">
                  +84 962334807
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MIDDLE HEADER SECTION */}
      <header
        className={`${styles["middle-header"]} py-3 d-flex align-items-center`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h1 className="fs-3 m-0">
                <Link className="text-white py-2" to={"/"}>
                  KitschMart
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search For Products Here ..."
                  aria-label="Search For Products Here ..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className={`input-group-text p-3 ${styles["search-icon"]}`}
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div
                className={`${styles["middle-header-links"]} d-flex align-items-center-justify-contents-between gap-3`}
              >
                <MiddleHeaderLinks />
                <div className="d-flex align-items-center">
                  <Link className="d-flex align-items-center text-white gap-1">
                    <img src="images/cart.svg" alt="Cart icon" />
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <span
                        className={`${styles["cart-badge"]} badge bg-white text-dark w-50 rounded-pill`}
                      >
                        0
                      </span>
                      <p>$50.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BOTTOM HEADER SECTION */}
      <header className={`${styles["bottom-header"]} py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex gap-4">
              <div className="">
                {/* Shop Category */}
                <div className={`${styles.categories} dropdown`}>
                  <button
                    className="dropdown-toggle d-flex align-items-center bg-transparent me-5 border-0 gap-3"
                    id="dropdownMenuButton1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="Categories icon" />
                    <span className="me-5 py-2">Shop Categories</span>
                  </button>

                  <ul
                    className={`${styles["categories-list"]} dropdown-menu`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <CategoryLinks />
                  </ul>
                </div>
                {/* End Shop Category */}
              </div>
              <div
                className={`${styles["menu-links"]} d-flex align-items-center`}
              >
                <nav className="navigation d-flex align-items-center h-100 gap-3">
                  <BottomHeaderLinks />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
