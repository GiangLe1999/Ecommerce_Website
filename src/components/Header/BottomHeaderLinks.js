import { NavLink } from "react-router-dom";

const listLinks = [
  {
    to: "/",
    content: "Home",
  },
  {
    to: "/store",
    content: "Our Store",
  },
  {
    to: "/blogs",
    content: "Blogs",
  },
  {
    to: "/contact",
    content: "Contact",
  },
];

function BottomHeaderLinks() {
  return (
    <>
      {listLinks.map((link) => (
        <div className="h-100" key={Math.random()}>
          <NavLink className="py-2" to={link.to}>
            {link.content}
          </NavLink>
        </div>
      ))}
    </>
  );
}
export default BottomHeaderLinks;
