import classNames from "classnames/bind";

import styles from "./TermsOfService.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import LeftNavFilter from "../../components/LeftNavFilter";
import BackButton from "../../components/BackButton";

const cx = classNames.bind(styles);

const categoriesContent = {
  title: "Return to",
  list: [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Contact",
      to: "/contact",
    },
    {
      name: "Your Wishlist",
      to: "/wishlist",
    },
    {
      name: "Blogs",
      to: "/blogs",
    },
    {
      name: "Privacy Policy",
      to: "/privacy",
    },
    {
      name: "Shipping Policy",
      to: "/shipping",
    },
    {
      name: "Shipping Policy",
      to: "/shipping",
    },
  ],
};

function TermsOfService() {
  return (
    <>
      <MetaTag title="Terms of Service" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Terms of Service", to: "/terms" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <LeftNavFilter
                hasCategories
                categoriesContent={categoriesContent}
              />
            </div>
            <div className="col-9">
              <div className={cx("contentSection")}>
                <div>
                  <BackButton to="/" name="Home" />
                  <h1 className={cx("heading1")}>
                    KistchMart Terms and Conditions Policy
                  </h1>
                  <p>
                    Welcome to KistchMart These terms and conditions outline the
                    rules and regulations for the use of KistchMart’s Website.
                  </p>
                  <p>
                    <strong>
                      KistchMart is located at: 92/16/3 Nguyen Tu Nghiem St.,
                      District 2, Ho Chi Minh City, Viet Nam.
                    </strong>
                  </p>
                  <p>
                    By accessing this website we assume you accept these terms
                    and conditions in full. Do not continue to use (Store
                    Name)’s website if you do not accept all of the terms and
                    conditions stated on this page.
                  </p>
                  <p>
                    The following terminology applies to these Terms and
                    Conditions, Privacy Statement and Disclaimer Notice and any
                    or all Agreements: <strong>Client</strong>,
                    <strong>You</strong> and <strong>Your</strong> refers to
                    you, the person accessing this website and accepting the
                    Company’s terms and conditions. <strong>The Company</strong>
                    , <strong>Ourselves</strong>, <strong>We</strong>,
                    <strong>Our</strong> and <strong>Us</strong>, refers to our
                    Company. <strong>Party</strong>, <strong>Parties</strong>,
                    or <strong>Us</strong>, refers to both the Client and
                    ourselves, or either the Client or ourselves.
                  </p>
                  <p>
                    All terms refer to the offer, acceptance and consideration
                    of payment necessary to undertake the process of our
                    assistance to the Client in the most appropriate manner,
                    whether by formal meetings of a fixed duration, or any other
                    means, for the express purpose of meeting the Client’s needs
                    in respect of provision of the Company’s stated
                    services/products, in accordance with and subject to,
                    prevailing law of 92/16/3 Nguyen Tu Nghiem St., District 2,
                    Ho Chi ,Minh City Viet Nam.
                  </p>
                  <p>
                    Any use of the above terminology or other words in the
                    singular, plural, capitalisation and/or he/she or they, are
                    taken as interchangeable and therefore as referring to same.
                  </p>
                  <div className="my-5 text-center">
                    <img
                      className="img-fluid rounded-3"
                      src="/images/terms-and-conditions.jpg"
                      alt="Terms and Conditions"
                    />
                  </div>
                  <p>
                    <strong>Cookies</strong>
                  </p>

                  <p>
                    We employ the use of cookies. By using KistchMart’s website
                    you consent to the use of cookies in accordance with
                    KistchMart’s privacy policy. Most of the modern day
                    interactive websites use cookies to enable us to retrieve
                    user details for each visit.
                  </p>
                  <p>
                    Cookies are used in some areas of our site to enable the
                    functionality of this area and ease of use for those people
                    visiting. Some of our affiliate / advertising partners may
                    also use cookies.
                  </p>
                  <p>
                    <strong>License</strong>
                  </p>
                  <p>
                    Unless otherwise stated, KistchMart and/or its licensors own
                    the intellectual property rights for all material on
                    KistchMart.
                  </p>
                  <p>
                    All intellectual property rights are reserved. You may view
                    and/or print pages from KitschMart for your own personal use
                    subject to restrictions set in these terms and conditions.
                  </p>
                  <p>You must not:</p>
                  <ul>
                    <li>Republish material from KitschMart.</li>
                    <li>Sell, rent or sub-license material from KitschMart.</li>
                    <li>
                      Reproduce, duplicate or copy material from KitschMart.
                    </li>
                    <li>
                      Redistribute content from KistchMart (unless content is
                      specifically made for redistribution).
                    </li>
                  </ul>
                  <p>
                    <strong>Disclaimer</strong>
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, we
                    exclude all representations, warranties and conditions
                    relating to our website and the use of this website
                    (including, without limitation, any warranties implied by
                    law in respect of satisfactory quality, fitness for purpose
                    and/or the use of reasonable care and skill).
                  </p>
                  <p>Nothing in this disclaimer will:</p>
                  <ul>
                    <li>
                      Limit or exclude our or your liability for death or
                      personal injury resulting from negligence.
                    </li>
                    <li>
                      Limit or exclude our or your liability for fraud or
                      fraudulent misrepresentation.
                    </li>
                    <li>
                      Limit any of our or your liabilities in any way that is
                      not permitted under applicable law.
                    </li>
                    <li>
                      Or exclude any of our or your liabilities that may not be
                      excluded under applicable law.
                    </li>
                  </ul>
                  <p>
                    The limitations and exclusions of liability set out in this
                    Section and elsewhere in this disclaimer:
                  </p>
                  <ol>
                    <li>
                      <b>Are subject to the preceding paragraph; and</b>
                    </li>
                    <li>
                      <b>
                        Govern all liabilities arising under the disclaimer or
                        in relation to the subject matter of this disclaimer,
                        including liabilities that arise in contract, tort
                        (including negligence) and for breach of statutory duty.
                      </b>
                    </li>
                  </ol>
                  <p>
                    To the extent that the website and the information and
                    services on the website are provided free of charge, we will
                    not be liable for any loss or damage of any nature.
                  </p>
                  <BackButton to="/" name="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;
