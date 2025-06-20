// import { useEffect, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { enterNewPasswordAsync } from "../features/authSlice/enterNewPassword";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export const EnterNewPassword = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   //first field and confirm password field
//   const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });

//   // check if input type=password is in password mode or text mode.first for normal password input and second for confirm password
//   const [isInputValueInPasswordMode1, setIsInputValueInPasswordMode1] = useState(true);

//   const [isInputValueInPasswordMode2, setIsInputValueInPasswordMode2] = useState(true);

//   // on page load,return those who don't have token, to prevous page
//   const urlParams = new URLSearchParams(window.location.search);
//   const token = urlParams.get("token");
//   useEffect(() => {
//     if (!token) {
//       window.history.back();
//     }
//   }, []);

//   // on new password submit
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const { password, confirmPassword } = passwords;
//     if (password !== confirmPassword) {
//       toast("passwords doesnt match", {
//         type: "error",
//         autoClose: 3000,
//         position: "top-center",
//       });
//     } else {
//       const response = await dispatch(enterNewPasswordAsync({ password, token }));

//       if (!response.payload.success) {
//         toast(response.errorMsg, {
//           type: "error",
//           autoClose: 3000,
//           position: "top-center",
//         });
//       } else {
//         toast("Password has been updated,please relogin with the new credentials", {
//           type: "success",
//           autoClose: 3000,
//           position: "top-center",
//         });
//         localStorage.removeItem("UserData");
//         navigate("/login");
//       }
//     }
//   };

//   return (
//     <section className="mt-16 flex justify-center items-center max-w-[340px] text-base  w-[92%] mx-auto">
//       <form className="flex flex-col gap-5  w-[100%] " onSubmit={onSubmit}>
//         <h1 className="text-4xl font-bold text-center font-RobotoCondensed">Change Password</h1>
//         <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
//           <input
//             className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
//             type={`${isInputValueInPasswordMode1 ? "password" : "text"}`}
//             placeholder=" "
//             name=""
//             required
//             id=""
//             value={passwords.password}
//             onChange={(e) =>
//               setPasswords((prevData) => {
//                 return { ...prevData, password: e.target.value };
//               })
//             }
//           />
//           <label for="" className="absolute top-[0.7rem] left-4 z-[-1]">
//             password
//           </label>
//           {isInputValueInPasswordMode1 ? (
//             <FaEye
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPasswordMode1(!isInputValueInPasswordMode1)}
//             />
//           ) : (
//             <FaEyeSlash
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPasswordMode1(!isInputValueInPasswordMode1)}
//             />
//           )}
//         </div>
//         <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor  w-[100%] h-[56px]">
//           <input
//             className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-[100%] h-[100%] authPage-input bg-transparent"
//             type={`${isInputValueInPasswordMode2 ? "password" : "text"}`}
//             placeholder=" "
//             name=""
//             id=""
//             required
//             minLength="8"
//             value={passwords.confirmPassword}
//             onChange={(e) =>
//               setPasswords((prevData) => {
//                 return { ...prevData, confirmPassword: e.target.value };
//               })
//             }
//           />
//           <label for="" className="absolute top-[0.7rem] left-4 z-[-1]">
//             confirm password
//           </label>
//           {isInputValueInPasswordMode2 ? (
//             <FaEye
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPasswordMode2(!isInputValueInPasswordMode2)}
//             />
//           ) : (
//             <FaEyeSlash
//               className="w-6 h-6 absolute top-[0.8rem] right-4"
//               onClick={() => setIsInputValueInPasswordMode2(!isInputValueInPasswordMode2)}
//             />
//           )}
//         </div>
//         <div className="border-[1px]  rounded py-[0.9rem] w-[100%] flex flex-col gap-4 border-black pl-4">
//           <span>Your password must contain:</span>
//           <span className={`${passwords.password.length < 8 ? "text-primaryColor" : "text-secondaryColor"}`}>
//             {passwords.password.length < 8 ? "•" : "✓"}&nbsp; &nbsp;At least 8 characters
//           </span>
//           <span
//             className={`${
//               passwords.password === passwords.confirmPassword ? "text-secondaryColor" : "text-primaryColor"
//             }`}
//           >
//             {passwords.password === passwords.confirmPassword ? "✓" : "•"}&nbsp; &nbsp;Passwords must match
//           </span>
//         </div>
//         <div className="flex justify-between items-center mt-1"></div>
//         <button
//           className="h-[56px] mt-3 bg-primaryColor w-[100%] rounded border-transparent text-white  font-medium"
//           type="submit"
//         >
//           Change Password
//         </button>
//       </form>
//     </section>
//   );
// };
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { enterNewPasswordAsync } from "../features/authSlice/enterNewPassword";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PasswordToggleIcon = ({ visible, onToggle }) => {
  return visible ? (
    <FaEyeSlash
      role="button"
      tabIndex={0}
      aria-label="Hide password"
      className="w-6 h-6 absolute top-[0.8rem] right-4 cursor-pointer"
      onClick={onToggle}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    />
  ) : (
    <FaEye
      role="button"
      tabIndex={0}
      aria-label="Show password"
      className="w-6 h-6 absolute top-[0.8rem] right-4 cursor-pointer"
      onClick={onToggle}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    />
  );
};

export const EnterNewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  useEffect(() => {
    if (!token) {
      window.history.back();
    }
  }, [token]);

  const isPasswordValid = passwords.password.length >= 8;
  const doPasswordsMatch = passwords.password === passwords.confirmPassword;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!doPasswordsMatch) {
      toast.error("Passwords do not match", { autoClose: 3000, position: "top-center" });
      return;
    }
    if (!isPasswordValid) {
      toast.error("Password must be at least 8 characters", { autoClose: 3000, position: "top-center" });
      return;
    }

    const response = await dispatch(enterNewPasswordAsync({ password: passwords.password, token }));

    if (!response.payload?.success) {
      toast.error(response.payload?.errorMsg || "Something went wrong", { autoClose: 3000, position: "top-center" });
    } else {
      toast.success("Password has been updated, please relogin with the new credentials", {
        autoClose: 3000,
        position: "top-center",
      });
      localStorage.removeItem("UserData");
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mt-16 flex justify-center items-center max-w-[340px] w-[92%] mx-auto text-base">
      <form className="flex flex-col gap-5 w-full" onSubmit={onSubmit} noValidate>
        <h1 className="text-4xl font-bold text-center font-RobotoCondensed">Change Password</h1>

        <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor w-full h-[56px]">
          <input
            id="password"
            name="password"
            type={showPassword1 ? "text" : "password"}
            placeholder=" "
            required
            minLength={8}
            autoComplete="new-password"
            className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-full h-full authPage-input bg-transparent"
            value={passwords.password}
            onChange={handleChange}
            aria-describedby="password-requirements"
            aria-invalid={!isPasswordValid}
          />
          <label htmlFor="password" className="absolute top-[0.7rem] left-4 z-[-1] capitalize text-gray-600 select-none">
            Password
          </label>
          <PasswordToggleIcon visible={showPassword1} onToggle={() => setShowPassword1((v) => !v)} />
        </div>

        <div className="authPage-input-container border-[1px] rounded relative border-secondaryColor focus-within:outline-none focus-within:border-primaryColor w-full h-[56px]">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder=" "
            required
            minLength={8}
            autoComplete="new-password"
            className="appearance-none absolute pl-4 top-0 left-0 focus:outline-none w-full h-full authPage-input bg-transparent"
            value={passwords.confirmPassword}
            onChange={handleChange}
            aria-describedby="password-match"
            aria-invalid={!doPasswordsMatch}
          />
          <label htmlFor="confirmPassword" className="absolute top-[0.7rem] left-4 z-[-1] capitalize text-gray-600 select-none">
            Confirm password
          </label>
          <PasswordToggleIcon visible={showPassword2} onToggle={() => setShowPassword2((v) => !v)} />
        </div>

        <div
          className="border-[1px] rounded py-3 w-full flex flex-col gap-2 border-black pl-4 text-sm"
          aria-live="polite"
          aria-atomic="true"
          id="password-requirements"
        >
          <span>Your password must contain:</span>
          <span className={isPasswordValid ? "text-secondaryColor" : "text-primaryColor"}>
            {isPasswordValid ? "✓" : "•"} &nbsp;&nbsp;At least 8 characters
          </span>
          <span className={doPasswordsMatch ? "text-secondaryColor" : "text-primaryColor"} id="password-match">
            {doPasswordsMatch ? "✓" : "•"} &nbsp;&nbsp;Passwords must match
          </span>
        </div>

        <button
          type="submit"
          disabled={!isPasswordValid || !doPasswordsMatch}
          className={`h-[56px] mt-3 w-full rounded font-medium text-white border-transparent transition ${
            isPasswordValid && doPasswordsMatch
              ? "bg-primaryColor hover:bg-primaryColorDark cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Change Password
        </button>
      </form>
    </section>
  );
};
