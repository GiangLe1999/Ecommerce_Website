import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import Breadcrumb from "../../components/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import Button from "../../components/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const cx = classNames.bind(styles);

function Auth() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isResetPassword = searchParams.get("mode") === "recover";
  const isSignup = searchParams.get("mode") === "signup";
  const isCreateNewPassword = searchParams.get("mode") === "new-password";

  return (
    <>
      {isResetPassword ? (
        <MetaTag title="Recover Password" />
      ) : isSignup ? (
        <MetaTag title="Signup" />
      ) : isCreateNewPassword ? (
        <MetaTag title="Create Your New Password" />
      ) : (
        <MetaTag title="Login" />
      )}
      {isResetPassword ? (
        <Breadcrumb
          titles={[
            { page: "Home /", to: "/" },
            { page: "Login /", to: "/auth" },
            { page: "Reset Password", to: "/auth?mode=recover" },
          ]}
        />
      ) : isSignup ? (
        <Breadcrumb
          titles={[
            { page: "Home /", to: "/" },
            { page: "Login /", to: "/auth" },
            { page: "Signup", to: "/auth?mode=signup" },
          ]}
        />
      ) : isCreateNewPassword ? (
        <Breadcrumb
          titles={[
            { page: "Home /", to: "/" },
            { page: "Login /", to: "/auth" },
            { page: "Signup", to: "/auth?mode=signup" },
          ]}
        />
      ) : (
        <Breadcrumb
          titles={[
            { page: "Home /", to: "/" },
            { page: "Login /", to: "/auth" },
            { page: "Signup", to: "/auth?mode=signup" },
          ]}
        />
      )}
      <div className={cx("wrapper")}>
        <div className="row">
          <div className="col-12">
            <div className={`${cx("card")} bg-white rounded-3 shadow`}>
              <h3>
                {isResetPassword
                  ? "Reset Your Password"
                  : isSignup
                  ? "Create Your Account"
                  : isCreateNewPassword
                  ? "Create Your New Password"
                  : "Login"}
              </h3>
              {isResetPassword && (
                <p className={cx("subTitle")}>
                  We will send you an email to reset your password
                </p>
              )}
              <form action="">
                {isSignup && (
                  <>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </>
                )}

                {!isCreateNewPassword && (
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                )}
                {!isResetPassword && (
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                )}

                {isCreateNewPassword && (
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                    />
                  </div>
                )}

                <div className="d-flex align-items-center justify-content-between">
                  {!isResetPassword && !isSignup && !isCreateNewPassword && (
                    <>
                      <Link className={cx("forgotPassword")} to="?mode=recover">
                        Forgot password?
                      </Link>
                      <div>
                        <Button
                          className={cx("signupButton")}
                          to="?mode=signup"
                        >
                          Signup
                        </Button>
                        <Button
                          onClick={(e) => e.preventDefault()}
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                {isResetPassword && (
                  <div className="d-flex flex-column align-items-center">
                    <Button>Submit</Button>
                    <Button
                      type="button"
                      onClick={() => {
                        navigate("/auth");
                      }}
                      className={cx("cancelButton")}
                    >
                      Cancel
                    </Button>
                  </div>
                )}

                {isSignup && (
                  <div className="d-flex justify-content-center">
                    <Button type="submit" className={cx("createButton")}>
                      Create
                    </Button>
                  </div>
                )}

                {isCreateNewPassword && (
                  <div className="d-flex justify-content-center">
                    <Button type="submit" className={cx("createNewPassword")}>
                      Confirm
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
