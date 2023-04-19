import classNames from "classnames/bind";

import styles from "./RefundPolicy.module.scss";
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
      name: "Terms of Service",
      to: "/terms",
    },
  ],
};

function RefundPolicy() {
  return (
    <>
      <MetaTag title="Refund Policy" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Refund Policy", to: "/refund" },
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
                  <h1 className={cx("heading1")}>KitschMart Refund Policy</h1>{" "}
                  <p>Thank you for shopping at KitschMart!</p>
                  <p>
                    We offer refund and/or exchange within the first 30 days of
                    your purchase
                  </p>{" "}
                  <p>
                    If 30 days have passed since your purchase, you will not be
                    offered a refund and/or exchange of any kind.
                  </p>
                  <div className="my-4 text-center">
                    <img
                      className="img-fluid rounded-3"
                      src="/images/refund.jpeg"
                      alt="Refund Policy"
                    />
                  </div>
                  <p>
                    <strong>Eligibility for Refunds and Exchanges</strong>
                  </p>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <p>
                        Your item must be unused and in the same condition that
                        you received it.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>The item must be in the original packaging.</p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        To complete your return, we require a receipt or proof
                        of purchase.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        Only regular priced items may be refunded, sale items
                        cannot be refunded.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        If the item in question was marked as a gift when
                        purchased and shipped directly to you, you will receive
                        a gift credit for the value of your return.
                      </p>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <p>
                    <strong>Exchanges</strong> <em>(if applicable)</em>
                  </p>{" "}
                  <p>
                    We only replace items if they are defective or damaged. If
                    you need to exchange it for the same item, send us an email
                    at legiangbmt09@gmail.com and send your item to: 92/16/3
                    Nguyen Tu Nghiem St., District 2, Ho Chi Minh City, Viet
                    Nam.
                  </p>{" "}
                  <p>
                    <strong>Exempt Goods</strong>
                  </p>{" "}
                  <p>The following are exempt from refunds:</p>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <p>Gift cards</p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>Some health and personal care items</p>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <p>
                    <strong>Partial refunds are granted</strong>{" "}
                    <em>(if applicable)</em>
                  </p>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <p>
                        Any item not in its original condition, is damaged or
                        missing parts for reasons not due to our error.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        Any item that is returned more than 30 days after
                        delivery.
                      </p>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <p>
                    Once your return is received and inspected, we will send you
                    an email to notify you that we have received your returned
                    item. We will also notify you of the approval or rejection
                    of your refund.
                  </p>{" "}
                  <p>
                    If you are approved, then your refund will be processed, and
                    a credit will automatically be applied to your credit card
                    or original method of payment, within a certain amount of
                    days.
                  </p>{" "}
                  <p>
                    <strong>Late or missing refunds</strong>
                  </p>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <p>
                        If you have not received a refund yet, first check your
                        bank account again. Then contact your credit card
                        company, it may take some time before your refund is
                        officially posted.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        If you have done all of this and you still have not
                        received your refund yet, please contact us at +84
                        962334807
                      </p>{" "}
                    </li>{" "}
                  </ul>{" "}
                  <p>
                    <strong>Shipping</strong>
                  </p>{" "}
                  <ul>
                    {" "}
                    <li>
                      {" "}
                      <p>
                        Please do not send the product back to the manufacturer.
                        It must be sent to the following Address: 92/16/3 Nguyen
                        Tu Nghiem St., District 2, Ho Chi Minh City, Viet Nam.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        You will be responsible for paying for your own shipping
                        costs for returning your item.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        Shipping costs are non-refundable! If you receive a
                        refund, the cost of return shipping will be deducted
                        from your refund.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        Depending on where you live, the time it may take for
                        your exchanged product to reach you, may vary.
                      </p>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <p>
                        Please see, we cannot guarantee that we will receive
                        your returned item.
                      </p>{" "}
                    </li>{" "}
                  </ul>{" "}
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

export default RefundPolicy;
