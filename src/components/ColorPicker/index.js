import classNames from "classnames/bind";

import styles from "./ColorPicker.module.scss";

const cx = classNames.bind(styles);
const colorList = [
  "#000000",
  "#133337",
  "#666666",
  "#808080",
  "#c0c0c0",
  "#e3e3e3",
  "#c4aaaa",
  "#ff80ed",
  "#ff7373",
  "#ffb6c1",
  "#fa8072",
  "#ffc0cb",
  "#ffe4e1",
  "#faebd7",
  "#065535",
  "#008080",
  "#bada55",
  "#b0e096",
  "#b0e0e6",
  "#c6e2ff",
  "#03a0e5",
  "#40e0d0",
  "#7fffd4",
  "#d3ffce",
  "#ff0000",
  "#ffa500",
  "#003366",
  "#800080",
];

function ColorPicker() {
  return (
    <ul className="d-flex flex-wrap">
      {colorList.map((color) => (
        <li className={cx("color")} style={{ backgroundColor: color }}></li>
      ))}
    </ul>
  );
}

export default ColorPicker;
