import classNames from "classnames/bind";
import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./Checkout.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function Checkout() {
  return (
    <>
      <MetaTag title="Checkout" />

      <div className={`${cx("checkoutWrapper")}`}>
        <div className="row">
          <div className={`${cx("checkoutLeftWrapper")} shadow col-7`}>
            <div className={cx("checkoutLeftContent")}>
              <h1 className={cx("companyName")}>KitschMart</h1>
              <div
                className={`${cx("breadCrumb")} d-flex justify-content-start`}
              >
                <Breadcrumb
                  titles={[
                    { page: "Home /", to: "/" },
                    { page: "Cart /", to: "/cart" },
                    { page: "Information /", to: "/cart" },
                    { page: "Shipping /", to: "/cart" },
                    { page: "Payment", to: "/cart" },
                  ]}
                />
              </div>
              <h2 className={cx("title")}>Contact Information</h2>
              <p>Giang Le Thanh (legiangbmt09@gmail.com)</p>
              <button className={cx("logoutBtn")}>Log out</button>
              <div className="d-flex align-items-center gap-2 mt-2 mb-4">
                <input className={cx("inputCheck")} type="checkbox" />{" "}
                <p>Email me news and offers</p>
              </div>
              <h2 className={cx("title")}>Shipping address</h2>
              {/* Form shipping information */}
              <form className={cx("customerInformationForm")}>
                {/* Saved Address */}
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="savedAddressFloat"
                    aria-label="Floating label select example"
                  >
                    <option selected>United States (Giang Le Thanh)</option>
                    <option value="1">Viet Nam (Giang Le Thanh)</option>
                  </select>
                  <label for="savedAddressFloat">Saved address</label>
                </div>

                {/* Country */}
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="countryFloat"
                    aria-label="Floating label select example"
                  >
                    <option selected>United States</option>
                    <option value="1">Viet Nam</option>
                  </select>
                  <label for="countryFloat">Country/Region</label>
                </div>

                {/* Name */}
                <div className={`${cx("nameInputs")} mb-3 d-flex gap-3`}>
                  {/* First Name */}
                  <div className="form-floating w-50">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your first name"
                      defaultValue="Le Thanh"
                    />
                    <label for="firstName">First name (optional)</label>
                  </div>
                  {/* Last Name */}
                  <div className="form-floating w-50">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      defaultValue="Giang"
                    />
                    <label for="firstName">Last name (optional)</label>
                  </div>
                </div>
                {/* Address */}
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="addressFloat"
                    placeholder="Your address"
                    defaultValue="United States"
                  />
                  <label for="addressFloat">Address</label>
                </div>
                <p className="mb-3 d-flex align-items-center">
                  <AiOutlineInfoCircle />
                  &nbsp;Add a house number if you have one
                </p>
                {/* Apartment */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="apartmentFloat"
                    placeholder="Apartment, suite, etc (optional)"
                    defaultValue="5412 Timberwolf Ct, Eielson Afb, Alaska 99702, USA"
                  />
                  <label for="apartmentFloat">
                    Apartment, suite, etc (optional)
                  </label>
                </div>
                {/* City, State, Zip code */}
                {/* City */}
                <div className="d-flex gap-3">
                  <div className={`${cx("oneThird")} form-floating`}>
                    <input
                      type="text"
                      className="form-control"
                      id="cityFloat"
                      placeholder=""
                      defaultValue="Alaska"
                    />
                    <label for="cityFloat">City</label>
                  </div>
                  {/* State */}
                  <div className={`${cx("oneThird")} form-floating`}>
                    <select
                      className="form-select"
                      id="stateSelectFloat"
                      aria-label="Floating label select example"
                    >
                      <option selected>Alaska</option>
                      <option value="1">Ohio</option>
                    </select>
                    <label for="stateSelectFloat">State</label>
                  </div>
                  {/* Zip code */}
                  <div className={`${cx("oneThird")} form-floating`}>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCodeFloat"
                      placeholder=""
                      defaultValue="900000"
                    />
                    <label for="zipCodeFloat">ZIP code</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between py-4">
                  <BackButton name="Cart" to="/cart" />
                  <Button className={cx("continueBtn")} type="submit">
                    Continue to shipping
                  </Button>
                </div>
              </form>
              <p className="mt-3">All rights reserved KitschMart</p>
            </div>
          </div>
          <div className="col-5">
            <div className={cx("checkoutRightContent")}>
              <div className={`${cx("checkoutItem")} d-flex gap-4`}>
                <div className={cx("productImageWrapper")}>
                  <div className={cx("productImageContainer")}>
                    <img src="/images/tab.jpg" alt="Tab" />
                    <div
                      className={`${cx(
                        "badge"
                      )} badge d-flex align-items-center justify-content-center`}
                    >
                      1
                    </div>
                  </div>
                </div>
                <div className={cx("productInfo")}>
                  <h3>
                    Huawei Honor Tablet V6 10.4 5G TD-LTE CN 128GB KRJ-AN00
                    (Huawei KareemAJ)
                  </h3>
                  <p>Size: S</p>
                  <p>Color: A85A5A</p>
                </div>
              </div>
              <div className={cx("priceCalculated")}>
                <div className="my-3 d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p>$100</p>
                </div>
                <div className="mb-5 d-flex justify-content-between">
                  <p>Shipping</p>
                  <p>$19.65</p>
                </div>
                <div className="d-flex justify-content-between align-items-baseline">
                  <p className={cx("totalTitle")}>Total</p>
                  <div className="d-flex align-items-baseline gap-2">
                    <p>USD</p>
                    <p className={cx("totalPrice")}>$219.65</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
