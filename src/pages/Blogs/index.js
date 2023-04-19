import classNames from "classnames/bind";

import styles from "./Blogs.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import LeftNavFilter from "../../components/LeftNavFilter";
import BlogCard from "../../components/BlogCard";

const cx = classNames.bind(styles);

const categoriesContent = {
  title: "Find By Categories",
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

function Blogs() {
  return (
    <>
      <MetaTag title="Blogs" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Blogs", to: "/blogs" },
        ]}
      />
      <div className={`${cx("wrapper")} py-5`}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <LeftNavFilter
                hasCategories
                hasTags
                categoriesContent={categoriesContent}
              />
            </div>
            <div className="col-9">
              <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
