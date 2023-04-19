import classNames from "classnames/bind";

import styles from "./Cart.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import Button from "../../components/Button";

const cx = classNames.bind(styles);

function Cart() {
  return (
    <>
      <MetaTag title="Cart" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Your Shopping Cart", to: "/cart" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row">
            <div className={`${cx("cartTable")}`}>
              <table class="table">
                <thead>
                  <tr>
                    <th className={cx("col1")} scope="col">
                      PRODUCT
                    </th>
                    <th className={`${cx("col2")}`} scope="col">
                      PRICE
                    </th>
                    <th className={`${cx("col3")} text-start`} scope="col">
                      QUANTITY
                    </th>
                    <th className="text-end" scope="col">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="d-flex gap-3">
                        <div className={cx("productImageContainer")}>
                          <img src="/images/tab.jpg" alt="Tab" />
                        </div>
                        <div className={cx("productInfo")}>
                          <h3>
                            Huawei Honor Tablet V6 10.4 5G TD-LTE CN 128GB
                            KRJ-AN00 (Huawei KareemAJ)
                          </h3>
                          <p>Size: S</p>
                          <p>Color: A85A5A</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$100</td>
                    <td className="py-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className={cx("inputBox")}>
                          <input
                            className={cx("input")}
                            type="number"
                            defaultValue={1}
                            min={0}
                          />
                        </div>
                        <Button className={cx("removeBtn")}>
                          <img src="/images/trash.svg" alt="Remove" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-4 text-end">$100</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <div className="d-flex gap-3">
                        <div className={cx("productImageContainer")}>
                          <img src="/images/tab.jpg" alt="Tab" />
                        </div>
                        <div className={cx("productInfo")}>
                          <h3>
                            Huawei Honor Tablet V6 10.4 5G TD-LTE CN 128GB
                            KRJ-AN00 (Huawei KareemAJ)
                          </h3>
                          <p>Size: S</p>
                          <p>Color: A85A5A</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$100</td>
                    <td className="py-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className={cx("inputBox")}>
                          <input
                            className={cx("input")}
                            type="number"
                            defaultValue={1}
                            min={0}
                          />
                        </div>
                        <Button className={cx("removeBtn")}>
                          <img src="/images/trash.svg" alt="Remove" />
                        </Button>
                      </div>
                    </td>
                    <td className="py-4 text-end">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Button to="/store">Continue Shopping</Button>
            </div>
            <div
              className={`${cx(
                "calculateSection"
              )} d-flex justify-content-between align-items-center`}
            >
              <p className={cx("instructions")}>Order special instructions</p>
              <div className="d-flex gap-3 align-items-baseline">
                <p className={cx("subtotalTitle")}>Subtotal</p>
                <strong className={cx("subtotalNumber")}>$100.00</strong>
              </div>
            </div>
            <div className="text-end">
              <p className={cx("taxes")}>
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <div className="text-end">
              <Button className={cx("checkOutBtn")}>Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
