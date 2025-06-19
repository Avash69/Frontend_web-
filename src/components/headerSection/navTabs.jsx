// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { primaryBtnVariant } from "../../utils/animation";

// export const NavTabs = ({ handleMyAccountClick }) => {
//   return (
//     <motion.ul
//       initial={{ y: -20 }}
//       animate={{ y: 0 }}
//       exit={{ y: -20, zIndex: -1, transition: { duration: 0.1, ease: "easeOut" } }}
//       transition={{ type: "spring", stiffness: 100, dampness: 20 }}
//       className="flex flex-col z-50 border-t-[1px] border-LightSecondaryColor absolute top-[100%] bg-white  left-0 right-0 pt-[8px] pb-8  tracking-[0.25px] text-lg  font-medium md:static md:bg-transparent md:border-none md:px-2 md:flex-row md:p-0  md:gap-4 lg:gap-5 md:shadow-none shadow-[0_3px_8px_rgba(0,0,0,0.2)]"
//     >
//       <li className="md:hover:bg-transparent hover:bg-neutralColor py-[6px] md:py-0">
//         <Link to="/" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
//           Home
//         </Link>
//       </li>
//       <li className="md:hover:bg-transparent hover:bg-neutralColor py-[6px] md:py-0">
//         <Link to="/shop" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
//           Shop
//         </Link>
//       </li>
//       <li className=" py-[6px]  md:hover:bg-transparent hover:bg-neutralColor md:py-0">
//         <Link to="/aboutUs" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
//           About us
//         </Link>
//       </li>
//       <li className=" md:hover:bg-transparent md:py-0 py-[6px] hover:bg-neutralColor  ">
//         <Link to="/contactUs" className="px-[4%] w-[100%] h-[100%] inline-block  tablet:px-[6%]   md:px-0 ">
//           Contact
//         </Link>
//       </li>

//       <motion.button
//         initial="initial"
//         whileTap="click"
//         variants={primaryBtnVariant}
//         onClick={handleMyAccountClick}
//         className="w-[125px] h-[40px] mt-[8px] mx-[4%] md:mx-0  block md:hidden tablet:mx-[6%]   rounded-sm text-[#ffffff] bg-primaryColor"
//       >
//         My Account
//       </motion.button>
//     </motion.ul>
//   );
// };
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { primaryBtnVariant } from "../../utils/animation";

export const NavTabs = ({ handleMyAccountClick }) => {
  return (
    <motion.ul
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0, zIndex: -1, transition: { duration: 0.15, ease: "easeOut" } }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="z-50 absolute top-[100%] left-0 right-0 bg-white md:static md:bg-transparent flex flex-col md:flex-row md:items-center shadow-md md:shadow-none border-t border-gray-200 md:border-none px-4 md:px-0 py-4 md:py-0 text-base md:text-lg font-medium gap-2 md:gap-5"
    >
      {[
        { path: "/", label: "Home" },
        { path: "/shop", label: "Shop" },
        { path: "/aboutUs", label: "About Us" },
        { path: "/contactUs", label: "Contact" },
      ].map(({ path, label }) => (
        <li key={label} className="w-full md:w-auto">
          <Link
            to={path}
            className="block w-full px-4 py-2 md:px-0 md:py-0 rounded-md hover:bg-gray-100 md:hover:bg-transparent transition duration-200"
          >
            {label}
          </Link>
        </li>
      ))}

      <motion.button
        initial="initial"
        whileTap="click"
        variants={primaryBtnVariant}
        onClick={handleMyAccountClick}
        className="block md:hidden w-[140px] h-[42px] mt-2 mx-4 bg-primaryColor text-white rounded-md font-semibold"
      >
        My Account
      </motion.button>
    </motion.ul>
  );
};
