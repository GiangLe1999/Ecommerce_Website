import classNames from "classnames/bind";

import styles from "./Wishlist.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import WishlistProduct from "../../components/WishlistProduct";

const cx = classNames.bind(styles);

function Wishlist() {
  return (
    <>
      <MetaTag title="Wishlist" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Wishlist", to: "/wishlist" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row gap-3">
            <WishlistProduct />
            <WishlistProduct />
            <WishlistProduct />
            <WishlistProduct />
            <WishlistProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
