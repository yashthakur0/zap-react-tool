import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import { googleLogin } from "../../moduls/_requests";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const url = "https://zapstaging.ceryxdigital.com/user/login";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  // console.log(values);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let data = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        // console.log(res);
        // console.log(res.data.data.token);
      })
      .catch((err) => console.error(err));
  };

  (window as any).handleCredentialResponse = async (response: any) => {
    console.log("who am I " + response.credential);
    let { data: auth } = await googleLogin(response.credential);
    console.log("auth is", auth);
    // saveAuth(auth.data)
    // const {data: user} = await getUserByToken(auth.data.token)
    // console.log('user is', user);
    // setCurrentUser(user.data)
    // console.log('user.data is', user.data);
  };

  // const handleSocialLogin = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   axios.post(SOCIAL_LOGIN_URL, {
  //     google_user_detail: googleCredential,
  //   });
  // };

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  const socialLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
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
            className="form w-100"
            id="kt_login_signin_form"
            onSubmit={handleSubmit}
          >
            <div className="form-head text-center mb-10">
              <h1 className="text-dark mb-3">Sign In to ZAP</h1>
              <div className="text-gray-400 fw-bold fs-4" id="head-div">
                New Here?{" "}
                <Link
                  to="/signin"
                  className="link-primary fw-bolder"
                >
                  {" "}
                  Create an Account{" "}
                </Link>
              </div>
            </div>

            <div className="form-field fv-row mb-5">
              <label className="form-label fs-6 fw-bolder text-dark">
                Email
              </label>
              <br />
              <input
                className="form-control form-control-lg form-control-solid"
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>

            <div className="form-field fv-row mb-10">
              <div className="d-flex justify-content-between mt-n5">
                <div className="d-flex flex-stack mb-2">
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="link-primary fs-6 fw-bolder"
                    style={{ marginLeft: "5px" }}
                  >
                    {" "}
                    Forgot Password ?{" "}
                  </Link>
                </div>
              </div>
              <input
                className="form-control form-control-lg form-control-solid"
                placeholder="Password"
                type="password"
                autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>

            <div>
              <button
                className="btn btn-lg btn-primary w-100 mb-3"
                type="submit"
                id="kt_sign_in_submit"
                onClick={handlePassVisibilty}
              >
                {" "}
                Continue{" "}
              </button>

              <div className="text-center text-muted text-uppercase fw-bolder mb-3">
                or
              </div>

              {/* <div
                id="g_id_onload"
                data-client_id="179666274097-ngp28m8n673s8stuf77reoi7lu05l2mu.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="handleCredentialResponse"
                data-auto_select="true"
                data-itp_support="true"
              ></div> */}

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

              {/* <div className="social-login btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                <GoogleLogin
                auto_select
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse.credential);
                      var tokenString = credentialResponse.credential || ""
                      var decoded = jwt_decode(tokenString);
                      console.log(decoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//         <form
//       className='form w-100'
//       noValidate
//       id='kt_login_signin_form'
//     >

//       {/* begin::Heading */}
//       <div className='text-center mb-10'>
//         <h1 className='text-dark mb-3'>Sign In to ZAP</h1>
//         <div className='text-gray-400 fw-bold fs-4'>
//           New Here?{' '}
//           {/* <Link to='/auth/registration' className='link-primary fw-bolder'>
//             Create an Account
//           </Link> */}
//         </div>
//       </div>
//       {/* begin::Heading */}

//       {/* begin::Form group */}
//       <div className='fv-row mb-10'>
//         <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
//         <input
//           placeholder='Email'
//           type='email'
//           name='email'
//           autoComplete='off'
//         />
//       </div>
//       {/* end::Form group */}

//       {/* begin::Form group */}
//       <div className='fv-row mb-10'>
//         <div className='d-flex justify-content-between mt-n5'>
//           <div className='d-flex flex-stack mb-2'>
//             {/* begin::Label */}
//             <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
//             {/* end::Label */}
//             {/* begin::Link */}
//             <Link
//               to='/auth/forgot-password'
//               className='link-primary fs-6 fw-bolder'
//               style={{marginLeft: '5px'}}
//             >
//               Forgot Password ?
//             </Link>
//             {/* end::Link */}
//           </div>
//         </div>
//         <input
//           type='password'
//           autoComplete='off'
//         />
//       </div>
//       {/* end::Form group */}

//       {/* begin::Action */}
//       <div className='text-center'>
//         <button
//           type='submit'
//           id='kt_sign_in_submit'
//           className='btn btn-lg btn-primary w-100 mb-5'
//         >
//         </button>

//         {/* begin::Separator */}
//         <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div>
//         {/* end::Separator */}

//         {/* begin::Google link */}
//         <div id="g_id_onload"
//             data-client_id="179666274097-ngp28m8n673s8stuf77reoi7lu05l2mu.apps.googleusercontent.com"
//             data-context="signin"
//             data-ux_mode="popup"
//             data-callback="handleCredentialResponse"
//             data-auto_select="true"
//             data-itp_support="true">
//         </div>
//         <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5 g_id_signin' data-size="medium" data-shape="pill">
//           <img
//             alt='Logo'
//             src={'/media/svg/brand-logos/google-icon.svg'}
//             className='h-20px me-3'
//           />
//           Continue with Google
//         </a>
//         {/* end::Google link */}
//       </div>
//       {/* end::Action */}
//     </form>
//       </div>
//     )
//   }
// }
