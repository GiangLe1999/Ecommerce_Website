import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Store.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import FilterBar from "../../components/FilterBar";
import LeftNavFilter from "../../components/LeftNavFilter";
import ProductCard from "../../components/ProductCard";

const cx = classNames.bind(styles);

const categoriesContent = {
  title: "Shop By Categories",
  list: [
    {
      name: "TV",
      to: "tv",
    },
    {
      name: "Watch",
      to: "watch",
    },
    {
      name: "Camera",
      to: "camera",
    },
    {
      name: "Laptop",
      to: "laptop",
    },
  ],
};

function Store() {
  const [gridColumns, setGridColumns] = useState(4);
  const gridChangeHandler = (columns) => {
    setGridColumns(columns);
  };

  return (
    <>
      <MetaTag title="Our Store" />
      <Breadcrumb
        titles={[
          { page: "Home  /", to: "/" },
          { page: "Store", to: "/store" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <LeftNavFilter
                hasCategories
                hasFilterBy
                hasTags
                hasRandom
                categoriesContent={categoriesContent}
              />
            </div>
            <div className="col-9">
              <FilterBar
                gridColumns={gridColumns}
                onChangeGrid={gridChangeHandler}
              />
              <div className="row">
                <ProductCard normalProduct gridColumns={gridColumns} />
                <ProductCard normalProduct gridColumns={gridColumns} />
                <ProductCard normalProduct gridColumns={gridColumns} />
                <ProductCard normalProduct gridColumns={gridColumns} />
                <ProductCard normalProduct gridColumns={gridColumns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
