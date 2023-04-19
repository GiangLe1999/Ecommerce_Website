import classNames from "classnames/bind";

import styles from "./FilterBar.module.scss";

const cx = classNames.bind(styles);

function FilterBar(props) {
  return (
    <div
      className={`${cx(
        "filterBar"
      )} bg-white shadow py-2 px-3 rounded-3 d-flex justify-content-between`}
    >
      <div
        className={`${cx("filterDropdown")} d-flex align-items-center gap-4`}
      >
        <p>Sort by:</p>
        <select
          className={`${cx("dropdownMenu")} form-select`}
          name="dropdownMenu"
          id="dropdownMenu"
        >
          <option value="manual">Featured</option>
          <option value="best-selling">Best selling</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
          <option value="created-ascending">Date, old to new</option>
          <option value="created-descending">Date, new to old</option>
        </select>
      </div>
      <div
        className={`${cx(
          "filterGrid"
        )} d-flex justify-content-end align-items-center gap-2`}
      >
        <p>21 Products</p>
        <div
          className={`${cx(
            "iconSection"
          )} d-flex align-items-center justify-content-end gap-1`}
        >
          {/* 4 Columns Grid */}
          <div
            className={cx("icon", { active: props.gridColumns === 4 })}
            onClick={() => {
              props.onChangeGrid(4);
            }}
          >
            <img
              src="images/gr4-active.svg"
              alt="Grid icon"
              className={cx("activeIcon")}
            />
            <img
              className={cx("normalIcon")}
              src="images/gr4.svg"
              alt="Grid icon"
            />
          </div>

          {/* 3 Columns Grid */}
          <div
            className={cx("icon", { active: props.gridColumns === 3 })}
            onClick={() => {
              props.onChangeGrid(3);
            }}
          >
            <img
              src="images/gr3-active.svg"
              alt="Grid icon"
              className={cx("activeIcon")}
            />
            <img
              className={cx("normalIcon")}
              src="images/gr3.svg"
              alt="Grid icon"
            />
          </div>

          {/* 2 Columns Grid */}
          <div
            className={cx("icon", { active: props.gridColumns === 2 })}
            onClick={() => {
              props.onChangeGrid(2);
            }}
          >
            <img
              src="images/gr2-active.svg"
              alt="Grid icon"
              className={cx("activeIcon")}
            />
            <img
              className={cx("normalIcon")}
              src="images/gr2.svg"
              alt="Grid icon"
            />
          </div>

          {/* 1 Columns Grid */}
          <div
            className={cx("icon", { active: props.gridColumns === 1 })}
            onClick={() => {
              props.onChangeGrid(1);
            }}
          >
            <img
              src="images/gr-active.svg"
              alt="Grid icon"
              className={cx("activeIcon")}
            />
            <img
              className={cx("normalIcon")}
              src="images/gr.svg"
              alt="Grid icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
