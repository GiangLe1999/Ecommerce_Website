import { useState } from "react";
import classNames from "classnames/bind";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import { AiOutlineSetting } from "react-icons/ai";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsShare, BsTruck } from "react-icons/bs";

import styles from "./SingleProduct.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import ProductImagesSlide from "../../components/ProductImagesSlide";

const cx = classNames.bind(styles);

const images = [
  {
    original: "/images/tab.jpg",
    thumbnail: "/images/tab.jpg",
  },
  {
    original: "/images/tab1.jpg",
    thumbnail: "/images/tab1.jpg",
  },
  {
    original: "/images/tab2.jpg ",
    thumbnail: "/images/tab2.jpg",
  },
  {
    original: "/images/tab3.jpg ",
    thumbnail: "/images/tab3.jpg",
  },
  {
    original: "/images/tab4.jpg ",
    thumbnail: "/images/tab4.jpg",
  },
];

function SingleProduct() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const showReviewFormHandler = (e) => {
    setShowReviewForm((prev) => !prev);
  };

  return (
    <>
      <MetaTag title="Dynamic Product Name" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Store /", to: "/store" },
          { page: "Dynamic Product Name", to: "/store" },
        ]}
      />
      <div className={`${cx("wrapper")} py-3`}>
        {/* Product Details Section */}
        <section className={`${cx("productInfoWrapper")} py-3`}>
          <div className="container-xxl">
            <div className="row bg-white rounded-3 shadow py-5 px-4 justify-content-between">
              <div className={`${cx("imagesPart")} col-6`}>
                <div className={cx("images")}>
                  <ProductImagesSlide
                    images={images}
                    showNav
                    showFullScreenButton
                    showIndex
                    showPlayButton={false}
                  />
                </div>
                {/* Payment Method */}
                <div
                  className={`${cx("paymentMethod")} rounded-3 p-4 text-center`}
                >
                  <h4>Payment Method</h4>
                  <div className="d-flex align-items-center gap-3 justify-content-center">
                    <div className={cx("paymentLogo")}>
                      <img src="/images/visa.webp" alt="Visa" />
                    </div>
                    <div className={cx("paymentLogo")}>
                      <img src="/images/master-card.png" alt="MasterCard" />
                    </div>
                    <div className={cx("paymentLogo")}>
                      <img src="/images/paypal.png" alt="Paypal" />
                    </div>
                    <div className={cx("paymentLogo")}>
                      <img src="/images/discover.png" alt="Discovers" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${cx("detailsPart")} col-6`}>
                <h1 className={cx("productName")}>
                  Huawei Honor Tablet V6 10.4 5G TD-LTE CN 128GB KRJ-AN00
                  (Huawei KareemAJ)
                </h1>
                <h3 className={cx("price")}>$100.00</h3>
                <div className="d-flex align-items-center gap-2">
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
                  <p>(2 reviews)</p>
                </div>
                {/* Main Information */}
                <ul className={cx("listDetails")}>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Type: </strong>
                    <p>Tablet</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Brand: </strong>
                    <p>Huawei</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Categories: </strong>
                    <p>Tablet, Our Store</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Tags: </strong>
                    <p>tablet</p>
                    <p>laptop</p>
                    <p>mobile</p>
                    <p>huawei</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>SKU: </strong>
                    <p>SKU027</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Availability: </strong>
                    <p>In Stock</p>
                  </li>
                  <li
                    className={`${cx(
                      "sizeInfo"
                    )} d-flex align-items-center gap-2`}
                  >
                    <strong>Size: </strong>
                    <span className={cx("active")}>S</span>
                    <span>L</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <strong>Color: </strong>
                    <span
                      className={cx("colorOption")}
                      style={{ backgroundColor: "#b81e1e" }}
                    ></span>
                    <span
                      className={cx("colorOption")}
                      style={{ backgroundColor: "#006dd7" }}
                    ></span>
                    <span
                      className={cx("colorOption")}
                      style={{ backgroundColor: "#717166" }}
                    ></span>
                  </li>
                  <li className="d-flex align-items-center position-relative gap-4">
                    <strong>Quantity:</strong>
                    <div className={cx("inputBox")}>
                      <input
                        className={cx("input")}
                        type="number"
                        defaultValue={0}
                        min={0}
                      />
                    </div>
                    <Button>ADD TO CART</Button>
                    <Button>BUY IT NOW</Button>
                  </li>
                  <li className="d-flex align-items-center position-relative gap-4">
                    <Link className="d-flex align-items-center gap-1" to="">
                      <img
                        className={cx("wishlistIcon")}
                        src="/images/wish.svg"
                        alt="Wishlist"
                      />{" "}
                      Add to wishlist
                    </Link>
                    <Link className="d-flex align-items-center gap-1" to="">
                      <img
                        className={cx("compareIcon")}
                        src="/images/prodcompare.svg"
                        alt="Compare"
                      />{" "}
                      Add to compare
                    </Link>
                  </li>
                </ul>

                {/* Accordion */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* Accordion 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <BsTruck className={cx("accordionIcon")} />
                        &nbsp; <strong>Shipping & Returns</strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Free shipping and returns available on all orders!{" "}
                        <br /> We ship all US domestic orders{" "}
                        <strong>within 5-10 business days!</strong>
                      </div>
                    </div>
                  </div>
                  {/* Accordion 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <AiOutlineSetting className={cx("accordionIcon")} />
                        &nbsp; <strong>Materials</strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        The <strong>Huawei MatePad 10.4 (2022)</strong> is a
                        good looking tablet with decent performance given the
                        mid-range specs. I used to have reservations for Huawei
                        tablets due to the lack of Google Play Store.
                      </div>
                    </div>
                  </div>
                  {/* Accordion 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <RxDimensions className={cx("accordionIcon")} /> &nbsp;{" "}
                        <strong>Dimensions</strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Size</th>
                              <th scope="col">Chest</th>
                              <th scope="col">Neek</th>
                              <th scope="col">Sleev</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Small</th>
                              <td>36-38"</td>
                              <td>14-14.5"</td>
                              <td>32.5"</td>
                            </tr>
                            <tr>
                              <th scope="row">Medium</th>
                              <td>39-41"</td>
                              <td>15-15.5"</td>
                              <td>33.5"</td>
                            </tr>
                            <tr>
                              <th scope="row">Large</th>
                              <td>42-44"</td>
                              <td>16-16.5"</td>
                              <td>34.5"</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Accordion 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        <AiOutlineHeart className={cx("accordionIcon")} />{" "}
                        &nbsp; <strong>Care Instructions</strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        View the manual for the Huawei MatePad 10.4{" "}
                        <strong
                          style={{
                            textDecoration: "underline",
                            color: "#0d6efd;",
                          }}
                        >
                          here
                        </strong>
                        , for free. This manual comes under the category Tablets
                        and has been rated by 6 people with an average of a 8.5.
                        This manual is available in the following languages:
                        English.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Product Link */}
                <div className={`${cx("shareBtn")} d-flex align-items-center`}>
                  <button
                    className={cx("btn")}
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "http://localhost:3000/store/:productId"
                      )
                    }
                  >
                    <BsShare className={cx("shareIcon")} /> &nbsp;{" "}
                    <strong
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Click here to get Product Link
                    </strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Accordion */}
        </section>

        {/* Product Description Section */}
        <section className={`${cx("descriptionWrapper")} pt-4`}>
          <div className="container-xxl">
            <h3>Production Infomation</h3>
            <div className="row bg-white rounded-3 shadow">
              <div className={`${cx("descriptionContent")} col-12`}>
                <ul>
                  <li>- 2.56GH Octa-Core Kirin 985 5G 7nm Processor</li>

                  <li>- 6GB RAM With 64/128GB ROM</li>

                  <li>- 10.4-Inch (2000 X 1200 Pixel) IPS Display</li>

                  <li>- 13MP Rear Camera</li>

                  <li>- 8MP Front Camera</li>

                  <li>- 5G SA/NSA (Optional)</li>

                  <li>- Wi-Fi 802.11 Ac</li>

                  <li>- Bluetooth 5.1</li>

                  <li>- GPS</li>

                  <li>- GLONASS</li>

                  <li>- USB 2.0 Type-C</li>

                  <li>- 7250mAh Battery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className={`${cx("reviewWrapper")} pt-5`}>
          <div className="container-xxl">
            <h3>Reviews</h3>
            <div className="row bg-white rounded-3 shadow">
              <div className={`${cx("reviewContent")} col-12`}>
                <div className={cx("reviewHeading")}>
                  <h4>Customer Reviews</h4>
                  <div className="d-flex align-items-cent justify-content-between">
                    <div className="d-flex align-items-center gap-2">
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
                      <p>Based on 2 reviews</p>
                    </div>
                    <button
                      type="button"
                      onClick={showReviewFormHandler}
                      className={`${cx("reviewBtn")} text-decoration-underline`}
                    >
                      {!showReviewForm ? "Write a review" : "Close Review Form"}
                    </button>
                  </div>
                </div>

                {/* Customer Review Form */}
                {showReviewForm && (
                  <div className={cx("reviewForm")}>
                    <div className={`${cx("formWrapper")} bg-white`}>
                      <div>
                        <h4 className={cx("formTitle")}>Write a review</h4>
                        <div class="py-3">
                          {/* <!-- Bootstrap 5 starter form --> */}
                          <form id="reviewForm">
                            {/* <!-- Name input --> */}
                            <div class="mb-4">
                              <label class="form-label" for="name">
                                Name
                              </label>
                              <input
                                class="form-control"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                data-sb-validations="required"
                              />
                              <div
                                class="invalid-feedback"
                                data-sb-feedback="name:required"
                              >
                                Name is required.
                              </div>
                            </div>

                            {/* <!-- Email address input --> */}
                            <div class="mb-4">
                              <label class="form-label" for="emailAddress">
                                Email
                              </label>
                              <input
                                class="form-control"
                                id="emailAddress"
                                type="email"
                                placeholder="john.smith@example.com"
                                data-sb-validations="required, email"
                              />
                              <div
                                class="invalid-feedback"
                                data-sb-feedback="emailAddress:required"
                              >
                                Email Address is required.
                              </div>
                              <div
                                class="invalid-feedback"
                                data-sb-feedback="emailAddress:email"
                              >
                                Email Address Email is not valid.
                              </div>
                            </div>

                            <div className="mb-4">
                              <label class="form-label" for="emailAddress">
                                Rating
                              </label>
                              <ReactStars
                                value="0"
                                count={5}
                                size={18}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={
                                  <i className="fa fa-star-half-alt"></i>
                                }
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                              />
                            </div>

                            {/* <!-- Review Title input --> */}
                            <div class="mb-4">
                              <label class="form-label" for="reviewTitle">
                                Review Title
                              </label>
                              <input
                                class="form-control"
                                id="reviewTitle"
                                type="text"
                                placeholder="Give your review a title"
                                data-sb-validations="required"
                              />
                              <div
                                class="invalid-feedback"
                                data-sb-feedback="reviewTitle:required"
                              >
                                Review Title is required.
                              </div>
                            </div>

                            {/* <!-- Body of Review input --> */}
                            <div class="mb-4">
                              <label class="form-label" for="reviewBody">
                                Body of Review (1500)
                              </label>
                              <textarea
                                class="form-control"
                                id="reviewBody"
                                type="text"
                                placeholder="Write your comment here"
                                style={{ height: "10rem" }}
                                data-sb-validations="required"
                              ></textarea>
                              <div
                                class="invalid-feedback"
                                data-sb-feedback="reviewBody:required"
                              >
                                Review Comment is required.
                              </div>
                            </div>

                            {/* <!-- Form submissions success message --> */}
                            <div class="d-none" id="submitSuccessMessage">
                              <div class="text-center mb-4">
                                Form submission successful!
                              </div>
                            </div>

                            {/* <!-- Form submissions error message --> */}
                            <div class="d-none" id="submitErrorMessage">
                              <div class="text-center text-danger mb-4">
                                Error sending message!
                              </div>
                            </div>
                            <div className="text-end mt-4">
                              <Button>Submit Review</Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className={cx("customerReview")}>
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
                  <p className={cx("reviewSummary")}>Very good!</p>
                  <p className={cx("customerName")}>
                    Giang Le Thanh<i> on August 29, 2022</i>
                  </p>
                  <p className={cx("customerReviewContent")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className={cx("adminResponse")}>
                  <p className={cx("adminName")}>KitschMart</p>
                  <p className={cx("adminResponseContent")}>
                    Hey, Giang, just want to drop a quick note to express our
                    genuine gratitude. Your purchase allows us at KitschMart to
                    continue to do what we love and provide you with quality
                    products.
                  </p>
                </div>
                <div className="text-end">
                  <button
                    className={`${cx("reportBtn")} text-decoration-underline`}
                  >
                    Report as a Inappropriate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Product Section */}
        <section className={`${cx("featuredWrapper")} py-5`}>
          <div className="container-xxl px-0">
            <div className="row gx-3">
              <div className="col-12">
                <h3 className={`${styles["section-heading"]} py-3`}>
                  You May Also Like
                </h3>
              </div>
              <ProductCard normalProduct />
              <ProductCard normalProduct />
              <ProductCard normalProduct />
              <ProductCard normalProduct />
              <ProductCard normalProduct />
              <ProductCard normalProduct />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SingleProduct;
