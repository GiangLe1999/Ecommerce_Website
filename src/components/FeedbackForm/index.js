import classNames from "classnames/bind";

import styles from "./FeedbackForm.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function FeedbackForm() {
  return (
    <div className={`${cx("wrapper")} shadow rounded-3 bg-white my-5`}>
      <div className="">
        <h3 className={cx("title")}>Leave a Comment</h3>
        <div class="py-3">
          {/* <!-- Bootstrap 5 starter form --> */}
          <form id="contactForm">
            <div className="row">
              <div class="mb-3 col-6">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Name *"
                  data-sb-validations="required"
                />
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Name is required.
                </div>
              </div>

              {/* <!-- Email address input --> */}
              <div class="mb-3 col-6">
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
            </div>
            {/* <!-- Name input --> */}

            {/* <!-- Message input --> */}
            <div class="mb-3">
              <textarea
                class="form-control"
                id="comment"
                type="text"
                placeholder="Comment *"
                style={{ height: "10rem" }}
                data-sb-validations="required"
              ></textarea>
              <div class="invalid-feedback" data-sb-feedback="message:required">
                Comment is required.
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
    </div>
  );
}

export default FeedbackForm;
