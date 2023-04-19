import classNames from "classnames/bind";

import styles from "./About.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";

const cx = classNames.bind(styles);

function About() {
  return (
    <>
      <MetaTag title="About" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "About", to: "/about" },
        ]}
      />
    </>
  );
}

export default About;
