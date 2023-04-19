import classNames from "classnames/bind";

import styles from "./CompareProducts.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import ComparedProductCard from "../../components/ComparedProductCard";

const cx = classNames.bind(styles);

function CompareProducts() {
  return (
    <>
      <MetaTag title="Compare Products" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Compare Products", to: "/compare-products" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row gap-3">
            <ComparedProductCard />
            <ComparedProductCard />
            <ComparedProductCard />
            <ComparedProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProducts;
