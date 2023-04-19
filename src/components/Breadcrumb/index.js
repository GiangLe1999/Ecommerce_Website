import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Breadcrumb.module.scss";

const cx = classNames.bind(styles);

function Breadcrumb(props) {
  return (
    <div className={`${cx("breadcrumb")} m-0`}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              {props.titles.map((title) => (
                <Link to={title.to} className={`${cx("text-dark")} py-4`}>
                  &nbsp;{title.page}
                </Link>
              ))}
              {/* 
              <Link to="/" className={`${cx("text-dark")} py-4`}>
                Home
              </Link>
              &nbsp;/ {props.title} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
