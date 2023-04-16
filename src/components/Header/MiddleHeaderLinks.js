import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const listLinks = [
  {
    to: "/compare",
    img: "images/compare.svg",
    alt: "Compare icon",
    content1: "Compare",
    content2: "Products",
  },
  {
    to: "/wishlist",
    img: "images/wishlist.svg",
    alt: "Wishlist icon",
    content1: "Favorite",
    content2: "Wishlist",
  },
  {
    to: "/login",
    img: "images/user.svg",
    alt: "User icon",
    content1: "Login",
    content2: "My Account",
  },
];

function MiddleHeaderLinks() {
  return (
    <>
      {listLinks.map((link) => (
        <div className="d-flex flex-grow-1 align-items-center" key={link.alt}>
          <Link
            className="d-flex align-items-center text-white gap-2"
            to={link.to}
          >
            <img className={styles.icon} src={link.img} alt={link.alt} />
            <p>
              {link.content1}
              <br />
              {link.content2}
            </p>
          </Link>
        </div>
      ))}
    </>
  );
}
export default MiddleHeaderLinks;
