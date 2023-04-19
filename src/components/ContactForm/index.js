import classNames from "classnames/bind";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import styles from "./ContactForm.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function ContactForm() {
  return (
    <div
      className={`${cx(
        "wrapper"
      )} d-flex justify-content-between shadow rounded-3 bg-white`}
    >
      <div className="">
        <h3 className={cx("title")}>Contact</h3>
        <div class="py-3">
          {/* <!-- Bootstrap 5 starter form --> */}
          <form id="contactForm">
            {/* <!-- Name input --> */}
            <div class="mb-3">
              <label class="form-label" for="name">
                Name
              </label>
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Name"
                data-sb-validations="required"
              />
              <div class="invalid-feedback" data-sb-feedback="name:required">
                Name is required.
              </div>
            </div>

            {/* <!-- Email address input --> */}
            <div class="mb-3">
              <label class="form-label" for="emailAddress">
                Email Address
              </label>
              <input
                class="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email Address *"
                data-sb-validations="required, email"
              />
              <div
                class="invalid-feedback"
                data-sb-feedback="emailAddress:required"
              >
                Email Address is required.
              </div>
              <div
                class="invalid-feedback"
                data-sb-feedback="emailAddress:email"
              >
                Email Address Email is not valid.
              </div>
            </div>

            {/* <!-- Phone input --> */}
            <div class="mb-3">
              <label class="form-label" for="phoneNumber">
                Phone Number
              </label>
              <input
                class="form-control"
                id="phoneNumber"
                type="number"
                placeholder="Phone Number"
                data-sb-validations="required"
              />
              <div
                class="invalid-feedback"
                data-sb-feedback="phoneNumber:required"
              >
                Phone Number is required.
              </div>
            </div>

            {/* <!-- Message input --> */}
            <div class="mb-3">
              <label class="form-label" for="message">
                Message
              </label>
              <textarea
                class="form-control"
                id="message"
                type="text"
                placeholder="Message"
                style={{ height: "10rem" }}
                data-sb-validations="required"
              ></textarea>
              <div class="invalid-feedback" data-sb-feedback="message:required">
                Message is required.
              </div>
            </div>

            {/* <!-- Form submissions success message --> */}
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">Form submission successful!</div>
            </div>

            {/* <!-- Form submissions error message --> */}
            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>

            <Button>SUBMIT</Button>
          </form>
        </div>
      </div>
      <div>
        <h3 className={cx("title")}>Get In Touch With Us</h3>
        <ul>
          <li>
            <AiOutlineHome className="fs-5 me-3" />
            <address>
              92/16/3 Nguyen Tu Nghiem District 2, Ho Chi Minh City, Viet Nam
            </address>
          </li>
          <li className={cx("liHasLink")}>
            <AiOutlinePhone className="fs-5 me-3" />
            <a href="tel:+84 962334807">+84 962334807</a>
          </li>
          <li className={cx("liHasLink")}>
            <AiOutlineMail className="fs-5 me-3" />{" "}
            <a href="mailto:legiangbmt09@gmail.com">legiangbmt09@gmail.com</a>
          </li>
          <li>
            <AiOutlineInfoCircle className="fs-5 me-3" /> Monday - Friday: 8AM -
            10PM
          </li>
          <img
            src="images/blog-1.jpg"
            className="img-fluid w-100 rounded-3"
            alt="Contact"
          />
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
