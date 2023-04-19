import classNames from "classnames/bind";
import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./BackButton.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function BackButton(props) {
  const navigate = useNavigate();
  return (
    <div
      className={cx("backBtn")}
      onClick={() => {
        navigate(props.to);
      }}
    >
      <IoMdArrowRoundBack />
      &nbsp; Back to {props.name}
    </div>
  );
}

export default BackButton;
