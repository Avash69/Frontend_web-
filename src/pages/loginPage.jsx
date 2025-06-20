// import { loginUser } from "../features/authSlice/login";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { validateEmail } from "../utils/emailRegexValidation";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { fetchForgotPasswordClick } from "../features/authSlice/fetchForgotPasswordClick";
// import { fetchResendEmailVerificationLink } from "../features/authSlice/resendEmailVerification";
// import { FullpageSpinnerLoader } from "../components/loaders/spinnerIcon";
// import { motion } from "framer-motion";
// import { primaryBtnVariant } from "../utils/animation";
// import { cartTextChangeVariant } from "../utils/animation";

// export const LoginPage = () => {
//   // check if input type=password is in password mode or text mode
//   const [isInputValueInPassword, setIsInputValueInPassword] = useState(true);

//   const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

//   const { isLoading } = useSelector((state) => state.userAuth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   //  on click of forogtPassword btn and also onclick of resend email verification link
//   const onClickOfSomeBtn = (e) => {
//     let emailInputDOM = e.currentTarget.querySelector("input[type='email']");
//     if (e.target.dataset.nature === "forgotPassswordBtn") {
//       if (emailInputDOM.value === "") {
//         toast("please,email field is required", {
//           type: "info",
//           autoClose: 5000,
//           position: "top-center",
//         });
//       }
//       if (!validateEmail(emailInputDOM.value)) {
//         emailInputDOM.parentElement.nextElementSibling.style.display = "block";
//       } else {
//         dispatch(fetchForgotPasswordClick(loginDetails.email));
//       }
//     } else if (e.target.dataset.nature === "resendEmailVerificationBtn") {
//       if (emailInputDOM.value === "") {
//         toast("please,email field is required", {
//           type: "info",
//           autoClose: 5000,
//           position: "top-center",
//         });
//       }
//       if (!validateEmail(emailInputDOM.value)) {
//         emailInputDOM.parentElement.nextElementSibling.style.display = "block";
//       } else {
//         dispatch(fetchResendEmailVerificationLink(loginDetails.email));
//       }
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     let emailInputDOM = e.currentTarget.querySelector("input[type='email']");
//     if (!validateEmail(emailInputDOM.value)) {
//       emailInputDOM.parentElement.nextElementSibling.style.display = "block";
//     } else {
//       let response = await dispatch(loginUser(loginDetails));

//       if (response.payload.message) {
//         navigate("/");

//         setLoginDetails({ email: "", password: "" });
//       }
//     }
//   };

//   return (
//     <section className="my-16 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
//       <form className="flex flex-col gap-5 w-[100%] " onSubmit={onSubmit} onClick={onClickOfSomeBtn}>
//         <h1 className="text-4xl font-bold text-center font-RobotoCondensed">Welcome back</h1>
//         <div className="w-100% mt-4">
//           <div className="authPage-input-container mt-4 border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
//             <input
//               className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
//               type="email"
//               placeholder=" "
//               name=""
//               value={loginDetails.email}
//               onChange={(e) => {
//                 setLoginDetails((prevData) => {
//                   return { ...prevData, email: e.target.value };
//                 });
//                 if (validateEmail(e.target.value)) {
//                   e.target.parentElement.nextElementSibling.style.display = "none";
//                 }
//               }}
//               required
//             />
//             <label htmlFor="" className="absolute  top-[0.8rem] left-4 z-[-1]">
//               Email address
//             </label>
//           </div>
//           <span className="text-[#fca311] font-RobotoCondensed hidden">Please enter a valid email address</span>
//         </div>
//         <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
//           <input
//             className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
//             type={`${isInputValueInPassword ? "password" : "text"}`}
//             placeholder=" "
//             name=""
//             required
//             value={loginDetails.password}
//             onChange={(e) =>
//               setLoginDetails((prevData) => {
//                 return { ...prevData, password: e.target.value };
//               })
//             }
//           />
//           <label htmlFor="" className=" absolute top-[0.8rem] left-4 z-[-1]">
//             Password
//           </label>
//           {isInputValueInPassword ? (
//             <FaEye
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPassword(!isInputValueInPassword)}
//             />
//           ) : (
//             <FaEyeSlash
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPassword(!isInputValueInPassword)}
//             />
//           )}
//         </div>
//         <div className="flex justify-between items-center mt-1">
//           {/* <div className="flex gap-2 items-center">
//             <input className="border-[1px] w-5 h-5" type="checkbox" name="" />
//             <span>Remember me</span>
//           </div> */}
//           <span data-nature="forgotPassswordBtn" className="text-primaryColor cursor-pointer">
//             Forgot Password?
//           </span>
//         </div>
//         <motion.button
//           initial="initial"
//           whileTap="click"
//           variants={primaryBtnVariant}
//           className="h-[56px] mt-3 bg-primaryColor w-[100%] rounded-md border-transparent text-white text-[18px]  font-medium"
//           type="submit"
//         >
//           <motion.span
//             className="w-[100%] h-[100%] flex items-center justify-center"
//             initial="initial"
//             whileTap="animate"
//             variants={cartTextChangeVariant}
//           >
//             {" "}
//             {isLoading ? "Logging in" : "Log in"}
//           </motion.span>
//         </motion.button>
//         <span className=" text-center">
//           Dont have an account?{" "}
//           <Link to="/register" className="text-primaryColor">
//             Register here
//           </Link>
//         </span>
//         <span
//           className="text-center  hover:tailwindUnderlineDidntWork  text-secondaryColor font-medium cursor-pointer"
//           data-nature="resendEmailVerificationBtn"
//         >
//           Resend email verification
//         </span>
//         {isLoading && <FullpageSpinnerLoader />}
//       </form>
//     </section>
//   );
// };
import { loginUser } from "../features/authSlice/login";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { validateEmail } from "../utils/emailRegexValidation";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { fetchForgotPasswordClick } from "../features/authSlice/fetchForgotPasswordClick";
import { fetchResendEmailVerificationLink } from "../features/authSlice/resendEmailVerification";
import { FullpageSpinnerLoader } from "../components/loaders/spinnerIcon";
import { motion } from "framer-motion";
import { primaryBtnVariant, cartTextChangeVariant } from "../utils/animation";

export const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const { isLoading } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));

    if (name === "email" && validateEmail(value)) {
      e.target.nextElementSibling.style.display = "none"; // hide validation message
    }
  };

  // Handle Forgot Password button click
  const handleForgotPassword = () => {
    if (!loginDetails.email) {
      toast.info("Please enter your email address", { position: "top-center", autoClose: 4000 });
      return;
    }
    if (!validateEmail(loginDetails.email)) {
      toast.error("Please enter a valid email address", { position: "top-center", autoClose: 4000 });
      return;
    }
    dispatch(fetchForgotPasswordClick(loginDetails.email));
  };

  // Handle Resend Email Verification button click
  const handleResendVerification = () => {
    if (!loginDetails.email) {
      toast.info("Please enter your email address", { position: "top-center", autoClose: 4000 });
      return;
    }
    if (!validateEmail(loginDetails.email)) {
      toast.error("Please enter a valid email address", { position: "top-center", autoClose: 4000 });
      return;
    }
    dispatch(fetchResendEmailVerificationLink(loginDetails.email));
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(loginDetails.email)) {
      e.target.email.nextElementSibling.style.display = "block"; // show validation message
      toast.error("Please enter a valid email address", { position: "top-center", autoClose: 4000 });
      return;
    }

    if (!loginDetails.password) {
      toast.error("Password is required", { position: "top-center", autoClose: 4000 });
      return;
    }

    const response = await dispatch(loginUser(loginDetails));

    if (response.payload?.message) {
      toast.success("Login successful");
      navigate("/");
      setLoginDetails({ email: "", password: "" });
    } else if (response.error) {
      toast.error(response.error);
    }
  };

  return (
    <section className="my-16 flex justify-center items-center max-w-[340px] w-[92%] mx-auto text-base">
      <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit} noValidate>
        <h1 className="text-4xl font-bold text-center font-RobotoCondensed">Welcome back</h1>

        <div className="authPage-input-container mt-4 border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor w-full h-[56px]">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-full h-full authPage-input bg-transparent"
            value={loginDetails.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
          />
          <label htmlFor="email" className="absolute top-[0.8rem] left-4 z-[-1]">
            Email address
          </label>
          <span className="text-[#fca311] font-RobotoCondensed hidden">Please enter a valid email address</span>
        </div>

        <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor w-full h-[56px]">
          <input
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder=" "
            className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-full h-full authPage-input bg-transparent"
            value={loginDetails.password}
            onChange={handleInputChange}
            required
            autoComplete="current-password"
          />
          <label htmlFor="password" className="absolute top-[0.8rem] left-4 z-[-1]">
            Password
          </label>
          {isPasswordVisible ? (
            <FaEyeSlash
              className="w-6 h-6 absolute top-[0.8rem] right-4 cursor-pointer"
              onClick={() => setIsPasswordVisible(false)}
              aria-label="Hide password"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && setIsPasswordVisible(false)}
            />
          ) : (
            <FaEye
              className="w-6 h-6 absolute top-[0.8rem] right-4 cursor-pointer"
              onClick={() => setIsPasswordVisible(true)}
              aria-label="Show password"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && setIsPasswordVisible(true)}
            />
          )}
        </div>

        <div className="flex justify-between items-center mt-1">
          <span
            onClick={handleForgotPassword}
            className="text-primaryColor cursor-pointer select-none"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && handleForgotPassword()}
            data-nature="forgotPasswordBtn"
          >
            Forgot Password?
          </span>
        </div>

        <motion.button
          initial="initial"
          whileTap="click"
          variants={primaryBtnVariant}
          className="h-[56px] mt-3 bg-primaryColor w-full rounded-md border-transparent text-white text-[18px] font-medium"
          type="submit"
          disabled={isLoading}
        >
          <motion.span
            className="w-full h-full flex items-center justify-center"
            initial="initial"
            whileTap="animate"
            variants={cartTextChangeVariant}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </motion.span>
        </motion.button>

        <span className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-primaryColor">
            Register here
          </Link>
        </span>

        <span
          onClick={handleResendVerification}
          className="text-center text-secondaryColor font-medium cursor-pointer select-none mt-1 block"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && handleResendVerification()}
          data-nature="resendEmailVerificationBtn"
        >
          Resend email verification
        </span>

        {isLoading && <FullpageSpinnerLoader />}
      </form>
    </section>
  );
};
