import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./PrivacyPolicy.module.scss";
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
      name: "Refund Policy",
      to: "/refund",
    },
    {
      name: "Shipping Policy",
      to: "/shipping",
    },
    {
      name: "Terms of Service",
      to: "/terms",
    },
  ],
};

function PrivacyPolicy() {
  return (
    <>
      <MetaTag title="Privacy Policy" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Privacy Policy", to: "/privacy" },
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
                <BackButton to="/" name="Home" />
                <h1 className={cx("heading1")}>KitschMart Privacy Policy</h1>
                <p>
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit or make a purchase
                  from KitshMart.
                </p>
                <p>
                  <strong>WHAT PERSONAL INFORMATION WE COLLECT</strong>
                </p>
                <p>
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device.
                </p>
                <p>
                  Additionally, as you browse the Site, we collect information
                  about the individual web pages or products that you view, what
                  websites or search terms referred you to the Site, and
                  information about how you interact with the Site. We refer to
                  this automatically collected information as
                  <strong> Device Information</strong>.
                </p>
                <p>
                  We collect Device Information using the following
                  technologies:
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Cookies</strong> are data files that are placed on
                      your device or computer and often include an anonymous
                      unique identifier.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Log files</strong> track actions occurring on the
                      Site, and collect data including your IP address, browser
                      type, Internet service provider, referring/exit pages, and
                      date/time stamps.
                    </p>
                  </li>
                </ul>
                <p>
                  <em>
                    Mention all other tracking tools and/or technologies being
                    used by your website.
                  </em>
                </p>
                <p>
                  Also, when you make a purchase or attempt to make a purchase
                  through the Site, we collect certain information from you,
                  including your name, billing address, shipping address,
                  payment information (including credit card numbers
                  <em>Mention all types of accepted payments</em>, email
                  address, and phone number). This is called
                  <strong> Order Information</strong>.
                </p>
                <p>
                  <em>
                    Make sure you mention all other information that you
                    collect.
                  </em>
                </p>
                <p>
                  By <strong>Personal Information</strong> in this Privacy
                  Policy, we are talking both about Device Information and Order
                  Information.
                </p>
                <div className="my-5 text-center">
                  <img
                    className="img-fluid rounded-3"
                    src="/images/privacy.jpg"
                    alt="Privacy Policy"
                  />
                </div>
                <p>
                  <strong>HOW DO WE USE YOUR PERSONAL INFORMATION</strong>
                </p>
                <p>
                  We use the Order Information that we collect generally to
                  fulfil any orders placed through the Site (including
                  processing your payment information, arranging for shipping,
                  and providing you with invoices and/or order confirmations).
                </p>
                <p>Additionally, we use this Order Information to:</p>
                <ul>
                  <li>Communicate with you.</li>
                  <li>Screen our orders for potential risk or fraud.</li>
                  <li>
                    When in line with the preferences you have shared with us,
                    provide you with information or advertising relating to our
                    products or services.
                  </li>
                </ul>
                <p>
                  We use the Device Information that we collect to help us
                  screen for potential risk and fraud (in particular, your IP
                  address), and more generally to improve and optimize our Site.
                </p>
                <p>
                  <strong>SHARING YOUR PERSONAL INFORMATION</strong>
                </p>
                <p>
                  We share your Personal Information with third parties to help
                  us use your Personal Information, as described above.
                </p>
                <p>
                  We also use Google Analytics to help us understand how our
                  customers use KitschMart.&nbsp;
                  <a
                    href="https://www.google.com/intl/en/policies/privacy/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    How Google uses your Personal Information
                  </a>
                  .
                </p>
                <p>
                  Finally, we may also share your Personal Information to comply
                  with applicable laws and regulations, to respond to a
                  subpoena, search warrant or other lawful requests for
                  information we receive, or to otherwise protect our rights.
                </p>
                <p>
                  <strong>BEHAVIOURAL ADVERTISING</strong>
                </p>
                <p>
                  We use your Personal Information to provide you with targeted
                  advertisements or marketing communications we believe may be
                  of interest to you.
                </p>
                <p>
                  <em>Mention opt-out links from external services such as:</em>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/settings/?tab=ads"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/settings/ads/anonymous"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Google
                    </a>
                  </li>
                </ul>
                <p>You can opt out of targeted advertising…</p>
                <p>
                  <strong>YOUR RIGHTS</strong>
                </p>
                <p>
                  If you are a European resident, you have the right to access
                  the personal information we hold about you and to ask that
                  your personal information is corrected, updated, or deleted.
                  If you would like to exercise this right, please contact us.
                </p>
                <p>
                  Additionally, if you are a European resident we note that we
                  are processing your information in order to fulfil contracts
                  we might have with you (for example if you make an order
                  through the Site), or otherwise to pursue our legitimate
                  business interests listed above. Please note that your
                  information will be transferred outside of Europe, including
                  to Canada and the United States.
                </p>
                <p>
                  <strong>DATA RETENTION</strong>
                </p>
                <p>
                  When you place an order through the Site, we will maintain
                  your Order Information for our records unless and until you
                  ask us to delete this information.
                </p>
                <p>
                  <strong>MINORS</strong>
                </p>
                <p>
                  The Site is not intended for individuals under the age of
                  (CLEARLY MENTION AGE).
                </p>
                <p>
                  <strong>CHANGES</strong>
                </p>
                <p>
                  We may update this privacy policy from time to time in order
                  to reflect, for example, changes to our practices or for other
                  operational, legal or regulatory reasons.
                </p>
                <p>
                  If you have questions and/or require more information, do not
                  hesitate to contact us.
                </p>
                <p>
                  KitschMart Contact information:&nbsp;
                  <Link to="/contact">Click here!</Link>
                </p>
                <BackButton to="/" name="Home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
