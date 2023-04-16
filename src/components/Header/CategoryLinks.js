import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const listLinks = [
  {
    to: "/",
    content: "Action",
  },
  {
    to: "/",
    content: "Another Action",
  },
  {
    to: "/",
    content: "Something else here",
  },
];

function CategoryLinks() {
  return (
    <>
      {listLinks.map((link) => (
        <li key={Math.random()}>
          <Link
            className={`${styles["category-item"]} dropdown-item`}
            to={link.to}
          >
            {link.content}
          </Link>
        </li>
      ))}
    </>
  );
}
export default CategoryLinks;
