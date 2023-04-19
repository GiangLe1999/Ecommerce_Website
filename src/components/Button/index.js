import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  onClick,
  children,
  disabled,
  type,
  className,
  ...passProps
}) {
  let Element = "button";
  const classes = cx("wrapper", { [className]: className });
  let props = {
    to,
    href,
    onClick,
    children,
    disabled,
    type,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    Element = Link;
    props.to = to;
  } else if (href) {
    Element = "a";
    props.href = href;
  }

  return (
    <Element className={classes} {...props}>
      <span>{children}</span>
    </Element>
  );
}
export default Button;
