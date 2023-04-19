import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import ContactForm from "../../components/ContactForm";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <>
      <MetaTag title="Contact Us" />
      <Breadcrumb
        titles={[
          { page: "Home /", to: "/" },
          { page: "Contact Us", to: "/contact" },
        ]}
      />
      <div className={cx("wrapper")}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-center py-5">
              <iframe
                className={cx("googleMaps")}
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3260217368506!2d106.75978977427167!3d10.786322859012694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277e835910eb%3A0xe971782f0fb7091a!2zOTIvMTYgxJAuIE5ndXnhu4VuIFTGsCBOZ2hpw6ptLCBQaMaw4budbmcgQsOsbmggVHLGsG5nIFTDonksIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681719017890!5m2!1svi!2s"
                allowFullScreen={true}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
