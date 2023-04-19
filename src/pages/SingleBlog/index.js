import classNames from "classnames/bind";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import styles from "./SingleBlog.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import LeftNavFilter from "../../components/LeftNavFilter";
import FeedbackForm from "../../components/FeedbackForm";
import BackButton from "../../components/BackButton";

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

function SingleBlog() {
  return (
    <>
      <MetaTag title="Dynamic Blog Name" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Blogs /", to: "/blogs" },
          { page: "Dynamic Blog Name", to: "/blogs" },
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
                <div className="col-12">
                  <div className={cx("contentSection")}>
                    <BackButton to="/blogs" name="Blogs" />
                    <h1 className={cx("heading1")}>
                      Lorem Ipsum: Quality typographic filler text for
                      webmasters
                    </h1>
                    <img
                      className="img-fluid w-100 my-4 rounded-3"
                      src="/images/blog-1.jpg"
                      alt="Blog 1"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, exerci iuvaret fierent ad mel,
                      usu alterum minimum verterem ex. Putant dignissim
                      neglegentur vis ex, ex vim veritus iracundia. Pro ea choro
                      animal eripuit, viris petentium explicari mel ex, simul
                      accusata deseruisse ad duo. Ex quem assum discere eos, nec
                      in harum debitis dissentias. No dicat legimus mel, an
                      euismod assueverit has.
                    </p>
                    <p>
                      Id inani detracto mandamus per, viris conceptam ius at,
                      pro ea simul scaevola. Ea nec lorem melius inciderint, pri
                      cu fugit detracto suavitate. Pri te labore malorum
                      invidunt. Vel dictas impetus adipiscing id. Legimus
                      scripserit et eos, et nam erat persequeris.
                    </p>
                    <p>
                      Vivendo salutandi pertinacia nec ea, alii tota invidunt an
                      sea. Malis erroribus nec in, hinc impetus albucius ius at.
                      Vero omnis euismod mea eu. Pri harum cetero te, ea usu
                      idque saepe pertinacia. His ut dico doming dictas, quando
                      vivendo ea eam. Quo ut tractatos gloriatur definiebas.
                    </p>
                    <p>
                      Cu postea volumus eam, eum cibo delenit sententiae id, an
                      vocent aliquid repudiare vel. Mea id novum doming
                      indoctum, usu no amet putant scripta. Duo atqui audiam ad,
                      ei qui illud delectus invidunt. Cum summo vocent cu. Cum
                      cu eleifend vituperatoribus, errem accumsan efficiendi no
                      eum, vix novum consul te.
                    </p>
                    <p>
                      Duo iriure omittam no, sed ut harum numquam suscipit.
                      Elitr vivendum qui ea, enim modus fuisset ea pri. An pri
                      eros consulatu, hinc audiam temporibus mea ea, cu qui
                      quando singulis mediocritatem. Fierent voluptua vivendum
                      mei no. Elit consectetuer has eu. No tale nulla deleniti
                      eam, constituam scribentur eu nam, sed ex nulla possim.
                    </p>
                    <div className="d-flex justify-content-between">
                      <p className={cx("datePublish")}>
                        <i>11 Jun, 2022</i>
                      </p>
                      <p className={cx("authorName")}>
                        Author: <b>Giang Le</b>
                      </p>
                    </div>
                  </div>
                  <div className={cx("actionsSection")}>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <BackButton to="/blogs" name="Blogs" />
                      <div
                        className={`${cx(
                          "linkSocial"
                        )} d-flex align-items-center justify-content-between gap-3`}
                      >
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <FaLinkedin />
                      </div>
                    </div>
                    <FeedbackForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
