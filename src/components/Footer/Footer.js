import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import footerLinksList from "./footerLinksList";

function Footer() {
  return (
    <section className={`${styles["footer-section"]} text-white`}>
      {/* TOP FOOTER */}
      <footer className={`${styles["top-footer"]} py-4`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="top-footer-content d-flex align-items-center gap-3">
                <img
                  src="images/newsletter.png"
                  alt="Newsletter Footer Icon "
                />
                <h4 className="mb-0">Sign Up For Newsletter</h4>
              </div>
            </div>
            {/* Subscribe Email */}
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span
                  className={`${styles["subscribe-button"]} input-group-text text-white`}
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
            {/* End Subscribe Email */}
          </div>
        </div>
      </footer>

      {/* MIDDLE FOOTER */}
      <footer className={`${styles["middle-footer"]} py-5`}>
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-4">
              <h4 className="mt-1 mb-4">Contact Us</h4>
              <div>
                <address>
                  <p>
                    <b>Address:</b> 92/16/3 Nguyen Tu Nghiem
                  </p>
                  District 2, Ho Chi Minh City Viet Nam <br />
                  <p className="mt-4 mb-1">
                    <b>Postal Code:</b> 700000
                  </p>
                </address>
                <a
                  href="tel: +84 962334807"
                  className="mt-4 mb-1 d-block text-white"
                >
                  <b>Tel:</b> +84 962334807
                </a>
                <a
                  href="mailto: legiangbmt09@gmail.com"
                  className="mt-4 mb-0 d-block text-white"
                >
                  <b>Email:</b> legiangbmt09@gmail.com
                </a>
                <div
                  className={`${styles["social-icons"]} mt-4 d-flex align-items-center gap-2`}
                >
                  {footerLinksList.socialLinks.map((socialLink) => (
                    <div className={`${styles["social-icon-block"]}`}>
                      <a
                        href={socialLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block h-100"
                      >
                        <img
                          src={socialLink.icon}
                          className={`${styles["social-icon"]} text-white`}
                          alt={socialLink.alt}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Column 1 */}

            {/* Column 2 */}
            <div className="col-3">
              <h4 className="mt-1 mb-4">Information</h4>
              <div className={`${styles["footer-links"]} d-flex flex-column`}>
                {footerLinksList.column2.map((link) => (
                  <Link
                    className={`${styles["footer-link"]} text-white py-2 mb-1`}
                    to={link.to}
                  >
                    {link.content}
                  </Link>
                ))}
              </div>
            </div>
            {/* End Column 2 */}

            {/* Column 3 */}
            <div className="col-3">
              <h4 className="mt-1 mb-4">Account</h4>
              <div className={`${styles["footer-links"]} d-flex flex-column`}>
                {footerLinksList.column3.map((link) => (
                  <Link
                    className={`${styles["footer-link"]} text-white py-2 mb-1`}
                    to={link.to}
                  >
                    {link.content}
                  </Link>
                ))}
              </div>
            </div>
            {/* End Column 3 */}

            {/* Column 4 */}
            <div className="col-2">
              <h4 className="mt-1 mb-4">Quick Links</h4>
              <div className={`${styles["footer-links"]} d-flex flex-column`}>
                {footerLinksList.column4.map((link) => (
                  <Link
                    className={`${styles["footer-link"]} text-white py-2 mb-1`}
                    to={link.to}
                  >
                    {link.content}
                  </Link>
                ))}
              </div>
            </div>
            {/* End Column 4 */}
          </div>
        </div>
      </footer>
      {/* BOTTOM FOOTER */}

      <footer className={`${styles["bottom-footer"]} py-4`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center">
                &copy; {new Date().getFullYear()}; Powered by KitschMart
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
