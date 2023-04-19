import { Helmet } from "react-helmet";

function MetaTag(props) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
}

export default MetaTag;
