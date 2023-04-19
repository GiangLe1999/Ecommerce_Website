import classNames from "classnames/bind";

import styles from "./ShippingPolicy.module.scss";
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
      name: "Refund Policy",
      to: "/refund",
    },
    {
      name: "Terms of Service",
      to: "/terms",
    },
  ],
};

function ShippingPolicy() {
  return (
    <>
      <MetaTag title="Shipping Policy" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Shipping Policy", to: "/shipping" },
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
                <div>
                  <h1 className={cx("heading1")}>Shipping Policy</h1>
                  <p>
                    Thank you for visiting and shopping at{" "}
                    <strong>KitschMart.&nbsp;</strong>
                  </p>
                  <h3>Domestic Shipping Policy</h3>
                  <p>
                    <strong>Shipment processing time</strong>
                  </p>
                  <p>
                    All orders are processed within 2–3 business days of
                    receipt. Orders are not processed or shipped from Friday, 12
                    pm EST through Sunday, or holidays.
                  </p>
                  <p>
                    If we are experiencing a high volume of orders, shipments
                    may be delayed by a few days. If your shipment experiences a
                    significant delay, we will contact you via email or phone.
                  </p>
                  <p>
                    <strong>Shipping rates and delivery estimates</strong>
                  </p>
                  <p>
                    Shipping charges for your order will be calculated and
                    displayed at checkout.
                  </p>
                  <div className="my-4 text-center">
                    <img
                      className="img-fluid rounded-3"
                      src="/images/shipping.jpg"
                      alt="Shipping Policy"
                    />
                  </div>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Order Amount</th>
                          <th>Standard Ground Shipping (1–7 business days)</th>
                          <th>FedEx Ground (3–7 business days)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>$0–$49.99</td>
                          <td>$5.95</td>
                          <td>$9.95</td>
                        </tr>
                        <tr>
                          <td>$50.00+</td>
                          <td>*Free</td>
                          <td>*Free</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>*Free shipping on orders of $50 or more.</p>
                  <p>
                    Overnight delivery is only available for orders with
                    delivery addresses within the continental United States.
                  </p>
                  <p>
                    <strong>Shipment to P.O. boxes or APO/FPO addresses</strong>
                  </p>
                  <p>
                    KitschMart ships to addresses within the US, US Territories,
                    and APO/FPO/DPO addresses.
                  </p>
                  <p>
                    <strong>Shipment Confirmation and Order Tracking</strong>
                  </p>
                  <p>
                    You will receive a Shipment Confirmation email with your
                    tracking number once your order has shipped. The tracking
                    number will be active within 24 hours.
                  </p>
                  <p>
                    <strong>Customs, Duties, and Taxes</strong>
                  </p>
                  <p>
                    KitschMart is not responsible for any customs and taxes
                    applied to your order. All fees imposed during or after
                    shipping are the customer’s responsibility (including
                    tariffs, taxes, and other costs).
                  </p>
                  <p>
                    <strong>Damages</strong>
                  </p>
                  <p>
                    KitschMart is not liable for any products damaged or lost
                    during shipping. If you
                  </p>
                  <p>
                    received your order damaged, please file a claim with the
                    shipment carrier. Save all packaging materials and damaged
                    goods before filing a claim.
                  </p>
                  <h3>International Shipping Policy</h3>
                  <p>We currently do not ship outside the continental US.</p>
                  <h3>Incorrect Shipping Addresses and Refused Delivery</h3>
                  <p>
                    We make every attempt to validate the shipping address
                    provided at checkout to ensure it’s recognized as a valid
                    address by the USPS. If we cannot validate the address, we
                    will try to contact the customer to provide an updated
                    address. If we cannot update the address, the order will be
                    canceled and refunded.
                  </p>
                  <p>
                    KitschMart will not be held responsible if the customer
                    provides the wrong shipping address and we cannot recover
                    the package.
                  </p>
                  <h3>Missing or Stolen Shipments</h3>
                  <p>
                    If you didn't receive your order, but the shipping carrier
                    has reported that it was delivered, please let us know as
                    soon as possible:
                  </p>
                  <ol>
                    <li>Call +84 962334807 &nbsp;</li>
                    <li>Or alert us at legiangbmt09@gmail &nbsp;</li>
                  </ol>
                  <p>
                    We will file a claim with the shipping carrier. Local law
                    enforcement will be involved. We will replace or refund your
                    order when the investigation is complete. Allow up to 21
                    days for the investigation.
                  </p>
                </div>
                <BackButton to="/" name="Home" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingPolicy;
