import Marquee from "react-fast-marquee";

import Button from "../../components/Button";
import BlogCard from "../../components/BlogCard";
import Brands from "./Brands";
import Categories from "./Categories";
import styles from "./Home.module.scss";
import Services from "./Services";
import SmallBanners from "./SmallBanners";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";
import BestsellerCard from "../../components/BestsellerCard";

function Home() {
  return (
    <>
      {/* HOME SECTION 1: BANNER */}
      <section className={`${styles["home-wrapper-1"]} py-5`}>
        <div className="container">
          <div className="row gx-3">
            <div className="col-6">
              {/* Main Banner */}
              <div className={`${styles["main-banner"]} position-relative`}>
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid rounded-3"
                  alt="Main Banner"
                />
                <div
                  className={`${styles["main-banner-content"]} position-absolute`}
                >
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>Special Sale</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <p className="mb-4">for 24 mo. Footnote*</p>
                  <Button to="/">BUY NOW</Button>
                </div>
              </div>
              {/* End Main Banner */}
            </div>
            <div className="col-6">
              {/* 4 Small Banner */}
              <div className="row g-3">
                <SmallBanners />
              </div>
              {/* End 4 Small Banner */}
            </div>
          </div>
        </div>
      </section>
      {/* END HOME SECTION 1 */}

      {/* HOME SECTION 2: SERVICES */}
      <section className={`${styles["home-wrapper-2"]} py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className={`${styles["services"]} d-flex align-items-center justify-content-between`}
              >
                <Services />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ENDER HOME SECTION 2 */}

      {/* HOME SECTION 3: CATEGORIES */}
      <section className={`${styles["home-wrapper-3"]}`}>
        <div className="container bg-white shadow rounded-3 py-4 position-relative">
          <span className={styles.line}></span>
          <div className="row row-cols-5 gx-4">
            <Categories />
          </div>
        </div>
      </section>
      {/* END HOME SECTION 3 */}

      {/* HOME SECTION 4: BRAND MARQUEE*/}
      <section className={`${styles["marquee-wrapper"]} py-5`}>
        <div className="container">
          <div className="row">
            <div
              className={`${styles["marquee-inner-wrapper"]} p-3 bg-white shadow rounded-3`}
            >
              <Marquee className="d-flex">
                <Brands />
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      {/* HOME SECTION 4: END BRAND MARQUEE*/}

      {/* HOME SECTION 5: FEATURED PRODUCTS*/}
      <section className={`${styles["featured-wrapper"]} py-5`}>
        <div className="container px-0">
          <div className="row gx-2">
            <div className="col-12">
              <h3 className={`${styles["section-heading"]} py-3`}>
                Featured Selection
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

      {/* HOME SECTION 6: BESTSELLER */}
      <section className={`${styles["bestseller-wrapper"]} pb-5`}>
        <div className="container px-0">
          <div className="row gap-3">
            <BestsellerCard
              dark
              img="images/famous-1.webp"
              alt="BigScreen"
              category="BigScreen"
              title="Smart Watch Series 7"
              des="From $399 or $16.62/mo. for 24 mo.*"
            />
            <BestsellerCard
              img="images/famous-2.webp"
              alt="Laptops"
              category="studio display"
              title="600 nits of brightness"
              des="27-inch 5K Retina display"
            />
            <BestsellerCard
              img="images/famous-3.webp"
              alt="Smartphone"
              category="Smartphone"
              title="Smartphone 13 Pro."
              des="Now in Green. From $999.00 or $41.62/mo for 24 mo. Footnote*"
            />
            <BestsellerCard
              img="images/famous-4.webp"
              alt="Home Speakers"
              category="Home Speakers"
              title="Room-filling sound."
              des="From $699 or 116.58/mo. for 12 mo.*"
            />
          </div>
        </div>
      </section>
      {/* END HOME SECTION 6 */}

      {/* HOME SECTION 7: SPECIAL PRODUCTS*/}
      <section className={`${styles["special-wrapper"]} py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-12 px-0 py-3">
              <h3 className={`${styles["section-heading"]} py-3`}>
                Special Products
              </h3>
              <div className="row">
                <SpecialProduct />
                <SpecialProduct />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HOME SECTION 7 */}

      {/* HOME SECTION 8: POPULAR PRODUCTS*/}
      <section className={`${styles["popular-wrapper"]} py-5`}>
        <div className="container px-0">
          <div className="row">
            <div className="col-12">
              <h3 className={`${styles["section-heading"]} py-3`}>
                Our Popular Products
              </h3>
            </div>
          </div>
          <div className="row gx-2">
            <ProductCard filterProduct />
            <ProductCard staticBanner />
            <ProductCard normalProduct />
            <ProductCard normalProduct />
            <ProductCard normalProduct />
            <ProductCard normalProduct />
          </div>
        </div>
      </section>
      {/* END HOME SECTION 8 */}

      {/* HOME SECTION 9: BLOG */}
      <section className={`${styles["blog-wrapper"]} py-5`}>
        <div className="container px-0">
          <div className="row">
            <div className="col-12">
              <h3 className={`${styles["section-heading"]} py-3`}>
                Our Latest News
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
      {/* END HOME SECTION 9 */}
    </>
  );
}

export default Home;
