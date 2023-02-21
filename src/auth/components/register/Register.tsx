import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { useGoogleLogin } from "@react-oauth/google";

const url = "https://zapstaging.ceryxdigital.com/user/register";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPass: false,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        // console.log(res, "0000");

        let infoData = {
          name: res.data.data.name,
          email: res.data.data.email,
          password: res.data.data.password,
        };
        localStorage.setItem("userInfo", JSON.stringify(infoData));
        window.location.href = '/video';
        // console.log(infoData);
        // console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const socialLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      window.location.href = '/video';
      console.log(tokenResponse)
    },
  });

  return (
    // d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed
    // style={{ backgroundImage: `url("../../../../public/media/images/14.png")`, }}
    <div className="main-div">
      <div className="outer-div d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <a href="/" className="logo">
          <img
            alt="Logo"
            // src={'../../../../public/media/logos/zap-logo.svg'}
            src="/media/logos/zap-logo.svg"
            className=""
          />
        </a>

        <div className="inner-div w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
          <form
            className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            id="kt_login_signup_form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-head mb-10 text-center">
              <h1 className="text-dark mb-3">Create an Account</h1>

              <div className="text-gray-400 fw-bold fs-4" id="head-div">
                Already have an account?
                <Link
                  to="/login"
                  className="link-primary fw-bolder"
                  style={{ marginLeft: "5px" }}
                >
                  Forgot Password ?
                </Link>
              </div>
            </div>

            

            <a
              href="#"
              onClick={() => socialLogin()}
              className="social-login btn btn-flex flex-center btn-light btn-lg w-100 mb-5 g_id_signin"
            >
              <img
                alt="Logo"
                src="/media/svg/brand-logos/google-icon.svg"
                className="h-20px me-3"
              />
              Continue with Google
            </a>

            <div className="d-flex align-items-center mb-10">
              <div className="border-bottom border-gray-300 mw-50 w-100"></div>
              <span className="fw-bold text-gray-400 fs-7 mx-2">OR</span>
              <div className="border-bottom border-gray-300 mw-50 w-100"></div>
            </div>

            <div className="form-outer outer-row row fv-row mb-7">
              <div className="form-inner inner-row col-xl-6">
                <label className='class="form-label fw-bolder text-dark fs-6'>
                  Name
                </label>
                <input
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-outer outer-row row fv-row mb-7">
              <div className="form-inner inner-row col-xl-6">
                <label className="form-label fw-bolder text-dark fs-6">
                  Email
                </label>
                <input
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <div className="form-outer fv-row mb-7"></div> */}

            <div
              className="form-outer outer-row mb-10 fv-row"
              data-kt-password-meter="true"
            >
              <div className="form-inner inner-row mb-1">
                <label className="form-label fw-bolder text-dark fs-6">
                  Password
                </label>
                <div className="position-relative mb-3">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                  <div
                    className="d-flex align-items-center mb-3"
                    data-kt-password-meter-control="highlight"
                  >
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                  </div>
                  {/* <div className="text-muted">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div className="form-outer outer-row mb-10 fv-row">
              <div className="form-inner inner-row ">
                <label className="form-label fw-bolder text-dark fs-6">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Password confirmation"
                  autoComplete="off"
                  className="form-control form-control-lg form-control-solid"
                />
              </div>
            </div> */}

            {/* <div className="fv-row mb-5">
              <label className="form-label fw-bolder text-dark fs-6">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Password confirmation"
                autoComplete="off"
                className=""
              />
            </div> */}

            {/* <div className="terms fv-row mb-10">
              <div className=" form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="kt_login_toc_agree"
                />
                <label
                  className="form-check-label fw-bold text-gray-700 fs-6"
                  htmlFor="kt_login_toc_agree"
                >
                  I Agree the{" "}
                  <Link to="/auth/terms" className="ms-1 link-primary">
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>
            </div> */}

            <div className="text-center">
              <button
                type="submit"
                id="kt_sign_up_submit"
                className="btn btn-lg btn-primary w-100 mb-5"
              >
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Submit{" "}
                  {/* <span className="spinner-border spinner-border-sm align-middle ms-2"></span> */}
                </span>
              </button>
              <Link to="/auth/login">
                <button
                  className="btn btn-lg btn-light-primary w-100 mb-5"
                  id="kt_login_signup_form_cancel_button"
                  type="button"
                  onClick={handlePassVisibilty}
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
